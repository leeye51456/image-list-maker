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
      <div className="Toolbar">
        <div className="Toolbar-label">
          {this.props.label}
        </div>
        <ul className="Toolbar-items">
          {toolbarItems}
        </ul>
      </div>
    );
  }
}

export default Toolbar;
