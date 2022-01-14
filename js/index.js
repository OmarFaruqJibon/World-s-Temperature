const loadWeather  = () => {
    const seaechField = document.getElementById('search-field');
    const searchText = seaechField.value;
    console.log(searchText);
    seaechField.value = '';
    const url = `http://api.weatherapi.com/v1/current.json?key=4881936de53342dcbca133251221301&q=${searchText}&aqi=no`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => displayTemp(data));
    
}

const displayTemp = data => {
    console.log(data)
    const tempContainer = document.getElementById('temp-container');
    tempContainer.textContent = '';
        const div = document.createElement('div');

        div.innerHTML = `
            <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="">
            <h1 class="city_name">${data.location.name}</h1>
            <p class="country_name">${data.location.country}</p>
            <h3 class="temp_c">${data.current.temp_c}&#176 C</h3>
        `;
        tempContainer.appendChild(div);

}
