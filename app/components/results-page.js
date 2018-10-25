import Component from "@ember/component";
import { computed } from "@ember/object";

export default Component.extend({
  classNames: ["results-page"],
  parentModel: null,
  score: computed.alias("parentModel.score"),
  answers: computed.alias("parentModel.answers"),
  stepsForward: computed("answers", function() {
    return this.answers.filter(a => a === 1).length;
  }),
  stepsBack: computed("parentModel.answers", function() {
    return this.answers.filter(a => a === -1).length;
  }),
  percentage: computed("results", function() {
    const allScores = this.model.map(i => i.score);
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
