import Route from '@ember/routing/route';


export default Route.extend({
  model() {
    return {copy: {}};
  },
  actions: {
    save(proj) {
      proj = this.store.createRecord('project', proj.copy);
      proj.save().then(this.transitionTo('projects'));
    },
    cancel() {
      this.transitionTo('projects');
    }
  }

});
