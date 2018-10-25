import Route from "@ember/routing/route";

export default Route.extend({
  model: function() {
    const userId = window.localStorage.getItem("privilegeWalkUserId");
    if (userId) {
      this.store.findRecord("user-answers", userId).then((result) => {
        return result
      });
    }
  },
  actions: {
    doRefresh: function() {
      this.refresh();
    }
  }
});
