import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item.component.jsx/collection-item.component";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()} </h1>
    <div className="preview">
      {items.map(({id, ...itemData},index) => {
        return (index<4) && <CollectionItem key={id} {...itemData} />
      })}
    </div>
  </div>
);

export default CollectionPreview;
