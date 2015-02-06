var validate = function(field, options) {
    return function() {
        var value = this.getWithDefault(field, "");
        if (typeof(options) === "object") {
            return options.test(value);
        }
        return value.trim().length > 0;
    }.property(field)
};

export default validate;
