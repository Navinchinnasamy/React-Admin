import React, { useContext, createContext, useState, useEffect } from "react";
import authendicate from './CommonServices';

const authContext = createContext();

// Provider component that wraps your app and makes auth object available to any child component that calls useAuth().
export function ProvideAuth({ children }){
	const auth = useProvideAuth();
	return <authContext.Provider value={auth}>{ children }</authContext.Provider>;
}


// Hook for child component to get the auth object and re-render when it changes.
export const useAuth = () => {
	return useContext(authContext);
};


// Provider hook that creates auth object and handles state.
function useProvideAuth(){
	const usr = () => {
		const tokenString = sessionStorage.getItem('user');
		const userToken = JSON.parse(tokenString);
		return (userToken) ? userToken : null;
	}
	const [user, setUser] = useState(usr);
	
	const signIn = (email, pass) => {
		return authendicate.login({'username':email, 'password':pass}).then(res => {
			sessionStorage.setItem('user', JSON.stringify(res.data));
			setUser(res.data);
		});
	};
	
	const signOut = () => {
		setUser(false);
	};
	
	return {
		user,
		signIn,
		signOut
	};
}