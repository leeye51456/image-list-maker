import React from 'react';
import Pagelist from '../pagelist/Pagelist';
import PagelistItem from '../pagelist/PagelistItem';

class AddImagesModal extends React.Component {
  constructor(props) {
    super(props);

    this.handleFileChange = this.handleFileChange.bind(this);

    this.state = {
      newItems: [],
      buttons: {
        cancel: {
          label: '취소',
          handler: this.props.handlers.cancel,
        },
        submit: {
          label: '가져온 이미지 추가',
          handler: this.props.handlers.submit,
        },
      },
    }
  }

  handleFileChange = (event) => {
    // TODO - Get base64-encoded images and display on the pagelist of this modal
  }

  render() {
    return (
      <Modal
        title="새 이미지 추가"
        buttons={this.state.buttons}
      >
        <div>
          추가할 이미지 가져오기: <input type="file" onChange={this.handleFileChange} />
          {/* QUESTION - Can I hide "input[type=file]" and fire click event by clicking a proxy button? */}
        </div>
        <Pagelist>
          {/* Pagelist items */}
          {/* QUESTION - This Pagelist component is compatible with this modal? */}
          {this.state.newItems}
        </Pagelist>
      </Modal>
    );
  }
}

export default AddImagesModal;
