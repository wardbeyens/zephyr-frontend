import React from "react";
import CreateForm from "./create_form";
import List from "./list";

const Index = ({ data, onCreate, onEdit, onUpdate, onDelete }) => {
  return (
    <div>
      <CreateForm onCreate={onCreate} />
      <List
        data={data}
        onEdit={onEdit}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Index;
