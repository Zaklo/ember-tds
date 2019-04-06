import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    save(model) {
      let project = model.copy;


      let proj = this.store.createRecord('project', project);

      proj.save().then(() => {
        this.transitionToRoute('projects');
      });
    }
  }
});
