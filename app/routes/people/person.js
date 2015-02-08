import Ember from 'ember';

var PeoplePersonRoute = Ember.Route.extend({
    setupController: function(controller, model) {
        this._super(controller, model);
        controller.set('submitted', undefined);
    },
    actions: {
        willTransition: function(transition) {
            var model = this.controller.get('model');
            if (model.get('isDirty')) {
                if(!confirm("Are you sure you want to abandon progress?")) {
                    transition.abort();
                }else{
                    model.rollback();
                    return true;
                }
            }
        }
    }
});

export default PeoplePersonRoute;
