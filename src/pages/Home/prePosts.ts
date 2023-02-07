import { v4 as uuidv4 } from "uuid";

import PostProps from "components/interface/PostProps";

import photoBase from "../../assets/photo-base.png";

const prePosts: PostProps[] = [
	{
		id: uuidv4(),
		message:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
		photo: photoBase,
		name: "Manuela Oliveira",
	},
	{
		id: uuidv4(),
		message:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla mattis ligula vel velit scelerisque iaculis. Nam mattis justo id orci commodo, eu tempus purus cursus.",
		photo: photoBase,
		name: "Santos de Arrascaeta",
	},
];

export default prePosts;