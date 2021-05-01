const { todo } = require("./model");

getTodo = () => {
  return todo.find({}).then((data) => {
    return data;
  });
};

getPost = (req) => {
  let newTodo = new todo({
    title: req.body.title,
    completed: req.body.completed,
  });

  return newTodo.save().then((data) => {
    return data;
  });
};

getDelete = (id) => {
  return todo.findByIdAndRemove({ _id: id }).then((data) => {
    return data;
  });
};

getPut = (id, req) => {
  let newtodo = {
    title: req.body.title,
    completed: !(req.body.completed),
  };
  return todo
    .findByIdAndUpdate({ _id: id }, { $set: newtodo }, { new: true })
    .then((data) => {
      if (data) {
        return data;
      }
    });
};

module.exports = {
  getPost,
  getTodo,
  getDelete,
  getPut,
};
