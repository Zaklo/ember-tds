import Route from '@ember/routing/route';

export default Route.extend({
     model(){
          return[
               {nom:"LOZACH",prenom:"Antoine",age:20,details:"drogué"},
               {nom:"JESTIN",prenom:"Gabriel",age:4,details:"gros con"},
               {nom:"PONCHANT",prenom:'Mael',age:5,details:"skateur boy"},
          ];
     }
});
