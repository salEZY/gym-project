fetch('./data/nav.json')
			.then((res) => {
				return res.json()
			})
			.then((data) => {
				let url = new URL(window.location.href);	
				let page = url.searchParams.get('page');
				(page == null) ? pageName = "Home" : pageName = page;
				document.title += ` ${pageName}`
				let element = "<ul>";
				for (let i = 0; i < data.length; i++) {
					let menu = data[i];
					let active = (menu.name === pageName) ? "active" : "";
					element += `<li class='${active}'><a href="${menu.path}">${menu.name}</a></li>`;
				}
				element += "</ul>";
				$(".js-menu").html(element);				
			})



	


