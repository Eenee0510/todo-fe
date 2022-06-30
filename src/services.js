const getTodo = async () => {
  return await fetch("http://localhost:5000/api/todo", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    // body: JSON.stringify(),
  });
};

const postTodo = async () => {
  return await fetch("http://localhost:5000/api/todo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });
};

export const services = {
  getTodo,
  postTodo,
};
