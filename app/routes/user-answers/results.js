import Route from "@ember/routing/route";

export default Route.extend({
  model: function() {
    return this.store.findAll("user-answers");
  },

  setupController(controller, model) {
    controller.set('parentModel', this.modelFor('user-answers'))
    this._super(controller, model);
  },

});
