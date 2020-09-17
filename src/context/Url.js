import React from 'react'

export const UrlContext = React.createContext()

const Url = (props) => {
    
    return (
        <UrlContext.Provider>
            {props.children}
        </UrlContext.Provider>
    )
}

export default Url
