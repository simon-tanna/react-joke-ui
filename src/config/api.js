import axios from "axios";

const jokeAPI = axios.create({
	baseURL: 'https://joke-api-lesson-deploy.herokuapp.com/'
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