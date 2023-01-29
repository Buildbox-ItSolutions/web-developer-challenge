import axios from "axios";
import { IPost } from "../types/post";

const postServices = {
	create: async (data: FormData) => {
		return await axios.post("http://localhost:8081/posts", data);
	},
	get: async (page: number = 1) => {
		return await (
			await axios.get(`http://localhost:8081/posts?page=${page}`)
		).data;
	},
};

export default postServices;
