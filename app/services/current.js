import Service from '@ember/service';

export default Service.extend({
  results: null,

  setResults(results){
    this.set('results', results);
  }
});
