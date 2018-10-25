import Component from "@ember/component";
import { computed } from "@ember/object";
import { inject as service } from "@ember/service";

export default Component.extend({
  score: null,
  current: service(),
  results: computed.alias('current.results'),
  stepsForward: computed("results", function() {
    return this.results.answers.filter(a => a === 1).length;
  }),
  stepsBack: computed("results", function() {
    return this.answers.filter(a => a === -1).length;
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
