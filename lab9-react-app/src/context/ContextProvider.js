import Context from "./Context"
import {useState} from "react";

export default function ContextProvider(props) {

    const [expenses, setExpenses] = useState([]);

return(
    <Context.Provider
      value={{
        expenses,
        setExpenses,
      }}
    >
      {props.children}
    </Context.Provider>
)

}