import Ember from "ember";
import {ValidationMixin, validate} from "example/validators/validate";

//complex flag for component?
var AddController = Ember.ObjectController.extend(ValidationMixin, {
    firstNameValidation: validate("model.firstName"),
    lastNameValidation: validate("model.lastName", /\S+@\S+\.\S+/),
    watValidation: validate("model.wat", /\S+@\S+\.\S+/),
    actions: {
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
