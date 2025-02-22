// Add this SVG placeholder at the top of blog.js
const placeholderSVG = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 450' width='800' height='450'%3E%3Crect width='800' height='450' fill='%23f0f0f0'/%3E%3Ctext x='400' y='225' font-family='Arial' font-size='32' fill='%23888' text-anchor='middle' dominant-baseline='middle'%3ELoading...%3C/text%3E%3C/svg%3E`;

// Creating posts using InnerHTML ------------------------------------------

const posts = [
	{
		id: 1,
		title: 'Growth mindset',
		paragraph: 'A growth mindset can change your life',
		img_src: './images/blog-1.png',
		width: 800,
		height: 450,
		placeholder: placeholderSVG
	},
	{
		id: 2,
		title: 'How to become a leader',
		paragraph: 'There are 5 steps to develop a leadership ability',
		img_src: './images/blog-2.png',
		width: 800,
		height: 450,
		placeholder: placeholderSVG
	},
	{
		id: 3,
		title: 'Fear vs faith',
		paragraph: 'Do you know the difference between fear and faith?',
		img_src: './images/blog-3.png',
		width: 800,
		height: 450,
		placeholder: placeholderSVG
	},
	{
		id: 4,
		title: 'Why do you feel lazy?',
		paragraph: 'Little changes in your habits can help you to have more energy',
		img_src: './images/blog-4.png',
		width: 800,
		height: 450,
		placeholder: placeholderSVG
	},
	{
		id: 5,
		title: 'Work smart',
		paragraph: 'What is the importance of working smart?',
		img_src: './images/blog-5.png',
		width: 800,
		height: 450,
		placeholder: placeholderSVG
	},
	{
		id: 6,
		title: 'Mental health',
		paragraph: '3 Ways to improve your mental health',
		img_src: './images/blog-6.png',
		width: 800,
		height: 450,
		placeholder: placeholderSVG
	},
];

let container = document.getElementById('posts-container');

const fragment = document.createDocumentFragment();

// Helper function to load images progressively
function loadImage(imageElement, src) {
	return new Promise((resolve, reject) => {
		imageElement.onload = resolve;
		imageElement.onerror = reject;
		imageElement.src = src;
	});
}

// Create intersection observer for lazy loading
const imageObserver = new IntersectionObserver((entries, observer) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			const img = entry.target;
			const fullSrc = img.dataset.src;
			
			if (fullSrc) {
				loadImage(img, fullSrc)
					.then(() => {
						img.classList.add('loaded');
					})
					.catch(console.error);
				
				// Stop observing after loading
				observer.unobserve(img);
			}
		}
	});
}, {
	rootMargin: '50px 0px', // Start loading when image is 50px from viewport
	threshold: 0.1
});

posts.forEach((post) => {
	const postHTML = `<div class="post" role="article">
		<div class="images">
			<img 
				src="${post.placeholder || ''}"
				data-src="${post.img_src}"
				alt="${post.title} - ${post.paragraph}"
				width="${post.width}"
				height="${post.height}"
				class="lazy"
				decoding="async"
			>
		</div>
		<div class="post-text">
			<h2 class="post-title">${post.title}</h2>
			<p class="post-content">${post.paragraph}</p>
			<a href="#" class="read-more" role="button" aria-label="Read more about ${post.title}">Read More</a>
		</div>
	</div>`;

	const tempDiv = document.createElement('div');
	tempDiv.innerHTML = postHTML;
	fragment.appendChild(tempDiv.firstElementChild);
});

container.appendChild(fragment);

// Start observing images
document.querySelectorAll('img.lazy').forEach(img => {
	imageObserver.observe(img);
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

	const searchFragment = document.createDocumentFragment();
	filteredPosts.forEach((post) => {
		const postHTML = `<div class="post" role="article">
			<div class="images">
				<img 
					src="${post.placeholder || ''}"
					data-src="${post.img_src}"
					alt="${post.title} - ${post.paragraph}"
					width="${post.width}"
					height="${post.height}"
					class="lazy"
					decoding="async"
				>
			</div>
			<div class="post-text">
				<h2 class="post-title">${post.title}</h2>
				<p class="post-content">${post.paragraph}</p>
				<a href="#" class="read-more" role="button" aria-label="Read more about ${post.title}">Read More</a>
			</div>
		</div>`;

		const tempDiv = document.createElement('div');
		tempDiv.innerHTML = postHTML;
		searchFragment.appendChild(tempDiv.firstElementChild);
	});

	postContainer.appendChild(searchFragment);
	
	// Observe new images after search
	document.querySelectorAll('img.lazy').forEach(img => {
		imageObserver.observe(img);
	});
});
