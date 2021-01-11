import React from "react";

const Item = ({ item, onEdit, onDelete }) => {
  let output = "";
  if (item.purchaseList.length > 0) {
    output = item.purchaseList.map((itm, i) => (
      <li key={i}>
        {itm.amount} * {itm.clothes.name}
      </li>
    ));
  }
  return (
    <div className="post">
      <h3>{item.uuid}</h3>
      <p>{item.user.userName}</p>
      <p>{item.price}</p>
      <p>{output}</p>
      <div className="control-buttons">
        {/* <button className="edit" onClick={() => onEdit(item)}>
          Edit
        </button> */}
        &nbsp;&nbsp;
        <button className="delete" onClick={() => onDelete(item)}>
          Delete
        </button>
      </div>
    </div>
  );
};
export default Item;
