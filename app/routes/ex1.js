import Route from '@ember/routing/route';
import EmberObject, {computed} from '@ember/object';

const Note = EmberObject.extend({
  content: '',
  MAX: 100,
  size: computed('content', function () {
    this.set('info', '');
    return 100 - this.content.length;
  }),
  info: '',
  style: computed('size', function () {
    let result = 100 - this.content.length;
    if (result < 50 && result > 20) {
      return "alert alert-warning";
    }
    if (result < 20 && result >= 0) {
      return "alert alert-danger";
    }

    return "alert alert-primary";
  }),
  modified: computed('content', function () {
    if (this.content.length > 0) {
      return "Note modifiée";
    }
  }),



});

export default Route.extend({
  model() {
    return Note.create();

  }
});
