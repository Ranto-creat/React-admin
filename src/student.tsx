import { DataProvider } from "react-admin";
import { data } from "react-router-dom";

const dataProvider: DataProvider = {
  getList: (resource: string) => {
    if (resource === "posts") {
      const result = {
        data: [
          { id: 126, title: "allo?", author_id: 12 },
          { id: 127, title: "bien le bonjour", author_id: 12 },
          { id: 124, title: "good day sunshine", author_id: 12 },
          { id: 123, title: "hello, world", author_id: 12 },
          { id: 125, title: "howdy partner", author_id: 12 },
          { id: 128, title: "Hola!", author_id: 13 },
          { id: 129, title: "Guten Tag", author_id: 14 },

          { id: 130, title: "Buongiorno", author_id: 15 },
          { id: 126, title: "allo?", author_id: 12 }
        ],
        total: data.length,
        meta: {
          page: 1,
          perPage: 10,
          sort: { field: "id", order: "asc" },
          filters: { author_id: 12 },
        },
      };
      return Promise.resolve(result);
    } else if (resource === "students") {
      const result = {
        data: [
          {
            id: 1,
            name: "John Doe",
            age: 20,
          },
          {
            id: 2,
            name: "Jane Doe",
            age: 21,
          },
          {
            id: 3,
            name: "Jie Doe",
            age: 22,
          },
        ],
        total: 27,
        meta: {
          page: 1,
          perPage: 10,
          sort: { field: "id", order: "asc" },
          filters: { author_id: 12 },
        },
      };
      return Promise.resolve(result);
    }
  },
};
