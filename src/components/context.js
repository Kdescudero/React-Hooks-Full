
import React, { useState } from 'react';

export const AppContext = React.createContext('AppContext')

export const AppProvider = (props) => {
    const [color, setcolor] = useState('red');
    const [data, setData] = useState({})

    return (
        <AppContext.Provider value={{
            appContext: {
                setcolor,
                color
            },
            data,
            setData,
        }}>
            {props.children}
        </AppContext.Provider>
    )
}