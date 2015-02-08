import Ember from "ember";
import {ValidationMixin, validate} from "ember-cli-simple-validation/mixins/validate";

var PeoplePersonController = Ember.Controller.extend(ValidationMixin, {
    firstNameValidation: validate("model.firstName"),
    lastNameValidation: validate("model.lastName", /\d{5}/),
    emailValidation: validate("model.email", /\S+@\S+\.\S+/),
    actions: {
        save: function() {
            this.set("submitted", true);
            if(this.get("valid")) {
                var model = this.get("model");
                var repository = this.get("repository");
                repository.save(model);
            }
        }
    }
});

export default PeoplePersonController;
