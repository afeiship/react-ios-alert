import './dev.scss';
import { ReactIosAlert, IosAlert } from './main';

/*===example start===*/

// install: npm install afeiship/react-ios-alert --save
// import : import ReactIosAlert from 'react-ios-alert'

class App extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);
    window.demo = this;
    window.refs = this.refs;
    window.rc = this.refs.rc;
    IosAlert.init();
  }

  _onClick1 = e => {
    IosAlert.present({
      title: '升级提示',
      content: <div>检测到您的APP还在使用旧版本，<strong style={{ color: 'red' }}>是否更新</strong>？</div>,
      items: [
        {
          label: '不,谢谢',
          callback: () => {
            IosAlert.dismiss();
          }
        },
        {
          label: '果断升级',
          callback: () => {
            IosAlert.dismiss();
          }
        }
      ]
    }, () => {
      console.log('shown!');
    });
  };

  _onClick2 = e => {
    IosAlert.present({
      title: '升级提示',
      content: '检测到您的APP还在使用旧版本,是否更新',
      items: [
        {
          label: '好的',
          callback: () => {
            IosAlert.dismiss();
          }
        }
      ]
    }, () => {
      console.log('shown!');
    });
  };

  render() {
    return (
      <div className="hello-react-ios-alert">
        <button className="button" onClick={this._onClick1}>SHOW UPDATE</button>
        <button className="button" onClick={this._onClick2}>SHOW Standard ALert</button>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
