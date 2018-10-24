import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  score: null,
  stepsForward: computed("answers", function() {
    const numSteps = this.answers.filter(a => a === 1).length;
    if (numSteps === 1) {
      return `${numSteps} step`;
    } else {
      return `${numSteps} steps`;
    }
  }),
  stepsBack: computed("answers", function() {
    const numSteps = this.answers.filter(a => a === -1).length;
    if (numSteps === 1) {
      return `${numSteps} step`;
    } else {
      return `${numSteps} steps`;
    }
  }),
  percentage: computed("answers", function() {
    const allScores = this.model.content.map(i => i._record.score);
    const sumScores = allScores.reduce((prev, current) => (current += prev));
    const avg = sumScores / allScores.length;
    const percentage = ((this.score / avg) * 100).toFixed(0);
    if (percentage >= 0) {
      return `${percentage}% more`;
    } else {
      return `${Math.abs(percentage)}% less`;
    }
  })
});
