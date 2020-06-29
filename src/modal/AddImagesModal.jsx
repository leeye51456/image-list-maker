import React from 'react';
import Modal from './Modal';
import Pagelist from '../pagelist/Pagelist';
import PagelistItem from '../pagelist/PagelistItem';

class AddImagesModal extends React.Component {
  constructor(props) {
    super(props);

    this.fileElement = React.createRef();

    this.state = {
      newItems: [],
    }
  }

  handleAddImages = (event) => {
    this.fileElement.current.click();
  }

  handleFileChange = (event) => {
    // TODO - Get base64-encoded images and display on the pagelist of this modal
    console.log('file changed');
  }

  render() {
    return (
      <Modal
        title="새 이미지 추가"
        negativeLabel="취소"
        onNegative={this.props.onNegative}
        positiveLabel="가져온 이미지 추가"
        onPositive={this.props.onPositive}
      >
        <div>
          <button type="button" onClick={this.handleAddImages}>
            추가할 이미지 가져오기
          </button>
          <input type="file" ref={this.fileElement} onChange={this.handleFileChange} />
        </div>
        <Pagelist>
          {/* Pagelist items */}
          {this.state.newItems}
        </Pagelist>
      </Modal>
    );
  }
}

export default AddImagesModal;
