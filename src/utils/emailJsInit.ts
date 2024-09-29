import { init } from "@emailjs/browser";
import { type Options } from "@emailjs/browser/es/types/Options";

export const initEmailService = () => {
	const options: Options = {
		publicKey: process.env.NEXT_PUBLIC_KEY_EMAILJS,
		blockHeadless: true,
		blockList: {
			list: [],
			watchVariable: "userEmail",
		},
		limitRate: {
			id: "3D Models Store",
			throttle: 10000,
		},
	};

	init(options);
};
