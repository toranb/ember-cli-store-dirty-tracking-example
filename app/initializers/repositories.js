import Ember from "ember";
import PersonRepository from "example/repositories/person";

export function initialize(container, application) {
    application.register("repositories:person", PersonRepository);
    application.inject("repositories", "store", "store:main");
    Ember.inject.repositories = function(name) {
        return container.lookup("repositories:" + name);
    };
}

export default {
    name: "repositories",
    after: "store",
    initialize: initialize
};
