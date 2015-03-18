import Ember from 'ember';

var PeopleRoute = Ember.Route.extend({
    repository: Ember.inject.repositories('person'),
    model: function() {
        var repository = this.get('repository');
        console.log(repository);
        //the console.log shows a class the first time
        //and something with isDestroying: true and isDestroyed: true
        return repository.find();
    }
});

export default PeopleRoute;
