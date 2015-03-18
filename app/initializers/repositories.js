import Ember from "ember";
import PersonRepository from "example/repositories/person";

export function initialize(container, application) {
    application.register("repositories:person", PersonRepository);
    application.inject("repositories", "store", "store:main");
    Ember.inject.repositories = function(name) {
         return function(propertyName) {
             var objectName = name || propertyName;
             return container.lookup("repositories:" + objectName);
         }.property();
    };
}

export default {
    name: "repositories",
    after: "store",
    initialize: initialize
};
