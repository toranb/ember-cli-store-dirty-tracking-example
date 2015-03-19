import Ember from 'ember';
import inject from 'example/utilities/inject';

var PeopleRoute = Ember.Route.extend({
    repository: inject('person'),
    model: function() {
        var repository = this.get('repository');
        return repository.find();
    }
});

export default PeopleRoute;
