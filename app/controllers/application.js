import Controller from "@ember/controller";

export default Controller.extend({
  sortProperties: "timestamp",
  sortAscending: false,
  actions: {
    recordUserAnswers: function(answer, currentQuestionIndex) {
      const questionName = `question${currentQuestionIndex}`;
      const newUserAnswer = this.store.createRecord("user-answers", {
        [questionName]: answer,
        timestamp: new Date().getTime()
      });
      newUserAnswer.save();
    }
  }
});
