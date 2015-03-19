import Ember from "ember";

export default function(name) {
    return Ember.computed(function(propertyName) {
        var objectName = name || propertyName;
        return this.container.lookup("repositories:" + objectName);
    });
}
