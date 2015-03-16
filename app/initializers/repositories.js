import Ember from "ember";
import registerWithContainer from "ember-cli-auto-register/register";

export function initialize(container, application) {
    registerWithContainer("repositories", application);
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
