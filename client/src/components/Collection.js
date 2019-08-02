import React from 'react';
import CollectionItem from './CollectionItem.js'

const Collection = (props) => {
  return (
    <div className="container" id="collection">
    {props.collection.map((imageUrl, i) => {
      return <CollectionItem imageUrl={imageUrl} key={i}/>
    })}
  </div>
  )
}

export default Collection;