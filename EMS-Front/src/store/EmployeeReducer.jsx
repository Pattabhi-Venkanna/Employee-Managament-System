// const EmployeeReducer = (currentValue, action) => {
//   switch (action.type) {
//     case "SET-EMPLOYEES":
//       return { ...currentValue, employees: action.payload };
//     case "ADD-EMPLOYEES":
//     case "DELETE-EMPLOYEES":

//     default:
//       return currentValue;
//   }
// };

// export default EmployeeReducer;

const EmployeeReducer = (currentValue, action) => {
  let newList = currentValue;
  if (action.type == "SET-EMPLOYEES") {
    newList = action.payload;
    console.log(newList);
  } else if (action.type === "DELETE-EMPLOYEE") {
    console.log(action.payload);
    newList = currentValue.filter((emp) => emp.id != action.payload);
  } else if (action.type === "CREATE-EMPLOYEE") {
    console.log(action.payload);
    newList = [...currentValue, action.payload];
    console.log(newList);
    console.log("lst");
  }
  return newList;
};
export default EmployeeReducer;
