import axios from "axios";

const postServices = {
	create: async (data: FormData) => {
		return await axios.post("http://localhost:8081/posts", data);
	},
	get: async (page: number = 1) => {
		return await (
			await axios.get(`http://localhost:8081/posts`)
		).data;
	},
	delete: async (id: string) => {
		return await (
			await axios.delete(`http://localhost:8081/posts/${id}`)
		).data;
	},
};

export default postServices;
