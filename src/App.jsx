import React from 'react';
import Toolbox from './toolbox/Toolbox';
import Toolbar from './toolbox/Toolbar';
import Pagelist from './pagelist/Pagelist';
import PagelistItem from './pagelist/PagelistItem';
import AddImagesModal from './modal/AddImagesModal';
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

  closeModal = () => {
    this.setState({modal: null});
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

  handleEditAddImagesClick = (event) => {
    this.setState({
      modal: (
        <AddImagesModal
          onPositive={this.handleAddImagesSubmit}
          onNegative={this.handleModalCancelClick}
        />
      )
    });
  }

  handleModalCancelClick = (event) => {
    this.closeModal();
  }

  handleAddImagesSubmit = (newItems) => {
    const pagelistItems = this.state.pagelistItems.slice();
    let nextId = this.state.nextId;
    for (const item of newItems) {
      pagelistItems.push(<PagelistItem key={nextId} id={nextId} content={item.props.content} />);
      nextId += 1;
    }

    this.setState({
      nextId,
      pagelistItems,
      modal: null,
    });
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
            <button name="new" onClick={this.handleFileNewClick} className="rounded bg-gray-300 px-4 py-2 text-gray-800">신규</button>
            <button name="open" className="rounded bg-gray-300 px-4 py-2 text-gray-800">작업용 파일 열기</button>
            <button name="export-as-json" className="rounded bg-gray-300 px-4 py-2 text-gray-800">작업용 파일로 내보내기</button>
          </Toolbar>
          <Toolbar name="edit" label="편집">
            <button name="add-images" onClick={this.handleEditAddImagesClick} className="rounded bg-gray-300 px-4 py-2 text-gray-800">새 이미지 추가</button>
            <button name="replace-images" className="rounded bg-gray-300 px-4 py-2 text-gray-800">선택한 이미지 교체</button>
            <button name="delete-images" className="rounded bg-gray-300 px-4 py-2 text-gray-800">선택한 이미지 삭제</button>
          </Toolbar>
        </Toolbox>

        <div className="pagelist-wrapper mx-auto w-full max-w-screen-xl">
          <div className="m-4">
            <Pagelist>
              {this.state.pagelistItems}
            </Pagelist>
          </div>
        </div>

        {this.state.modal}
      </div>
    );
  }
}

export default App;
