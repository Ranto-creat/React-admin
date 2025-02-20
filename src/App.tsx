import { Admin, Resource } from "react-admin";
import { dataProvider } from "./dataProvider";
import { Layout } from "./Layout";
import PostList from "./pages/posts/postList";
import UserList from "./pages/users/userslist";
import PostShow from "./pages/posts/postShow";
import UserShow from "./pages/users/usersShow";
import PostEdit from "./pages/posts/postEdit";
import UserEdit from "./pages/users/usersEdit";
import postCreate from "./pages/posts/postCreate";
import userCreate from "./pages/users/usersCreate";

export const App = () => {
  return (
    <Admin dataProvider={dataProvider} layout={Layout}>
      <Resource name="posts" list={PostList} show={PostShow} edit={PostEdit} create={postCreate}/>
      <Resource name="users" list={UserList} show={UserShow} edit={UserEdit}  create={userCreate}/>
    </Admin>
  );
};
