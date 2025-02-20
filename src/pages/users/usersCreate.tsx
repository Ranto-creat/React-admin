import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin";

const userCreate = () => {
  return (
    <Create>
      <SimpleForm>
        <ReferenceInput source={"userId"} reference={"users"} />
        <TextInput source="id" />
        <TextInput source="name" />
        <TextInput source="username" />
        <TextInput source="email" />
        <TextInput source="address.street" />
        <TextInput source="phone" />
      </SimpleForm>
    </Create>
  );
};

export default userCreate;
