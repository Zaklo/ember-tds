import Controller from '@ember/controller';
import {get} from '@ember/object';

export default Controller.extend({

  copyArrayElements(from, to) {
    to.pushObjects(from);
  },

  actions: {
    addToIncluded() {
      let model = this.get('model');
      let dispoItems_ = get(model, 'dispoItems_');
      let includedItems = get(model, 'includedItems');
      this.copyArrayElements(dispoItems_, includedItems);

    }
  }
});
