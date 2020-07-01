import React from 'react';

class Modal extends React.Component {
  handleMaskClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onNegative(event);
    }
  }

  render() {
    return (
      <div className="modal-wrapper bg-black bg-opacity-50 fixed w-full h-full" onClick={this.handleMaskClick}>
        <div className="modal rounded shadow bg-white m-auto my-16 container">
          <div className="overflow-hidden rounded-tl rounded-tr bg-blue-200 p-4 pb-3 text-xl font-bold">
            {this.props.title}
          </div>
          <div className="overflow-y-scroll" style={{maxHeight: '80vh'}}>
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
      </div>
    );
  }
}

export default Modal;
