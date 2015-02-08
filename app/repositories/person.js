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
        //only doing this to prevent a reload of this static/xhr
        if (all.length < 1) {
            return PromiseMixin.xhr("/api/people", "GET").then(function(response) {
                response.forEach(function(data) {
                    store.push("person", data);
                });
                return store.find("person");
            });
        }
        return all;
    }
});

export default PersonRepository;
