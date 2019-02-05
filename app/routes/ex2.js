import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/EmberObject';

const Services=EmberObject.extend({
  services: [],

  countActive:computed('services.@each.active',function () {
    return this.get('services').filter(service => service.active).length;
  }),

  sumActive:computed('services.@each.active',function () {
    let somme=0;
    this.get('services').forEach(service => {
      if(service.active){
        somme+=service.price;
      }
    });
  }),
});

export default Route.extend({
  model(){
    return Services.create({services:[
        {
          "name": "Web Development",
          "price": 300,
          "active":true
        },{
          "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
      ]});
  }
});
