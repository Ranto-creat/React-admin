import { Edit, SimpleForm, TextInput } from "react-admin";

const UserEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="id" />
      <TextInput source="name" />
      <TextInput source="username" />
      <TextInput source="email" />
      <TextInput source="address.street" />
      <TextInput source="phone" />
    </SimpleForm>
  </Edit>
);

export default UserEdit;
