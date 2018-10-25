import Controller from "@ember/controller";

export default Controller.extend({
  sortProperties: "timestamp",
  sortAscending: false,
  saveSuccess() {
    this.send("doRefresh");
    this.transitionToRoute("user-answers.results");
  },
  actions: {
    saveAnswers: function(answers) {
      const userId = window.localStorage.getItem("privilegeWalkUserId");
      if (userId) {
        this.saveSuccess();
      }
      const newAnswers = this.store.createRecord("user-answers", answers);
      window.localStorage.setItem("privilegeWalkUserId", newAnswers.id);
      newAnswers.save().then(() => this.saveSuccess());
    }
  }
});
