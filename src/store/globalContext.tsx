import {createContext, useState, useContext} from 'react';

interface Istate  {
    value: string;
    handleChange: (text: string)=> void;
}

const initialState: Istate = {
    value: '',
    handleChange: () => {},
}

const AppContext = createContext(initialState)

const AppProvider = ({children}: {children: React.ReactNode}) => {
    const [value, setValue] = useState<string>('');

    const handleChange = (text: string) => {
        setValue(text)
    }

  


    return (
        <AppContext.Provider value={{value, handleChange}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default AppProvider