import Ember from "ember";
import Person from "example/models/person";
import PromiseMixin from "ember-promise/mixins/promise";

var nextId = 2;

var PersonRepository = Ember.Object.extend({
    save: function(model) {
        if(model.get("id")){
            model.save();
        }else{
            this.insert(model);
        }
    },
    insert: function(model) {
        nextId++;
        var person = {
            id: nextId,
            firstName: model.get("firstName"),
            lastName: model.get("lastName"),
            email: model.get("email")
        };
        //in prod you would xhr here before pushing
        var store = this.get("store");
        store.push("person", person);
    },
    create: function() {
        return Person.create();
    },
    find: function() {
        var store = this.get("store");
        var all = store.find("person");
        PromiseMixin.xhr("/api/people", "GET").then(function(response) {
            response.forEach(function(data) {
                store.push("person", data);
            });
            all.set('isLoaded', true);
        });
        return all;
    }
});

export default PersonRepository;
