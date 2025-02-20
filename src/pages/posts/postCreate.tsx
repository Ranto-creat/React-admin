import { Create, ReferenceInput, SimpleForm, TextInput } from "react-admin"


const postCreate = () => {
  return (
    <Create>
        <SimpleForm>
            <ReferenceInput source={"userId"} reference={"users"} />
            <TextInput source="id" />
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Create>
  )
}

export default postCreate