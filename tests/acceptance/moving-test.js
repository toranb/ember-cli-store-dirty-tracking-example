import Ember from 'ember';
import startApp from '../helpers/start-app';
import {test, module} from 'qunit';

var application, people = [{id: 1, firstName: "first", lastName: "50022", email: "hi@hi.com"}, {id: 2, firstName: "last", lastName: "09123", email: "yo@yo.com"}];

module('Acceptance: Moving', {
    setup: function() {
        application = startApp();
        $.fauxjax.new({
            url: '/api/people',
            dataType: 'json',
            responseText: people
        });
    },
    teardown: function() {
        Ember.run(application, 'destroy');
    }
});

test('when marking the object as dirty the user can choose to abort and rollback the model changes', function(assert) {
    var original = window.confirm;
    window.confirm = function() {
        return true;
    };
    visit('/');
    click('.details_link a:eq(0)');
    andThen(function() {
        assert.equal(find("input:eq(0)").val(), 'first');
    });
    fillIn('input:eq(0)', 'firstx');
    andThen(function() {
        assert.equal(find("input:eq(0)").val(), 'firstx');
    });
    click('.details_link a:eq(1)');
    andThen(function() {
        assert.equal(find("input:eq(0)").val(), 'last');
    });
});

test('if the user does not abort the page will not transition and the model will remain updated/dirty', function(assert) {
    var original = window.confirm;
    window.confirm = function() {
        return false;
    };
    visit('/');
    click('.details_link a:eq(0)');
    andThen(function() {
        assert.equal(find("input:eq(0)").val(), 'first');
    });
    fillIn('input:eq(0)', 'wat');
    andThen(function() {
        assert.equal(find("input:eq(0)").val(), 'wat');
    });
    click('.details_link a:eq(1)');
    andThen(function() {
        assert.equal(find("input:eq(0)").val(), 'wat');
    });
});
