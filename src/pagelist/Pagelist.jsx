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
      <section className="Pagelist">
        {items}
      </section>
    );
  }
}

export default Pagelist;
