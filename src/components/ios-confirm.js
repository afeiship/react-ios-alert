import IosModal from 'components/ios-modal';
import noop from 'noop';

export default class {
  static present(inTitle, inContent, inCallback) {
    const callback = inCallback || noop;
    const TRUE_CALLBACK = () => callback(true);
    const FALSE_CALLBACK = () => callback(false);
    IosModal.present({
      type: 'confirm',
      title: inTitle,
      content: inContent,
      items: [
        {
          label: 'OK',
          callback: TRUE_CALLBACK
        },
        {
          label: 'Cancel',
          callback: FALSE_CALLBACK
        }
      ]
    });
  }

  static dismiss(inOptions) {
    IosModal.dismiss(inOptions);
  }
}
