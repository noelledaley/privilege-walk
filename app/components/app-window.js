import Component from "@ember/component";
import { computed } from "@ember/object";
import questions from "../helpers/questions";

export default Component.extend({
  classNames: ["app-window"],
  hasBegun: false,
  score: 0,
  currentIndex: 0,
  isLastQuestion: computed("currentIndex", function() {
    return this.currentIndex >= questions().length - 1;
  }),
  isDone: false,
  actions: {
    handleBegin: function() {
      this.toggleProperty("hasBegun");
    },
    startOver: function() {
      this.toggleProperty("isDone");
      this.set("score", 0);
      this.set("currentIndex", 0);
    }
  }
});
