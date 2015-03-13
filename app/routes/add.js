import Ember from 'ember';

var AddRoute = Ember.Route.extend({
    repository: Ember.inject.repositories('person'),
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
