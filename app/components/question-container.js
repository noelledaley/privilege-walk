import Component from "@ember/component";

export default Component.extend({
  score: null,
  currentIndex: null,
  isLastQuestion: null,
  isDone: null,
  startOver() {},
  actions: {
    handleForward: function() {
      if (this.isLastQuestion) {
        this.toggleProperty("isDone");
      }
      this.set("score", this.score + 1);
      this.set("currentIndex", this.currentIndex + 1);
    },
    handleBackward: function() {
      if (this.isLastQuestion) {
        this.toggleProperty("isDone");
      }
      this.set("score", this.score - 1);
      this.set("currentIndex", this.currentIndex + 1);
    }
  }
});
