import Route from "@ember/routing/route";

export default Route.extend({
  model: function() {
    // const userId = window.localStorage.getItem("privilegeWalkUserId");
    // const stuff = this.store.query("user-answers", {
    //   orderBy: "id",
    //   equalTo: userId
    // })
    // return stuff
    return this.store.findAll("user-answers");
  },
  actions: {
    doRefresh: function () {
      this.refresh()
    }
  }
});
