// Creating posts using InnerHTML ------------------------------------------

const posts = [
	{
		id: 1,
		title: 'Growth mindset',
		paragraph: 'A growth mindset can change your life',
		img_src: './blog_images/Blog_1.png',
	},
	{
		id: 2,
		title: 'How to become a leader',
		paragraph: 'There are 5 steps to develop a leadership ability',
		img_src: './blog_images/blog2.png',
	},
	{
		id: 3,
		title: 'Fear vs faith',
		paragraph: 'Do you know the difference between fear and faith?',
		img_src: './blog_images/Blog_image_3.png',
	},
	{
		id: 4,
		title: 'Why do you feel lazy?',
		paragraph: 'Little changes in your habits can help you to have more energy',
		img_src: './blog_images/blog_image_4.png',
	},
	{
		id: 5,
		title: 'Work smart',
		paragraph: 'What is the importance of working smart?',
		img_src: './blog_images/blog_image_5.png',
	},
	{
		id: 6,
		title: 'Mental health',
		paragraph: '3 Ways to improve your mental health',
		img_src: './blog_images/blog_image_6.png',
	},
];

let container = document.getElementById('posts-container');

posts.forEach((post) => {
	const postHTML = ` <div class="post">
    <div class="images">
            <img src="${post.img_src}" alt="Post Image" loading="lazy">
            </div>

        <div class="post-text">
            <h2 class= "post-title">${post.title}</h2>
            <p class = "post-content">${post.paragraph}</p>
            <a href="#">Read More</a>
            </div>`;

	container.insertAdjacentHTML('beforeend', postHTML);
});

//Using filtering and sort

searchInput = document.querySelector('#search-input');
searchButton = document.querySelector('#search-button');

searchButton.addEventListener('click', function () {
	let searchTerm = searchInput.value.trim().toLowerCase();
	const filteredPosts = posts.filter((post) => {
		const title = post.title.toLowerCase();
		const content = post.paragraph.toLowerCase();
		return title.includes(searchTerm) || content.includes(searchTerm);
	});

	const postContainer = document.getElementById('posts-container');
	postContainer.innerHTML = '';

	filteredPosts.forEach((post) => {
		const postHTML = ` <div class="post">
    <div class="images">
            <img src="${post.img_src}" alt="">
            </div>

        <div class="post-text">
            <h2 class= "post-title">${post.title}</h2>
            <p class = "post-content">${post.paragraph}</p>
            <a href="#">Read More</a>
            </div>`;

		postContainer.insertAdjacentHTML('beforeend', postHTML);
	});
});
