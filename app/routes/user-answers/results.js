import Route from "@ember/routing/route";

export default Route.extend({
  model: function() {
    return this.store.findAll("user-answers");
  },
  parentModel: function() {
    this.modelFor("user-answers")
  }
});
