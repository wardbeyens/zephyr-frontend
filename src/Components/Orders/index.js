import React from "react";
import CreateForm from "./create_form";
import List from "./list";

const Index = ({
  orders,
  users,
  clothes,
  onCreate,
  onEdit,
  onUpdate,
  onDelete,
}) => {
  return (
    <div>
      <CreateForm clothes={clothes} users={users} onCreate={onCreate} />
      <List
        data={orders}
        clothes={clothes}
        users={users}
        onEdit={onEdit}
        onUpdate={onUpdate}
        onDelete={onDelete}
      />
    </div>
  );
};

export default Index;
