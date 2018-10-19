import Component from "@ember/component";
import { computed } from "@ember/object";
import questions from "../helpers/questions";

export default Component.extend({
  score: 0,
  currentIndex: 0,
  isLastQuestion: computed("currentIndex", function() {
    return this.currentIndex >= questions().length - 1;
  }),
  isDone: false,
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
