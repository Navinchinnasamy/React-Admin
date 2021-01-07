import http from './http-common';

const login = data => {
	console.log(data);
	return http.post("/login", data);
};


export default {
	login
};