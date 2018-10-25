import Route from "@ember/routing/route";
import { inject as service } from "@ember/service";

export default Route.extend({
  current: service(),

  model: function() {
    return this.store.findAll("user-answers");
  },

  afterModel: function(){
    const userId = window.localStorage.getItem("privilegeWalkUserId");
    if(userId){
      this.store.findRecord("user-answers", userId).then((results) => {
        this.current.setResults(results);
      });
    }
  },

  actions: {
    doRefresh: function () {
      this.refresh()
    }
  }
});
