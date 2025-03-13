const textarea = document.getElementById("textarea");
const wordCountElement = document.getElementById("orange-card-counter");
const charCountElement = document.getElementById("purple-card-counter");
const ExcludeSpaces = document.getElementById("ExcludeSpaces");
const characterlimit = document.getElementById("CharacterLimit");
const maxLength = 99;
const themeChanger = document.getElementById('themeChanger');


let isDarkMode = true; 

themeChanger.addEventListener('click', () => {
    if (isDarkMode) {
        document.body.style.backgroundImage = "none";
        document.body.style.backgroundColor = "#FAF9F6";
        document.body.style.color = "black";
        characterlimit.style.borderColor = "black";
        characterlimit.style.borderWidth = "2px";
        ExcludeSpaces.style.borderColor = "black";
        ExcludeSpaces.style.borderWidth = "2px";
        themeChanger.style.backgroundColor = "grey";
        textarea.style.backgroundColor = 'lightgray';
        textarea.style.color = 'black';
    } else {
        document.body.style.backgroundImage = "url(./assets/BG\ Noise.svg)";
        document.body.style.backgroundColor = "#13151B";
        document.body.style.color = "white";
        characterlimit.style.borderColor = "white";
        characterlimit.style.borderWidth = "2px";
        ExcludeSpaces.style.borderColor = "white";
        ExcludeSpaces.style.borderWidth = "2px";
        themeChanger.style.backgroundColor = "#2A2B37";
        textarea.style.backgroundColor = '#21222C';
        textarea.style.color = 'white';
    }

    isDarkMode = !isDarkMode;
});

textarea.addEventListener("input", () => {
	let text = textarea.value;
	let letterCount;

	if (ExcludeSpaces.checked == true) {
		letterCount = text.replace(/\s/g, "").length;
	} else {
		letterCount = text.length;
	}

	const wordCount = countWords(text);

	wordCountElement.textContent = wordCount;
	charCountElement.textContent = letterCount;

	if (characterlimit.checked == true) {
		if (text.length > maxLength) {
			textarea.value = text.slice(0, maxLength);
		}


	}
});

function countWords(text) {
	text = text.trim();
	if (text === "") return 0;
	return text.split(/\s+/).length;
}
