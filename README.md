# react-ios-alert
> React component for ios style alert

## snapshot:
<center>
    <img width="300" src="https://ws4.sinaimg.cn/large/006tNbRwgy1fv1ys1zcnjj30fw0be74w.jpg"/>
    <img width="300" src="https://ws1.sinaimg.cn/large/006tNbRwgy1fv1ysg5tbqj30gc0a0q3d.jpg"/>
</center>


## properties:
```javascript

  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
  };
  
```

## install && import:
```bash
npm install --save afeiship/react-ios-alert --registry=https://registry.npm.taobao.org
```

```js
import ReactIosAlert from 'react-ios-alert';
```

```scss
// customize your styles:
$react-ios-alert-options:(
);

@import 'node_modules/react-ios-alert/dist/style.scss';
```


## usage:
```jsx

// install: npm install afeiship/react-ios-alert --save
// import : import ReactIosAlert from 'react-ios-alert'

class App extends React.Component {
  state = {

  };

  constructor(props) {
    super(props);

    //1. intial:
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

```
