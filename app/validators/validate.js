import Ember from "ember";

function attrs(mixin) {
    var all = [];
    var factory = mixin.get("constructor.ClassMixin.ownerConstructor");
    factory.eachComputedProperty(function (key, meta) {
        if (key.indexOf("Validation") > 1) {
            all.push(key);
        }
    });
    return all;
}

var ValidationMixin = Ember.Mixin.create({
    validate: function() {
        var self = this;
        var attributes = attrs(this);
        Ember.defineProperty(this, "valid", Ember.computed(function() {
            var result;
            attributes.forEach(function(attr, index) {
                result = index === 0 ? self.get(attr) : self.get(attr) && result;
            });
            return result;
        }).property("" + attributes));
    }.on("init")
});

var validate = function(field, options) {
    return function() {
        var value = this.getWithDefault(field, "");
        if (typeof(options) === "object") {
            return options.test(value);
        }
        return value.trim().length > 0;
    }.property(field);
};

export {ValidationMixin, validate};
