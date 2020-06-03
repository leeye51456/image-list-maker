import React from 'react';
import Toolbar from './Toolbar';

class Toolbox extends React.Component {
  render() {
    const toolbars = this.props.toolbars.map((toolbar) => (
      <Toolbar
        key={toolbar.name}
        name={toolbar.name}
        label={toolbar.label}
        items={toolbar.items}
      />
    ));
    return (
      <div className="toolbox-wrapper fixed z-50 left-0 top-0 w-full bg-gray-100 border-b-2">
        <section className="toolbox mx-auto px-4 py-1 max-w-screen-xl">
          {toolbars}
        </section>
      </div>
    );
  }
}

export default Toolbox;
