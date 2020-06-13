import React from 'react';

class Toolbar extends React.Component {
  render() {
    // const toolbarItems = this.props.items.map((item) => (
    //   <ToolbarItem
    //     key={item.name}
    //     name={item.name}
    //     label={item.label}
    //     icon={item.icon}
    //     handler={item.handler}
    //   />
    // ));
    const toolbarItems = this.props.children.map((item) => (
      <li key={item.props.name} className="toolbar-label mr-2 text-gray-700">
        {item}
      </li>
    ));
    return (
      <div className="toolbar p-1 border-b last:border-b-0 border-gray-200">
        <ul className="toolbar-items flex flex-row">
          <li key="__label" className="toolbar-label my-auto mr-2 text-gray-700">
            {this.props.label}
          </li>
          {toolbarItems}
        </ul>
      </div>
    );
  }
}

export default Toolbar;
