import DS from "ember-data";

export default DS.Model.extend({
  answers: DS.attr(),
  score: DS.attr("number"),
  timestamp: DS.attr("date")
});
