import DS from "ember-data";

export default DS.Model.extend({
  question1: DS.attr("number"),
  question2: DS.attr("number"),
  score: DS.attr("number"),
  timestamp: DS.attr("date")
});
