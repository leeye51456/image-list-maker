import React from 'react';
import Modal from './Modal';
import Pagelist from '../pagelist/Pagelist';
import PagelistItem from '../pagelist/PagelistItem';

class AddImagesModal extends React.Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();

    this.state = {
      nextId: 0,
      newItems: [],
    }
  }

  handleNegative = (event) => {
    this.props.onNegative();
  }
  handlePositive = (event) => {
    this.props.onPositive(this.state.newItems);
  }

  handleAddImages = (event) => {
    this.fileInput.current.click();
  }

  handleFileChange = (event) => {
    // TODO - Get base64-encoded images and display on the pagelist of this modal
    const newItems = this.state.newItems.slice();
    let nextId = this.state.nextId;
    for (const file of this.fileInput.current.files) {
      newItems.push(<PagelistItem key={nextId} id={nextId} content={URL.createObjectURL(file)} />);
      nextId += 1;
    }
    this.setState({
      nextId,
      newItems,
    });
  }

  render() {
    return (
      <Modal
        title="새 이미지 추가"
        negativeLabel="취소"
        onNegative={this.handleNegative}
        positiveLabel="가져온 이미지 추가"
        onPositive={this.handlePositive}
      >
        <div>
          <button type="button" onClick={this.handleAddImages}>
            추가할 이미지 가져오기
          </button>
          <input
            type="file"
            accept="image/*"
            multiple={true}
            ref={this.fileInput}
            onChange={this.handleFileChange}
          />
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
