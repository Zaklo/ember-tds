import Controller from '@ember/controller';
import Ember from 'ember';

export default Controller.extend({
  actions:{
    toggleActive(service){
      Ember.set(service,'active',Ember.get(service,'active'));
    }
  }
});
