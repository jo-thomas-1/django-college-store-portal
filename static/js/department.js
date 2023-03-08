function generate_departments()
{
	let element = document.getElementById("department");
	let code = '<option selected disabled value="">-- Department --</option>';

	for (let dept in departments)
	{
		code = code + '<option value="' + dept + '">' + departments[dept]['name'] + '</option>';
	}

	element.innerHTML = code;
}

function update_courses(department_menu)
{
	let course_menu = document.getElementById("course");
	let current_department = department_menu.value;
	let code = '<option selected disabled value="">-- Course --</option>';

	for (let course in departments[current_department]['courses'])
	{
		code = code + '<option value="' + departments[current_department]['courses'][course] + '">' + departments[current_department]['courses'][course] + '</option>';
	}

	course_menu.innerHTML = code;
}