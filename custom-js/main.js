var menues = [
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
	}
];

var url = new URL(window.location.href);	
var page = url.searchParams.get('page');
(page == null) ? pageName = "Home" : pageName = page;

var element = "<ul>";
for (var i = 0; i < menues.length; i++) {
	var menu = menues[i];
	var active = (menu.name === pageName) ? "active" : "";
	element += `<li class='${active}'><a href="${menu.path}">${menu.name}</a></li>`;
}
element += "</ul>";
$(".js-menu").html(element);
                    //     <li class="active"><a href="./index.html">Home</a></li>
                    //     <li><a href="./about-us.html">About</a></li>
                    //     <li><a href="./classes.html">Classes</a></li>
                    //     <li><a href="./blog.html">Blog</a></li>
                    //     <li><a href="./gallery.html">Gallery</a></li>
                    //     <li><a href="./contact.html">Contacts</a></li>
                    // </ul>