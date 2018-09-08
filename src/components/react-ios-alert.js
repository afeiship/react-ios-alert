import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import noop from 'noop';
import objectAssign from 'object-assign';
import ReactModal from 'react-modal';
import ReactAppendToDocument from 'react-append-to-document';

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
  };

  static defaultProps = {
  };
  /*===properties end===*/

  static instance(inProps) {
    return ReactAppendToDocument.append(this, inProps, {
      className: 'react-ios-alert-container'
    });
  }

  constructor(inProps) {
    super(inProps);
    this.state = { items: [] };
    this.resetCallback();
  }

  componentWillUnmount() {
    this.resetCallback();
  }

  resetCallback() {
    this._onPresent = noop;
    this._onDismiss = noop;
  }

  present(inStates, inCallback) {
    this.setState(inStates, () => {
      this.root.present();
      this._onPresent = inCallback || noop;
    })
  }

  dismiss(inCallback) {
    this.root.dismiss();
    this._onDismiss = inCallback || noop;
  }

  _onChange = inEvent => {
    const { value } = inEvent.target;
    value && this._onPresent();
    !value && this._onDismiss();
  };

  render() {
    const { className, okText, onClick, ...props } = this.props;
    const { title, content, items } = this.state;

    return (
      <ReactModal
        ref={root => this.root = root}
        onChange={this._onChange}
        className={classNames('webkit-sassui-ios-modal webkit-sassui-ios-alert react-ios-alert', className)}
        {...props}
      >
        {title && <header hidden={!title} className="hd">{title}</header>}
        {content && <section className="bd">{content}</section>}
        {
          items.length > 0 && (
            <footer className="ft">
              {
                items.map((item, index) => {
                  return (
                    <button key={index} onClick={item.callback}>{item.label}</button>
                  )
                })
              }
            </footer>
          )
        }
      </ReactModal>
    );
  }
}
