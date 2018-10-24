import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  stepsForward: computed("answers", function() {
    return this.answers.filter(a => a === 1).length;
  }),
  stepsBack: computed("answers", function() {
    return this.answers.filter(a => a === -1).length;
  })
});
