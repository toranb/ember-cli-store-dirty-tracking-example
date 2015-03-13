import Ember from 'ember';

var PeopleRoute = Ember.Route.extend({
    repository: Ember.inject.repositories('person'),
    model: function() {
        var repository = this.get('repository');
        return repository.find();
    }
});

export default PeopleRoute;
