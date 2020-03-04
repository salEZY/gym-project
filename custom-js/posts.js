let posts = [
	{
		"title" : "10 States At Risk of Rural Hospital Closures",
		"tag" : "#Gym",
		"img_path" : "img/blog/blog-1.jpg",
		"created_at" : "February 17, 2019"
	},
	{
		"title" : "Diver who helped save Thai soccer team",
		"tag" : "#Sport",
		"img_path" : "img/blog/blog-2.jpg",
		"created_at" : "February 17, 2019"
	},
	{
		"title" : "10 States At Risk of Rural Hospital Closures",
		"tag" : "#Gym",
		"img_path" : "img/blog/blog-1.jpg",
		"created_at" : "February 17, 2019"
	},
];

var postsTemplate = "";

for (var i = 0; i < posts.length; i++) {
	var singlePost = posts[i];

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


function filterPosts() {
	let selectTag = "#" + $('#posts').find(":selected").text();

	var selectedPosts = [];

	for (var i = 0; i < posts.length; i++) {
		var post = posts[i];
		console.log(selectTag, post.tag);
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



