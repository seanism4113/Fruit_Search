const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');

const fruits= [
				'Apple 🍎', 'Apricot', 'Avocado 🥑', 'Banana 🍌', 'Bilberry', 
				'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 
				'Currant', 'Cherry 🍒', 'Coconut', 'Cranberry', 'Cucumber', 
				'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 
				'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape 🍇', 
				'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 
				'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 
				'Kiwifruit 🥝', 'Kumquat', 'Lemon 🍋', 'Lime', 'Loquat', 'Longan', 
				'Lychee', 'Mango 🥭', 'Mangosteen', 'Marionberry', 'Melon 🍈', 
				'Cantaloupe', 'Honeydew', 'Watermelon 🍉', 'Miracle fruit', 
				'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 
				'Clementine', 'Mandarine', 'Tangerine 🍊', 'Papaya', 
				'Passionfruit', 'Peach 🍑', 'Pear 🍐', 'Persimmon', 'Plantain', 
				'Plum', 'Pineapple 🍍', 'Pomegranate', 'Pomelo', 'Quince', 
				'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 
				'Satsuma', 'Soursop', 'Star fruit', 'Strawberry 🍓', 'Tamarillo', 
				'Tamarind', 'Yuzu'];

const search = (str) => {
	let results = [];
	let lowerCaseStr = str.toLowerCase();

	if (lowerCaseStr.length < 3){
		results = fruits.filter ((fruit) => fruit.toLowerCase().startsWith(lowerCaseStr));
		if (results.length === 0){
			results = fruits.filter ((fruit) => fruit.toLowerCase().includes(lowerCaseStr));
		}
	}
	else {
	results = fruits.filter ((fruit) => fruit.toLowerCase().includes(lowerCaseStr));
	}

	return results;
}

const searchHandler = ((e) => {
	if (input.value !== ""){
		userInput = input.value;
		return showSuggestion(search(userInput));
	}
	else {
		clearSuggestionFormats();
	} 
});

const showSuggestion = (results) => {

	clearSuggestionFormats();

	for (let result of results){
		let newLi = document.createElement('li');
		newLi.innerText = result;
		suggestions.append(newLi);
		suggestions.style.background = "rgb(250, 186, 76)";
		suggestions.style.border = "solid 1px grey";
		}
}

const useSuggestion = (e) => {
	input.value = e.target.innerText;
	clearSuggestionFormats();
}

const clearSuggestionFormats = () => {
	suggestions.innerHTML = '';
	suggestions.style.background = "none";
	suggestions.style.border = "none";

	return suggestions;
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);