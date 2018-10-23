import DS from "ember-data";

export default DS.Model.extend({
  question0: DS.attr("number"),
  question1: DS.attr("number"),
  question2: DS.attr("number"),
  question3: DS.attr("number"),
  question4: DS.attr("number"),
  question5: DS.attr("number"),
  question6: DS.attr("number"),
  question7: DS.attr("number"),
  score: DS.attr("number"),
  timestamp: DS.attr("date")
});
