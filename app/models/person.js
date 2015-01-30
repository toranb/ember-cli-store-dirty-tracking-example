import { attr, Model } from "ember-cli-simple-store/model";

var Person = Model.extend({
    firstName: attr(),
    lastName: attr(),
    wat: attr(),
    watError: function() {
        var wat = this.get("wat");
        var isDirty = this.get("wat:isDirty");
        if(!wat && isDirty) {
            return "please enter a valid wat";
        }
    }.property("wat"),
    fullName: function() {
        var first = this.get("firstName");
        var last = this.get("lastName");
        return first + " " + last;
    }.property("firstName", "lastName")
});

export default Person;
