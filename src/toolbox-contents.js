import ToolbarData from './toolbox/adt/ToolbarData';
import ToolboxData from './toolbox/adt/ToolboxData';


const infoToolbarItems = [
  {
    name: 'help',
    label: '도움말',
    icon: '',
    handler(event) {
      alert('help');
    },
  },
  {
    name: 'opensource',
    label: '오픈소스 정보',
    icon: '',
    handler(event) {
      alert('opensource');
    },
  },
];

const fileToolbarItems = [
  {
    name: 'new',
    label: '신규',
    icon: '',
    handler(event) {
      alert('new');
    },
  },
  {
    name: 'open',
    label: '작업용 파일 열기',
    icon: '',
    handler(event) {
      alert('open');
    },
  },
  {
    name: 'export-as-json',
    label: '작업용 파일로 내보내기',
    icon: '',
    handler(event) {
      alert('export-as-json');
    },
  },
];

const editToolbarItems = [
  {
    name: 'add-image',
    label: '새 이미지 추가',
    icon: '',
    handler(event) {
      alert('add-image');
    },
  },
  {
    name: 'replace-image',
    label: '선택한 이미지 교체',
    icon: '',
    handler(event) {
      alert('replace-image');
    },
  },
  {
    name: 'delete-image',
    label: '선택한 이미지 삭제',
    icon: '',
    handler(event) {
      alert('delete-image');
    },
  },
];


const infoToolbar = new ToolbarData({name: 'info', label: 'Image List Maker'}, infoToolbarItems);
const fileToolbar = new ToolbarData({name: 'file', label: '파일'}, fileToolbarItems);
const editToolbar = new ToolbarData({name: 'edit', label: '편집'}, editToolbarItems);

const toolboxContents = new ToolboxData([infoToolbar, fileToolbar, editToolbar]);

export default toolboxContents;
