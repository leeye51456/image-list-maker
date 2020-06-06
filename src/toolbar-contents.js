const toolbarItems_info = [
  {
    name: 'help',
    label: '도움말',
    handler = () => {
      alert('help');
    },
  },
  {
    name: 'opensource',
    label: '오픈소스 정보',
    handler = () => {
      alert('opensource');
    },
  },
];

const toolbarItems_file = [
  {
    name: 'new',
    label: '신규',
    handler = () => {
      alert('new');
    },
  },
  {
    name: 'open',
    label: '작업용 파일 열기',
    handler = () => {
      alert('open');
    },
  },
  {
    name: 'export-as-json',
    label: '작업용 파일로 내보내기',
    handler = () => {
      alert('export-as-json');
    },
  },
];

const toolbarItems_edit = [
  {
    name: 'add-image',
    label: '새 이미지 추가',
    handler = () => {
      alert('add-image');
    },
  },
  {
    name: 'replace-image',
    label: '선택한 이미지 교체',
    handler = () => {
      alert('replace-image');
    },
  },
  {
    name: 'delete-image',
    label: '선택한 이미지 삭제',
    handler = () => {
      alert('delete-image');
    },
  },
];

const toolbars = [
  {
    name: 'info',
    label: 'Image List Maker',
    items: toolbarItems_info,
  },
  {
    name: 'file',
    label: '파일',
    items: toolbarItems_file,
  },
  {
    name: 'edit',
    label: '편집',
    items: toolbarItems_edit,
  },
];

export default toolbars;
