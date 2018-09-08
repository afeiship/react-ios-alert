import ReactIosAlert from 'components/react-ios-alert';

export default class {

  static instance;

  static init(inProps) {
    ReactIosAlert.instance(inProps).then(instance => {
      this.instance = this.instance || instance;
    });
  }

  static present(inOptions) {
    this.instance.component.present(inOptions)
  }

  static dismiss(inOptions) {
    this.instance.component.dismiss(inOptions);
  }

  static destroy() {
    this.instance.destroy();
    this.instance = null;
  }

}
