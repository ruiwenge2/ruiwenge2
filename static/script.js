function search() {
	var input, filter, ul, li, a, i, text;
	input = document.getElementById("search");
	filter = input.value.toLowerCase();
	div = document.querySelectorAll("main div");
	text = document.querySelectorAll(".h3");
	for (i = 0; i < text.length; i++) {
    	txtValue = text[i].textContent || text[i].innerText;
    	if (txtValue.toLowerCase().indexOf(filter) > -1) {
	    	div[i].style.display = "block";
	    } else {
	    	div[i].style.display = "none";
	    }
	}
}