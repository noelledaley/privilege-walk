import Controller from "@ember/controller";

export default Controller.extend({
  sortProperties: "timestamp",
  sortAscending: false,
  actions: {
    saveAnswers: function(answers) {
      const newAnswers = this.store.createRecord("user-answers", answers);
      newAnswers.save();
    }
  }
});
