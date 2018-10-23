import Controller from "@ember/controller";

export default Controller.extend({
  sortProperties: ["timestamp"],
  sortAscending: false,
  actions: {
    recordUserAnswers: function() {
      var newUserAnswer = this.store.createRecord("user-answers", {
        question1: "hi",
        // question2: this.get("question2"),
        timestamp: new Date().getTime()
      });
      newUserAnswer.save();
    }
  }
});
