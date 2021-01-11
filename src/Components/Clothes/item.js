import React from "react";

const Item = ({ item, onEdit, onDelete }) => {
  return (
    <div className="post">
      <h3>{item.name}</h3>
      <p>{item.brand}</p>
      <p>{item.price}</p>
      <p>{item.size}</p>
      <p>{item.color}</p>
      <div className="control-buttons">
        <button className="edit" onClick={() => onEdit(item)}>
          Edit
        </button>
        &nbsp;&nbsp;
        <button className="delete" onClick={() => onDelete(item)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Item;
