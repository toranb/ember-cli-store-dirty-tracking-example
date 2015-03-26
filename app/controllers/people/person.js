import Ember from "ember";
import inject from 'example/utilities/inject';
import {ValidationMixin, validate} from "ember-cli-simple-validation/mixins/validate";

var PeoplePersonController = Ember.Controller.extend(ValidationMixin, {
    repository: inject('person'),
    firstNameValidation: validate("model.firstName"),
    lastNameValidation: validate("model.lastName", /\d{5}/),
    emailValidation: validate("model.email", /\S+@\S+\.\S+/),
    actions: {
        save: function() {
            this.set("submitted", true);
            if(this.get("valid")) {
                var model = this.get("model.content");
                var repository = this.get("repository");
                repository.save(model);
            }
        }
    }
});

export default PeoplePersonController;
