import Route from "@ember/routing/route";

export default Route.extend({
  model: function() {
    const userId = window.localStorage.getItem("privilegeWalkUserId");
    if (userId) {
      return this.store.findRecord("user-answers", userId);
    }
  },
  actions: {
    doRefresh: function() {
      this.refresh();
    }
  }
});
