require('dotenv').config();
console.log(process.env.API_KEY);

fetch("https://world-population.p.rapidapi.com/allcountriesname", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "world-population.p.rapidapi.com",
		"x-rapidapi-key": `${process.env.API_KEY}`
	}
}).then(res => {return res.json();})
.then(data => {
var frase =data.body.countries;
document.querySelector("#banana").innerHTML = frase
}).catch(err => console.error(err))
