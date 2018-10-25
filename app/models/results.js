import DS from 'ember-data';

export default DS.Model.extend({
  results: DS.hasMany('user-answers')
});
