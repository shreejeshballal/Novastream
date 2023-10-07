const Videos = [
	{
		id: 1,
		video: {
			title: "Epic Mountain Biking Adventure",
			thumbnail:
				"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
			timestamp: "00:15:20",
			uploadedBy: "Extreme Sports",
			viewCount: "235k",
			uploadDate: 2,
			uploadedByImage:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		},
	},
	{
		id: 2,
		video: {
			title: "Cooking Masterclass: Italian Pasta",
			thumbnail:
				"https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1940&q=80",
			timestamp: "00:08:45",
			uploadedBy: "Food Delights",
			viewCount: "98k",
			uploadDate: 1,
			uploadedByImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
		},
	},
	{
		id: 3,
		video: {
			title: "Best Moments of a Comedy Show",
			thumbnail:
				"https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
			timestamp: "01:20:10",
			uploadedBy: "Comedy Central",
			viewCount: "365k",
			uploadDate: 4,
			uploadedByImage:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
		},
	},
	{
		id: 4,
		video: {
			title: "Traveling Through Ancient Ruins",
			thumbnail:
				"https://images.unsplash.com/photo-1519055548599-6d4d129508c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			timestamp: "00:25:30",
			uploadedBy: "History Unearthed",
			viewCount: "175k",
			uploadDate: 3,
			uploadedByImage:
				"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
		},
	},
	{
		id: 5,
		video: {
			title: "Gaming Marathon: Fortnite Victory Royale",
			thumbnail:
				"https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			timestamp: "04:10:15",
			uploadedBy: "Gamer's Paradise",
			viewCount: "500k",
			uploadDate: 2,
			uploadedByImage:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
		},
	},
	{
		id: 6,
		video: {
			title: "Wildlife Safari in Africa",
			thumbnail:
				"https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			timestamp: "00:30:45",
			uploadedBy: "Nature Explorers",
			viewCount: "280k",
			uploadDate: 5,
			uploadedByImage:
				"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		},
	},
	{
		id: 7,
		video: {
			title: "Tech Review: Latest Smartphone",
			thumbnail:
				"https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
			timestamp: "00:18:55",
			uploadedBy: "Tech Insights",
			viewCount: "145k",
			uploadDate: 1,
			uploadedByImage:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
		},
	},
	{
		id: 8,
		video: {
			title: "Artistic Painting Process",
			thumbnail:
				"https://images.unsplash.com/photo-1679589159460-e80a6ad7f0b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
			timestamp: "00:07:30",
			uploadedBy: "Artistic Creations",
			viewCount: "75k",
			uploadDate: 2,
			uploadedByImage:
				"https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80",
		},
	},
	{
		id: 9,
		video: {
			title: "Fitness Workout: HIIT Session",
			thumbnail:
				"https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			timestamp: "00:16:20",
			uploadedBy: "Fitness Freaks",
			viewCount: "120k",
			uploadDate: 2,
			uploadedByImage:
				"https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		},
	},
	{
		id: 10,
		video: {
			title: "Science Explained: Black Holes",
			thumbnail:
				"https://images.unsplash.com/photo-1597449031666-21da12583121?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			timestamp: "00:14:40",
			uploadedBy: "Science Wonders",
			viewCount: "210k",
			uploadDate: 3,
			uploadedByImage:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		},
	},
	{
		id: 11,
		video: {
			title: "Traveling in Japan: Cherry Blossom Season",
			thumbnail:
				"https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1776&q=80",
			timestamp: "00:12:55",
			uploadedBy: "Travel Enthusiasts",
			viewCount: "210k",
			uploadDate: 2,
			uploadedByImage:
				"https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
		},
	},
	{
		id: 12,
		video: {
			title: "DIY Home Improvement: Renovating Your Space",
			thumbnail:
				"https://images.unsplash.com/photo-1522065893269-6fd20f6d7438?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
			timestamp: "00:17:30",
			uploadedBy: "Home DIY Masters",
			viewCount: "185k",
			uploadDate: 1,
			uploadedByImage:
				"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		},
	},
	{
		id: 13,
		video: {
			title: "Exploring Underwater Worlds: Scuba Diving Adventure",
			thumbnail:
				"https://images.unsplash.com/photo-1682687980115-a37b56ea7271?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
			timestamp: "00:21:45",
			uploadedBy: "Ocean Explorers",
			viewCount: "150k",
			uploadDate: 3,
			uploadedByImage:
				"https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		},
	},
	{
		id: 14,
		video: {
			title: "Music Performance: Jazz Night Live",
			thumbnail:
				"https://images.unsplash.com/photo-1468392788711-903a924761a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1787&q=80",
			timestamp: "01:05:20",
			uploadedBy: "Music Lovers",
			viewCount: "280k",
			uploadDate: 4,
			uploadedByImage:
				"https://images.unsplash.com/photo-1609010697446-11f2155278f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		},
	},
	{
		id: 15,
		video: {
			title: "Nature's Beauty: Sunrise in the Mountains",
			thumbnail:
				"https://images.unsplash.com/photo-1628179487664-a1f95c267a26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
			timestamp: "00:06:30",
			uploadedBy: "Nature Enthusiasts",
			viewCount: "95k",
			uploadDate: 1,
			uploadedByImage:
				"https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
		},
	},
];

export default Videos;
