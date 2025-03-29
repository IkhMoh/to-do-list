import { v4 as uuidv4 } from "uuid";
const todoRedu = (currentTodo, action) => {
  switch (action.type) {
    case "add": {
      const now = new Date();
      const taskvalue = [
        ...currentTodo,
        {
          id: uuidv4(),
          texttsak: action.payload.newTaxt,
          time: now.toLocaleTimeString(),
          year: now.toLocaleDateString(),
          checkbox: false,
        },
      ];
      localStorage.setItem("the_data_of_list", JSON.stringify(taskvalue));

      return taskvalue;
    }
    case "delete": {
      const taskvalue = currentTodo.filter(
        (task1) => task1.id !== action.payload.id
      );
      localStorage.setItem("the_data_of_list", JSON.stringify(taskvalue));

      return taskvalue;
    }
    case "edit": {
      const taskvalue = currentTodo.map((task1) =>
        task1.id == action.payload.id
          ? { ...task1, texttsak: action.payload.text }
          : task1
      );
      localStorage.setItem("the_data_of_list", JSON.stringify(taskvalue));

      return taskvalue;
    }
    case "checkbox": {
      const taskvalue = currentTodo.map((task1) =>
        task1.id == action.payload.id
          ? { ...task1, checkbox: !task1.checkbox }
          : task1
      );
      localStorage.setItem("the_data_of_list", JSON.stringify(taskvalue));

      return taskvalue;
    }
    case "ShawuId": {
      currentTodo.map((task1) =>
        task1.id == action.payload.id
          ? action.payload.setNewTaxt({
              value: task1.texttsak,
              idd: action.payload.id,
            })
          : task1
      );
      return currentTodo;
    }
    case "dataFromloLocalStorage": {
      const Storage =
        JSON.parse(localStorage.getItem("the_data_of_list")) ?? [];
      return Storage;
    }
    default:
      throw Error(`Unknown action type: ${action.type}`);
  }
  return [];
};

export default todoRedu;
