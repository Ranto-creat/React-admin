// import {  CreateParams, CreateResult, DataProvider, DeleteManyParams, DeleteManyResult, DeleteParams, DeleteResult, GetListParams, GetListResult, GetManyParams, GetManyReferenceParams, GetManyReferenceResult, GetManyResult, GetOneParams, GetOneResult, Identifier, QueryFunctionContext, RaRecord, UpdateManyParams, UpdateManyResult, UpdateParams, UpdateResult  } from "react-admin";
// import { data } from "react-router";

// export const dataprovider: DataProvider = {
//   getList: async (resource: string): Promise<GetListResult<any>> => {
//     if (resource === "posts") {
//       const data = await fetch("https://jsonplaceholder.typicode.com/posts", {method: 'GET'});
//       const posts = await data.json();
//       return { data: posts, total: posts.length };
//     }
//     return { data: [], total: 0 };
//   }
// };


// https://jsonplaceholder.typicode.com/posts
import jsonServerProvider from 'ra-data-json-server';

export const dataProvider = jsonServerProvider(import.meta.env.VITE_JSON_URL,);