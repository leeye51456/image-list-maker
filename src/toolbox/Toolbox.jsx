import React from 'react';

class Toolbox extends React.Component {
  render() {
    // const toolbars = this.props.toolbars.map((toolbar) => (
    //   <Toolbar
    //     key={toolbar.name}
    //     name={toolbar.name}
    //     label={toolbar.label}
    //     items={toolbar.items}
    //   />
    // ));
    return (
      <div className="toolbox-wrapper flex flex-row w-full bg-gray-100 border-b-2">
        <div className="toolbox mx-auto px-4 py-1 max-w-screen-xl w-full">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Toolbox;
