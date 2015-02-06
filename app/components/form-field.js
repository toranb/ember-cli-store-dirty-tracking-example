import Ember from "ember";

var FormField = Ember.Component.extend({
    tagName: "span",
    classNameBindings: ["visible"],
    attributeBindings: ["className", "model", "field", "validation"],
    visible: function() {
        var className = this.get("className");
        var isDirty = this.get("isDirty");
        var validation = this.get("validation");
        if(!validation && isDirty) {
            return className;
        }
        return className ? "hidden %@".fmt(className) : "hidden";
    }.property("validation", "isDirty"),
    initialize: function() {
        var isDirty = "model.%@IsDirty".fmt(this.get("field"));
        Ember.Binding.from(isDirty).to("isDirty").connect(this);
    }.on("init")
});

export default FormField;
