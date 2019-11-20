import React, { Component } from "react";

import SHOP_DATA from "./SHOP_DATA";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

export default class shop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    };
  }
  render() {
    return (
      <div>
        {this.state.collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
