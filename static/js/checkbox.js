function checkbox_clicked(checkbox)
{
	let parent_td = checkbox.parentElement.parentElement;

	if(checkbox.checked)
	{
		parent_td.style.setProperty("background-color", "#97bff9");
	}
	else
	{
		parent_td.style.setProperty("background-color", "transparent");
	}
}