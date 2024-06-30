import { createContext } from "react";

const Context = createContext({
    expenses: [],
    setExpences: () => {}
})

export default Context;