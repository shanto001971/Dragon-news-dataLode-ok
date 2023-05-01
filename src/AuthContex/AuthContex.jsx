import React, { createContext } from 'react';
import { getAuth } from "firebase/auth";
import { app } from '../firebase/firebase.config';


export const authProvaider = createContext(null);


const AuthContex = ({ children }) => {

    const auth = getAuth(app);

    const authinfo = {user : "shanto"}

    return (
        <div>
            <authProvaider.Provider value={authinfo }>
                {children}
            </authProvaider.Provider>
        </div>
    );
};

export default AuthContex;