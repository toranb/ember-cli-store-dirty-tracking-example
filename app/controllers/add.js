import Ember from "ember";
import {ValidationMixin, validate} from "ember-cli-simple-validation/mixins/validate";

var AddController = Ember.Controller.extend(ValidationMixin, {
    repository: Ember.inject.repositories('person'),
    firstNameValidation: validate("model.firstName"),
    lastNameValidation: validate("model.lastName", /\d{5}/),
    emailValidation: validate("model.email", /\S+@\S+\.\S+/),
    actions: {
        wat: function(callback) {
            var promise = new Ember.RSVP.Promise(function(resolve, reject) {
                Ember.run.later(function() {
                    resolve();
                }, 3000);
            });
            callback(promise);
            promise.then(function() {
                console.log("WAT!");
            });
        },
        save: function() {
            this.set("submitted", true);
            if(this.get("valid")) {
                var model = this.get("model");
                var repository = this.get("repository");
                repository.save(model);
                this.transitionToRoute("/");
            }
        }
    }
});

export default AddController;
