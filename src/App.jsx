import React from 'react';
import Toolbox from './toolbox/components/Toolbox';
import Pagelist from './pagelist/Pagelist';
import toolboxContents from './toolbox-contents';

class App extends React.Component {
  constructor(props) {
    super(props);

    toolboxContents.bindHandlers(this);
  }

  render() {
    const _testPagelistItems = [];
    for (let i = 0; i < 17; i += 1) {
      _testPagelistItems.push({
        id: i,
        content: 'logo192.png',
      });
    }
    return (
      <div className="app leading-none">
        <Toolbox toolbars={toolboxContents.toolbars} />
        <Pagelist items={_testPagelistItems} />
      </div>
    );
  }
}

export default App;
