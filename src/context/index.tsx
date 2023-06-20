import React, { useContext, createContext } from "react";
import { api } from "../agent";

interface ContextProps {}

export const ActionContext = createContext({} as ContextProps );

const ActionProvider = (properties: any) => {
    const [loading, setLoading] = React.useState<boolean>();

    const history = {};
    
    const ActionContextValue = {};

    return <ActionContext.Provider value={ActionContextValue} {...properties}/>
}

const useActionContext = () => useContext(ActionContext);

export { useActionContext, ActionProvider };