const message_tags = {
	debug: "alert-secondary",
    info: "alert-info",
    success: "alert-success",
    warning: "alert-warning",
    error: "alert-danger"
};

const departments = {
	cse: {
		name: "Computer Science and Engineering",
		link: "https://en.wikipedia.org/wiki/Computer_science_and_engineering",
		courses: [
			"B.Tech Computer Science and Engineering",
			"M.Tech Computer Science and Engineering"
		]
	},
	che: {
		name: "Chemical Engineering",
		link: "https://en.wikipedia.org/wiki/Chemical_engineering",
		courses: [
			"B.Tech Chemical Engineering",
			"M.Tech Chemical Engineering"
		]
	},
	ee: {
		name: "Electrical Engineering",
		link: "https://en.wikipedia.org/wiki/Electrical_engineering",
		courses: [
			"B.Tech Electrical Engineering",
			"M.Tech Electrical Engineering"
		]
	},
	me: {
		name: "Mechanical Engineering",
		link: "https://en.wikipedia.org/wiki/Mechanical_engineering",
		courses: [
			"B.Tech Mechanical Engineering",
			"M.Tech Mechanical Engineering"
		]
	},
	ce: {
		name: "Civil Engineering",
		link: "https://en.wikipedia.org/wiki/Civil_engineering",
		courses: [
			"B.Tech Civil Engineering",
			"M.Tech Civil Engineering"
		]
	}
};

// <li><a class="dropdown-item" href="https://en.wikipedia.org/wiki/Computer_science_and_engineering">Computer Science and Engineering</a></li>
// <li><a class="dropdown-item" href="https://en.wikipedia.org/wiki/Chemical_engineering">Chemical Engineering</a></li>
// <li><a class="dropdown-item" href="https://en.wikipedia.org/wiki/Electrical_engineering">Electrical Engineering</a></li>
// <li><a class="dropdown-item" href="https://en.wikipedia.org/wiki/Mechanical_engineering">Mechanical Engineering</a></li>
// <li><a class="dropdown-item" href="https://en.wikipedia.org/wiki/Civil_engineering">Civil Engineering</a></li>

function generate_nav_links()
{
	let element = document.getElementById("nav_dropdown_departments");
	let code = "";

	for (let dept in departments)
	{
		code = code + '<li><a class="dropdown-item" href="' + departments[dept]['link'] + '">' + departments[dept]['name'] + '</a></li>';
	}

	element.innerHTML = code;
}