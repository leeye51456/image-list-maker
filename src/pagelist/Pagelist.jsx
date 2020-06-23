import React from 'react';
import PagelistItem from './PagelistItem';

class Pagelist extends React.Component {
  render() {
    let items;
    if (this.props.children.length > 0) {
      items = this.props.children.map((item, index) => (
        <PagelistItem
          key={item.props.id}
          id={item.props.id}
          page={index + 1}
          content={item.props.content}
        />
      ));
    } else {
      items = (
        <div className="p-12 text-center text-gray-600 text-xl">
          추가하는 이미지 리스트가 여기에 나타납니다.
        </div>
      );
    }
    return (
      <div className="pagelist-wrapper mx-auto w-full max-w-screen-xl">
        <div className="m-4">
          <section className="pagelist px-3 py-2 w-full bg-gray-800 leading-none" style={{minHeight: '8rem'}}>
            {items}
          </section>
        </div>
      </div>
    );
  }
}

export default Pagelist;
