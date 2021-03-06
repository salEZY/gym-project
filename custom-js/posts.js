async function getPostsFromJson(url) {
	try {
		let response = await fetch(url)
		let data = await response.json()
		return data
	} catch (err) {
		console.error(err)
	}
}

let posts = []
getPostsFromJson('./data/blog.json')
	.then((data) => {
		var postsTemplate = "";
	for (var i = 0; i < data.length; i++) {
		var singlePost = data[i];		
		posts.push(singlePost)
		var blogTemplate = '<div class="col-lg-4 col-md-6">';
		blogTemplate += '<div class="single-blog-item">';
		blogTemplate += `<img src="${singlePost.img_path}" alt="">`;
		blogTemplate += '<div class="blog-widget">';
		blogTemplate += `<div class="bw-date">${singlePost.created_at}</div>`;
		blogTemplate += `<a href="#" class="tag">${singlePost.tag}</a>`;
		blogTemplate += '</div>';
		blogTemplate += `<h4><a href="./blog-details.html">${singlePost.title}</a></h4>`;
		blogTemplate +=  '</div></div></div>';
	
		postsTemplate += blogTemplate;
	}
	
	$('#list-posts').html(postsTemplate);
	return posts
	})

let searchBtn = document.querySelector("#searchBtn")

function filterPosts() {
	let selectTag = $('#posts').find(":selected").text();
	if (selectTag === '--Select--') {
		$("#list-posts").empty()
		displayPosts(posts)
		return
	}

	var selectedPosts = [];

	for (var i = 0; i < posts.length; i++) {
		var post = posts[i];
		if (post.tag == selectTag) {
			selectedPosts.push(post);
		}
	}

	$("#list-posts").empty();
	displayPosts(selectedPosts);
}

function displayPosts(filteredPosts) {

	var postsTemplate = "";

	for (var i = 0; i < filteredPosts.length; i++) {
		var singlePost = filteredPosts[i];

		var blogTemplate = '<div class="col-lg-4 col-md-6">';
		blogTemplate += '<div class="single-blog-item">';
		blogTemplate += `<img src="${singlePost.img_path}" alt="">`;
		blogTemplate += '<div class="blog-widget">';
		blogTemplate += `<div class="bw-date">${singlePost.created_at}</div>`;
		blogTemplate += `<a href="#" class="tag">${singlePost.tag}</a>`;
		blogTemplate += '</div>';
		blogTemplate += `<h4><a href="./blog-details.html">${singlePost.title}</a></h4>`;
		blogTemplate +=  '</div></div></div>';

		postsTemplate += blogTemplate;
	}

	$('#list-posts').html(postsTemplate);
}

const searchByName = () => {
	let name = document.querySelector('#name').value.toLowerCase()
	if (name.length < 3) {
		return
	}

	var postsByName = [];

	for (var i = 0; i < posts.length; i++) {
		var post = posts[i];
		if (name.substring(0, 3) === post.title.substring(0, 3).toLowerCase()) {
			postsByName.push(post);
		}
	}

	$("#list-posts").empty();
	displayPosts(postsByName)
}

searchBtn.addEventListener('click', searchByName)