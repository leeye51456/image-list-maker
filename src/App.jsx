import React from 'react';
import Toolbox from './toolbox/Toolbox';
import Toolbar from './toolbox/Toolbar';
import FileReadButton from './toolbox/FileReadButton';
import Pagelist from './pagelist/Pagelist';
import PagelistItem from './pagelist/PagelistItem';
// TODO - Extract strings

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modified: false,
      nextId: 0,
      pagelistItems: [],
      modal: null,
    };
  }

  getPromiseFromFile = (file, currentId) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        resolve(
          <PagelistItem
            key={currentId}
            id={currentId}
            content={reader.result}
          />
        );
      });
      reader.readAsDataURL(file);
    });
  }
  getPromisesFromFiles = (files, nextId) => {
    const promises = [];
    const filesLength = files.length;
    for (let i = 0; i < filesLength; i += 1) {
      promises.push(this.getPromiseFromFile(files[i], nextId + i));
    }
    return promises;
  }

  updatePagelistItems = async (newFiles, begin, end) => {
    const beforeNewItems = this.state.pagelistItems.slice(0, begin);
    const afterNewItems = this.state.pagelistItems.slice(end);

    const newFilesLength = newFiles.length;
    const nextId = this.state.nextId;
    const newItems = await Promise.all(this.getPromisesFromFiles(newFiles, nextId));

    this.setState({
      modified: true,
      nextId: nextId + newFilesLength,
      pagelistItems: [...beforeNewItems, ...newItems, ...afterNewItems],
    });
  }

  // TODO - Event handlers go here!

  handleFileNewClick = (event) => {
    if (this.state.modified) {
      const message = '‘확인’을 누르면 저장하지 않은 내용을 버리고 작업을 새로 시작합니다.';
      if (!window.confirm(message)) {
        return;
      }
    }
    this.setState({
      modified: false,
      pagelistItems: [],
    });
  }

  handleEditAddImagesChange = (newFiles) => {
    const currentLength = this.state.pagelistItems.length;
    this.updatePagelistItems(newFiles, currentLength, currentLength);
  }

  handleEditReplaceImagesChange = (newFiles) => {
    console.log('It will be implemented after selection is implemented.');
    // TODO - After implementing selection, pass selection to updatePagelistItems and remove currentLength
    const currentLength = this.state.pagelistItems.length;
    this.updatePagelistItems(newFiles, currentLength - 1, currentLength);
  }

  handleEditDeleteImagesClick = () => {
    console.log('It will be implemented after selection is implemented.');
    // TODO - After implementing selection, pass selection to updatePagelistItems and remove currentLength
    const currentLength = this.state.pagelistItems.length;
    this.updatePagelistItems([], currentLength - 1, currentLength);
  }

  render() {
    // TODO - ((SAME FOR ALL FILES))
    //        - Extract toolbar button CSS class
    //        - Specify class name order
    return (
      <div className="app leading-none flex flex-col max-h-screen">
        <Toolbox>
          <Toolbar name="info" label="Image List Maker">
            <button name="help" className="rounded bg-gray-300 px-4 py-2 text-gray-800">도움말</button>
            <button name="opensource" className="rounded bg-gray-300 px-4 py-2 text-gray-800">오픈소스 정보</button>
          </Toolbar>
          <Toolbar name="file" label="파일">
            <button
              name="new"
              onClick={this.handleFileNewClick}
              className="rounded bg-gray-300 px-4 py-2 text-gray-800"
            >
              신규
            </button>
            <FileReadButton
              name="open"
              accept="text/json,text/plain"
              onChange={this.handleFileOpenChange}
            >
              작업용 파일 열기
            </FileReadButton>
            <button
              name="export-as-json"
              className="rounded bg-gray-300 px-4 py-2 text-gray-800"
            >
              작업용 파일로 내보내기
            </button>
          </Toolbar>
          <Toolbar name="edit" label="편집">
            <FileReadButton
              name="add-images"
              accept="image/*"
              multiple={true}
              onChange={this.handleEditAddImagesChange}
            >
              새 이미지 추가
            </FileReadButton>
            <FileReadButton
              name="replace-images"
              accept="image/*"
              multiple={true}
              onChange={this.handleEditReplaceImagesChange}
            >
              선택한 이미지 교체
            </FileReadButton>
            <button
              name="delete-images"
              onClick={this.handleEditDeleteImagesClick}
              className="rounded bg-gray-300 px-4 py-2 text-gray-800"
            >
              선택한 이미지 삭제
            </button>
          </Toolbar>
        </Toolbox>

        <div className="pagelist-wrapper mx-auto w-full max-w-screen-xl">
          <div className="m-4">
            <Pagelist>
              {this.state.pagelistItems}
            </Pagelist>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
