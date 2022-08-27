function toggle_light_mode() {
    var app = document.body;
    if (localStorage.lightMode == "dark") {
	localStorage.lightMode = "light";
    app.setAttribute("light-mode", "light");
    } else {
	localStorage.lightMode = "dark";
	app.setAttribute("light-mode", "dark");
    }	
}

function titlePageFontColor() {
    if (localStorage.lightMode == "dark") {
        for (var element of mainTitleSpanList) {
            element.style.color = "#ced4e2";
        }    
    } else {
        for (var element of mainTitleSpanList) {
            element.style.color = "#141516";
        } 
    }
}