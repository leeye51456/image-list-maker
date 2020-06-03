import React from 'react';
import ToolbarItem from './ToolbarItem';

class Toolbar extends React.Component {
  render() {
    const toolbarItems = this.props.items.map((item) => (
      <ToolbarItem
        key={item.name}
        name={item.name}
        label={item.label}
        action={item.action}
      />
    ));

    return (
      <div className="toolbar p-1 border-b last:border-b-0 border-gray-200">
        <div className="toolbar-label inline-block mr-2 text-gray-700">
          {this.props.label}
        </div>
        <ul className="toolbar-items inline-block">
          {toolbarItems}
        </ul>
      </div>
    );
  }
}

export default Toolbar;
