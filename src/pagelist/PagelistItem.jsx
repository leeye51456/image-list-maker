import React from 'react';

class PagelistItem extends React.Component {
  render() {
    return (
      <div className="PagelistItem">
        <img
          src={this.props.content}
          alt={this.props.page}
        />
        <div>
          {this.props.page}
        </div>
      </div>
    );
  }
}

export default PagelistItem;
