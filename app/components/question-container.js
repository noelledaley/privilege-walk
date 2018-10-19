import Component from "@ember/component";

export default Component.extend({
  score: 0,
  currentIndex: 0,
  actions: {
    handleForward: function() {
      this.set("score", this.score + 1);
      this.set("currentIndex", this.currentIndex + 1);
    },
    handleBackward: function() {
      this.set("score", this.score - 1);
      this.set("currentIndex", this.currentIndex + 1);
    }
  }
});
