import React from 'react';
import PagelistItem from './PagelistItem';

class Pagelist extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => (
      <PagelistItem
        key={item.id}
        page={index + 1}
        content={item.content}
      />
    ));
    return (
      <div className="pagelist-wrapper mx-auto mt-40 max-w-screen-xl">
        <div className="m-4">
          <section className="pagelist px-3 py-2 w-full bg-gray-800 leading-none">
            {items}
          </section>
        </div>
      </div>
    );
  }
}

export default Pagelist;
