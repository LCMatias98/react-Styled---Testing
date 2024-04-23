import { fireEvent, getByRole, render } from "@testing-library/react";
import App from "../App";
//crea dom virtual solo para test


//describe es un grupo
describe("App", () =>{
    test("The Form should be render properly", () =>{
        const {getByText} = render(<App />);
//        expect(getByText("Nombre de la Tarea")).toBeInTheDocument();
      //  getByText("Nombre de la Tarea");
      //fireEvent.click(/Eliminar/i)
      fireEvent.change(getByRole("input", {name: "taskName"}, "test"));
      fireEvent.change(getByRole("textArea", {name: "taskDescription"}, "test"));
        getByText(/Nombre DE la Tarea/i); //Expresion Regular
    })
});