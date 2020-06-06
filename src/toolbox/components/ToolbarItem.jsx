import React from 'react';

class ToolbarItem extends React.Component {
  render() {
    return (
      <li className="toolbar-item inline-block ml-2">
        <button
          className="toolbar-button rounded bg-gray-300 px-4 py-2"
          type="button"
          onClick={this.props.handler}
        >
          {this.props.label}
        </button>
      </li>
    );
  }
}

export default ToolbarItem;
