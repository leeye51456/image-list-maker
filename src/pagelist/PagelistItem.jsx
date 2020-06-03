import React from 'react';

class PagelistItem extends React.Component {
  render() {
    return (
      <div
        className="pagelist-item relative inline-block my-1 mx-px w-64 h-32 bg-gray-700 bg-local bg-contain bg-no-repeat bg-center border border-gray-500"
        style={{
          backgroundImage: `url(${this.props.content})`,
        }}
      >
        <div
          className="absolute inline-block top-0 right-0 m-1 px-2 py-1 bg-black bg-opacity-50 opacity-75 rounded text-white"
        >
          {this.props.page}
        </div>
      </div>
    );
  }
}

export default PagelistItem;
