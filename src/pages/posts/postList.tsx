import { CreateButton, Datagrid, EditButton, List, ReferenceField, TextField } from "react-admin";

const PostList = () => (
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" label="post title"/>
      <TextField source="body" />
      <ReferenceField source="userId" reference="users" />
      <EditButton/>
    </Datagrid>
  </List>
);
export default PostList;