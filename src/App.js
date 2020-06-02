import React from 'react';
import Toolbox from './toolbox/Toolbox';
import Pagelist from './pagelist/Pagelist';
import toolbars from './toolbar-contents';

class App extends React.Component {
  render() {
    const _testPagelistItems = [
      {
        id: 0,
        content: 'logo192.png',
      },
      {
        id: 1,
        content: 'logo192.png',
      },
    ];
    return (
      <div className="App">
        <Toolbox toolbars={toolbars} />
        <Pagelist items={_testPagelistItems} />
      </div>
    );
  }
}

export default App;
