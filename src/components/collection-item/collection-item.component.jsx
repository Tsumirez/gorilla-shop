import React from 'react';
import './collection-item.styles.scss'

const CollectionItem = ({name,imageUrl, price }) => (
  <div className="collection-item">
      <div className="image" style={{backgroundImage: `url(${imageUrl})`}}>
      </div>
      <p>{name} <span>${price}</span></p>
      <button>Add to cart</button>
  </div>
)

export default CollectionItem;