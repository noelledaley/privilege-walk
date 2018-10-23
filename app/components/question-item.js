import Component from "@ember/component";
import { computed } from "@ember/object";
import questions from "../helpers/questions";

export default Component.extend({
  classNames: ["question-item"],
  currentQuestion: computed("currentIndex", function() {
    return questions()[this.currentIndex];
  })
});
