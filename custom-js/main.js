let menues = [
	{
		"name" : "Home",
		"path" : "./index.html?page=Home"
	},
		{
		"name" : "About",
		"path" : "./about-us.html?page=About"
	},
	{
		"name" : "Classes",
		"path" : "./classes.html?page=Classes"
	},
	{
		"name" : "Blog",
		"path" : "./blog.html?page=Blog"
	},
	{
		"name" : "Gallery",
		"path" : "./gallery.html?page=Gallery"
	},
	{
		"name" : "Contacts",
		"path" : "./contact.html?page=Contacts"
	},
	{
		"name" : "BMI",
		"path" : "./bmi.html?page=BMI"
	}
];

let url = new URL(window.location.href);	
let page = url.searchParams.get('page');
(page == null) ? pageName = "Home" : pageName = page;

let element = "<ul>";
for (let i = 0; i < menues.length; i++) {
	let menu = menues[i];
	let active = (menu.name === pageName) ? "active" : "";
	element += `<li class='${active}'><a href="${menu.path}">${menu.name}</a></li>`;
}
element += "</ul>";
$(".js-menu").html(element);
