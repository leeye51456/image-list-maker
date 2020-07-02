import React from 'react';

class FileReadButton extends React.Component {
  constructor(props) {
    super(props);

    this.fileInput = React.createRef();
  }

  handleButtonClick = () => {
    this.fileInput.current.click();
  }

  handleFileInputChange = () => {
    this.props.onChange(this.fileInput.current.files);
    this.fileInput.current.value = '';
  }

  render() {
    return (
      <button
        name={this.props.name}
        onClick={this.handleButtonClick}
        className="rounded bg-gray-300 px-4 py-2 text-gray-800"
      >
        {this.props.children}
        <input
          type="file"
          hidden={true}
          accept={this.props.accept}
          multiple={this.props.multiple}
          ref={this.fileInput}
          onChange={this.handleFileInputChange}
        />
      </button>
    );
  }
}

export default FileReadButton;
