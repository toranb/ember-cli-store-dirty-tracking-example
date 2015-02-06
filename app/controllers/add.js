import Ember from "ember";
import validate from "example/validators/validate";

var AddController = Ember.ObjectController.extend({
    firstNameValidation: validate("model.firstName"),
    lastNameValidation: validate("model.lastName", /\S+@\S+\.\S+/),
    actions: {
        save: function() {
            var model = this.get("model");
            var repository = this.get("repository");
            repository.save(model);
            this.transitionToRoute("/");
        }
    }
});

export default AddController;
