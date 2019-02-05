import Route from '@ember/routing/route';

export default Route.extend({
     model(params) {
          let model = this.modelFor("clients");
          return model[params.numero];
     }
});
