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
      <section className="Toolbox">
        {toolbars}
      </section>
    );
  }
}

export default Toolbox;
