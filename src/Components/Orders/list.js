import React from "react";
import EditForm from "./edit_form";
import Item from "./item";

const List = ({ data, clothes, users, onEdit, onUpdate, onDelete }) => {
  let output = <div>Loading</div>;

  if (data.length > 0) {
    output = data.map((item, i) => {
      return (
        <div key={i}>
          {item.isEditing ? (
            <EditForm
              item={item}
              clothes={clothes}
              users={users}
              key={i}
              onUpdate={onUpdate}
            />
          ) : (
            <Item key={i} onEdit={onEdit} onDelete={onDelete} item={item} />
          )}
        </div>
      );
    });
  }

  return (
    <div>
      <h1 className="post_heading">All Orders</h1>
      {output}
    </div>
  );
};

export default List;
