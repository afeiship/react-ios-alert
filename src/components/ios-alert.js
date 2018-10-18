import IosModal from 'components/ios-modal';
import noop from 'noop';

export default class {
  static present(inTitle, inContent, inCallback) {
    IosModal.present({
      type: 'alert',
      title: inTitle,
      content: inContent,
      items: [
        {
          label: 'OK',
          callback: inCallback || noop
        }
      ]
    });
  }

  static dismiss(inOptions) {
    IosModal.dismiss(inOptions);
  }
}
