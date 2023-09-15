import {createContext, useState, useContext} from 'react';

interface Istate  {
    value: string;
    handleChange: (text: string)=> void;
    isLoading: boolean;
    handleIsLoading: (value: boolean)=> void;
}

const initialState: Istate = {
    value: '',
    handleChange: () => {},
    isLoading: false,
    handleIsLoading: () => {},
}

const AppContext = createContext(initialState)

const AppProvider = ({children}: {children: React.ReactNode}) => {
    const [value, setValue] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleChange = (text: string) => {
        setValue(text)
    }

    const handleIsLoading = (value: boolean) => {
        setIsLoading(value)
    }


    return (
        <AppContext.Provider value={{value, handleChange, isLoading, handleIsLoading}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export default AppProvider