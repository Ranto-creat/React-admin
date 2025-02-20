import { Datagrid, EditButton, EmailField, List, TextField } from "react-admin";

const UserList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="name" />
      <TextField source="username" />
      <EmailField source="email" />
      <TextField source="phone" />
      <EditButton />
    </Datagrid>
  </List>
);

export default UserList;
