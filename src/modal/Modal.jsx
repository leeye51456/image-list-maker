import React from 'react';

class Modal extends React.Component {
  render() {
    return (
      <div className="modal rounded shadow bg-white w-11/12 m-auto">
        <div className="overflow-hidden rounded-tl rounded-tr bg-blue-200 p-4 pb-3 text-xl font-bold">
          {this.props.title}
        </div>
        <div className="overflow-y-scroll">
          {this.props.children}
        </div>
        <div className="rounded-bl rounded-br">
          {this.props.onNegative && (
            <button type="button" onClick={this.props.onNegative}>
              {this.props.negativeLabel || '취소'}
            </button>
          )}
          {this.props.onPositive && (
            <button type="button" onClick={this.props.onPositive}>
              {this.props.positiveLabel || '확인'}
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Modal;
