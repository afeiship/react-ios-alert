import ReactIosModal from 'components/react-ios-modal';

export default class {
  static instance;

  static init(inProps) {
    ReactIosModal.instance(inProps).then((instance) => {
      this.instance = this.instance || instance;
    });
  }

  static present(inOptions, inCallback) {
    //todo: buggy solution:
    if (this.instance) {
      this.instance.component.present(inOptions, inCallback);
    } else {
      setTimeout(() => {
        this.instance.component.present(inOptions, inCallback);
      });
    }
  }

  static dismiss(inOptions) {
    this.instance.component.dismiss(inOptions);
  }

  static destroy() {
    this.instance.destroy();
    this.instance = null;
  }
}
