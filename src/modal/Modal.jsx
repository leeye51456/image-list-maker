import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal rounded-tl rounded-tr shadow">
        <div className="overflow-hidden rounded-tl rounded-tr">
          {this.props.title}
        </div>
        <div className="overflow-y-scroll">
          {this.props.children}
        </div>
        <div className="rounded-bl rounded-br">
          <button type="button" onClick={this.props.buttons.cancel.handler}>
            {this.props.buttons.cancel.label || '취소'}
          </button>
          <button type="button" onClick={this.props.buttons.submit.handler}>
            {this.props.buttons.submit.label || '확인'}
          </button>
        </div>
      </div>
    );
  }
}

export default Modal;
