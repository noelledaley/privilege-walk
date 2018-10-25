import Component from "@ember/component";

export default Component.extend({
  score: null,
  currentIndex: null,
  isLastQuestion: null,
  isDone: null,
  answers: null,
  startOver() {},
  init() {
    this._super(...arguments);
    this.set("answers", []);
  },
  recordAnswer(answer) {
    this.answers.push(answer);
    this.set("currentIndex", this.currentIndex + 1);
  },
  handleSaveAnswers() {
    this.toggleProperty("isDone");
    const answers = Object.assign(
      {},
      { answers: this.answers },
      {
        timestamp: new Date().getTime(),
        score: this.score
      }
    );

    this.saveAnswers(answers);
  },
  actions: {
    handleForward: function() {
      this.set("score", this.score + 1);
      this.recordAnswer(1);
      if (this.isLastQuestion) {
        this.handleSaveAnswers();
      }
    },
    handleBackward: function() {
      this.set("score", this.score - 1);
      this.recordAnswer(-1);
      if (this.isLastQuestion) {
        this.handleSaveAnswers();
      }
    },
    handleStartOver() {
      this.set("answers", []);
      this.startOver();
    }
  }
});
