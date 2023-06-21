import React from 'react'

// The initial user object representing user data
export const user = {
    email: '',
    password: '',
    isLoggedIn: false
}


// Function to log out the user by updating the isLoggedIn property to false
export function logOut() {
    user.isLoggedIn = false;
}

export const AppContext = React.createContext({
    user,
    logOut
})