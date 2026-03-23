function showWeather(){
    let input =document.getElementById("input");
    getWeather(input.value)
}
async function getWeather(city) {
    const url = `https://open-weather13.p.rapidapi.com/city?city=${city}&lang=EN`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5a3375a7b4msh24101f5ccc9d6d8p1d6750jsnc5a09100c4ee',
		'x-rapidapi-host': 'open-weather13.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    show(result.main.temp)
} catch (error) {
	console.error(error);
}
    
}
function show(data){
    let container=document.getElementById("container")
    container.innerHTML=`
    <h3>Current Weather : ${data}</h3>
    `
    
}