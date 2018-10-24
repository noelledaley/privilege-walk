import Controller from "@ember/controller";

export default Controller.extend({
  sortProperties: "timestamp",
  sortAscending: false,
  saveSuccess() {
    this.send('doRefresh');
  },
  actions: {
    saveAnswers: function(answers) {
      const newAnswers = this.store.createRecord("user-answers", answers);
      window.localStorage.setItem("privilegeWalkUserId", JSON.stringify(newAnswers.id));
      newAnswers.save().then(() => this.saveSuccess());
    }
  }
});
