
import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState({
        name: "John",
        email: "john@gmail.com",
        role: "Admin"
    });

    const updateName = () => {
        setUser({
            ...user,
            name: "Alex"
        });
    };

    return (
        <UserContext.Provider value={{ user, updateName }}>
            {children}
        </UserContext.Provider>
    );
};
