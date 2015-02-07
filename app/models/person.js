import { attr, Model } from "ember-cli-simple-store/model";

var Person = Model.extend({
    firstName: attr(),
    lastName: attr(),
    wat: attr(),
    fullName: function() {
        var first = this.get("firstName");
        var last = this.get("lastName");
        return first + " " + last;
    }.property("firstName", "lastName")
});

export default Person;
