import Route from '@ember/routing/route';

export default Route.extend({
  model(){
    return {nom:'SMITH',age:20,details:"Details de SMITH ..."};
  }

});
