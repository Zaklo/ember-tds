import Controller from '@ember/controller';
import {get} from '@ember/object';

export default Controller.extend({

  copyArrayElements(fromName, toName) {
    let model = this.get('model');
    let from = get(model, fromName);
    let to = get(model, toName);
    to.pushObjects(from);
  },


  actions: {
    addToIncluded() {
      this.copyArrayElements('dispoItems_', 'includedItems');
    },

    addAllToIncluded() {
      this.copyArrayElements('dispoItems_', 'includedItems');

    },

    removeFromIncluded() {
      this.copyArrayElements('includedItems', 'dispoItems_');

    },

    removeFromAllIncluded() {
      this.copyArrayElements('includedItems', 'dispoItems');

    }
  }
});
