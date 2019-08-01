import React from 'react';

const CollectionItem = (props) => {
  return (
    <div onClick={() => props.changeImage(props.image)}>
      <img src={props.image} alt=""/>
    </div>
  )
};

export default CollectionItem;