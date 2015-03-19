import Ember from 'ember';
import inject from 'example/utilities/inject';

var AddRoute = Ember.Route.extend({
    repository: inject('person'),
    model: function() {
        var repository = this.get('repository');
        return repository.create();
    },
    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('submitted', undefined);
    }
});

export default AddRoute;
