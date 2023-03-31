export const DUMMY_COMMENTS = [
	{
		commentId: "1",
		userId: "1",
		userName: "real",
		commentText: "It's quite nice detective! Waiting for the next season!",
		userRating: 4.9,
		date: new Date().toLocaleDateString(),
		answers: [
			{
				commentId: "1_1",
				userId: "7",
				userName: "uma",
				commentText: "Yehh, I quite agree with this guy. Still waiting <3",
				userRating: 5,
				date: new Date().toLocaleDateString(),
			},
			{
				commentId: "1_2",
				userId: "9",
				userName: "Anonymous",
				commentText: "Ahahaha, you are kidding guys??!?",
				userRating: 0.1,
				date: new Date().toLocaleDateString(),
			},
		],
	},
	{
		commentId: "2",
		userId: "2",
		userName: "Mira Ki",
		commentText: "AWFUL!!!!",
		userRating: 1.0,
		date: new Date().toLocaleDateString(),
		answers: [
			{
				commentId: "2_1",
				userId: "9",
				userName: "Anonymous",
				commentText: "EXACTLY",
				userRating: 0.1,
				date: new Date().toLocaleDateString(),
			},
		],
	},
];