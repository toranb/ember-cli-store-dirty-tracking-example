import Ember from 'ember';

var AddRoute = Ember.Route.extend({
    model: function() {
        var repository = this.get('repository');
        return repository.create();
    }
});

export default AddRoute;
