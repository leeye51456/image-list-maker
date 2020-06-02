import React from 'react';

class ToolbarItem extends React.Component {
  render() {
    return (
      <li className="ToolbarItem">
        <button
          className="ToolbarItem-button"
          type="button"
          onClick={this.props.action}
        >
          {this.props.label}
        </button>
      </li>
    );
  }
}

export default ToolbarItem;
