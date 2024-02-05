import { createContext, useState } from 'react';

export const Mycontext = createContext();


const ContextApi = ({ children }) => {
    const [viewDetails, setDetails] = useState('')
    return (
        <div>
        <Mycontext.Provider value={{ viewDetails, setDetails }}>
            {children}
        </Mycontext.Provider>
        </div>
    )
}

export default ContextApi;

export const ContextConsumer = (Component) => {
    return(state) => {
        <div>
            {(state) => <Component state={state} />}
        </div>
    }
}