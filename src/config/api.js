import axios from "axios";

const jokeAPI = axios.create({
	baseURL: 'http://localhost:3000'
});

jokeAPI.interceptors.request.use((req) => {
	const token = sessionStorage.getItem('token');
	console.log("Set Token header: ", token)
	if (token) {
		req.headers["Authorization"] = `Bearer ${token}`
	}
	return req
})

export default jokeAPI;