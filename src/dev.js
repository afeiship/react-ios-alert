import './dev.scss';
import { ReactIosModal, IosModal, IosAlert, IosConfirm } from './main';

/*===example start===*/

// install: npm install afeiship/react-ios-alert --save
// import : import ReactIosAlert from 'react-ios-alert'

class App extends React.Component {
  state = {
    type: 'alert'
  };

  constructor(props) {
    super(props);
    //1. intial:
    IosModal.init();
  }

  componentDidMount() {
    console.log('did mount!');
    IosAlert.present('test', '12324', () => {
      console.log('present!');
    });
  }

  _onClick1 = (e) => {
    IosModal.present(
      {
        title: '升级提示',
        type: this.state.type,
        content: (
          <div>
            检测到您的APP还在使用旧版本，
            <strong style={{ color: 'red' }}>是否更新</strong>？
          </div>
        ),
        items: [
          {
            label: '不,谢谢',
            callback: () => {
              IosModal.dismiss();
            }
          },
          {
            label: '果断升级',
            callback: () => {
              IosModal.dismiss();
            }
          },
          {
            label: '再想想？',
            callback: () => {
              IosModal.dismiss();
            }
          }
        ]
      },
      () => {
        console.log('on shown!');
      }
    );
  };

  _onClick2 = (e) => {
    IosModal.present(
      {
        title: '升级提示',
        type: this.state.type,
        content: '检测到您的APP还在使用旧版本,是否更新',
        items: [
          {
            label: '好的',
            callback: () => {
              IosModal.dismiss();
            }
          }
        ]
      },
      () => {
        console.log('shown!');
      }
    );
  };

  _onChangeType = (e) => {
    const { value } = e.target;
    this.setState({ type: value });
  };

  _onClick3 = (e) => {
    IosAlert.present('温馨提示', '您确认您的操作？', () => {
      console.log('您点了确认!');
      IosAlert.dismiss();
    });
  };
  _onClick4 = (e) => {
    IosConfirm.present('温馨提示', '您确认您的操作？', (res) => {
      console.log('您点了一个操作，Value为：', res);
      IosConfirm.dismiss();
    });
  };

  render() {
    return (
      <div className="hello-react-ios-modal">
        <h3>
          {' '}
          You Selected <strong>{this.state.type} </strong>
          Style{' '}
        </h3>
        <select value={this.state.type} onChange={this._onChangeType}>
          <option value="alert"> ALERT </option>
          <option value="confirm"> CONFIRM </option>
        </select>
        <button className="button" onClick={this._onClick1}>
          SHOW UPDATE
        </button>
        <button className="button" onClick={this._onClick2}>
          SHOW Standard IosModal
        </button>
        <button className="button" onClick={this._onClick3}>
          I am An ALert
        </button>
        <button className="button" onClick={this._onClick4}>
          I am A Confirm
        </button>
      </div>
    );
  }
}
/*===example end===*/

ReactDOM.render(<App />, document.getElementById('app'));
