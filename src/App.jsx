import React from 'react';
import JsPdf from 'jspdf';
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

  readJsonFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => {
        resolve(JSON.parse(reader.result));
      });
      reader.readAsText(file, 'utf-8');
    });
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
    console.time('copying last state');
    const beforeNewItems = this.state.pagelistItems.slice(0, begin);
    const afterNewItems = this.state.pagelistItems.slice(end);
    console.timeEnd('copying last state');

    const newFilesLength = newFiles.length;
    const nextId = this.state.nextId;
    console.time('loading new images')
    const newItems = await Promise.all(this.getPromisesFromFiles(newFiles, nextId));
    console.timeEnd('loading new images')

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

  handleFileOpenChange = async (files) => {
    console.time('reading json file');
    const fileContent = await this.readJsonFile(files[0]);
    console.timeEnd('reading json file');

    console.time('mapping image to component');
    const pagelistItems = fileContent.body.map((item, index) => (
      <PagelistItem
        key={index}
        id={index}
        content={item}
      />
    ));
    console.timeEnd('mapping image to component');

    const fileContentLength = fileContent.body.length;
    this.setState({
      modified: false,
      nextId: fileContentLength,
      pagelistItems,
    });
  }

  handleFileExportEditableClick = (event) => {
    console.time('exporting json');
    const obj = {
      body: this.state.pagelistItems.map((item) => item.props.content),
      // references: {},
    };
    const blob = new Blob([JSON.stringify(obj)], {type: 'application/json;charset=utf-8'});

    const aElem = document.createElement('a');
    aElem.href = URL.createObjectURL(blob);
    aElem.download = 'export.json'; // TODO - Allow user to name the file and notify the name can be changed by browser
    aElem.click();
    console.timeEnd('exporting json');

    this.setState({
      modified: false,
    });
  }

  handleFileExportPdfClick = (event) => {
    console.time('preprocessing for exporting pdf');
    // FIXME - Correct orientation and format to images
    const doc = new JsPdf({
      unit: 'px',
      format: [1920, 1080],
      orientation: 'landscape',
    });
    doc.deletePage(1);

    const {pagelistItems} = this.state;
    const totalPages = pagelistItems.length;

    for (let i = 0; i < totalPages; i += 1) {
      doc.addPage({
        format: [1920, 1080],
        orientation: 'landscape',
      });

      doc.setFillColor(0x96);
      doc.rect(-75, -75, 1575, 960, 'F');

      // FIXME - Correct image ratio
      //       - Use alias after handling hashing
      doc.addImage({
        imageData: pagelistItems[i].props.content,
        x: 0,
        y: 0,
        w: 1920 / 4 * 3,
        h: 1080 / 4 * 3,
        // alias: pagelistItems[i].props.content,
        compression: 'FAST',
      });

      // TODO - Print page numbers
    }
    console.timeEnd('preprocessing for exporting pdf');

    console.time('saving pdf file');
    doc.save('export.pdf');
    console.timeEnd('saving pdf file');
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
              accept="application/json,text/plain"
              onChange={this.handleFileOpenChange}
            >
              작업용 파일 열기
            </FileReadButton>
            <button
              name="export-json"
              className="rounded bg-gray-300 px-4 py-2 text-gray-800"
              onClick={this.handleFileExportEditableClick}
            >
              작업용 파일로 내보내기
            </button>
            <button
              name="export-pdf"
              className="rounded bg-gray-300 px-4 py-2 text-gray-800"
              onClick={this.handleFileExportPdfClick}
            >
              PDF 파일로 내보내기
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
