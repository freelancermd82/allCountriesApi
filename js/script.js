
const loadCountries = () => {
    const url = `https://restcountries.com/v3.1/all`
    fetch(url)
    .then(res => res.json())
    .then(data => displayLoadCountries(data));

}
const displayLoadCountries = countries => {
    const allCountries = document.getElementById('allCountries');

    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('country');
        countryDiv.innerHTML = `
            <h3>Name: ${country.name.common}</h3>
            <p>Capital: ${country.capital ? country.capital : 'No Capital'}</p>
            <button class="btn btn-primary btn-lg" onClick="showDetails('${country.cca2}')">Details</button>
        `
        allCountries.appendChild(countryDiv);
    })
}
const showDetails = code => {
    const url = `https://restcountries.com/v3.1/alpha/${code}
    `
    fetch(url)
    .then(res => res.json())
    .then(data => displayShowDetails(data[0]));
}
const displayShowDetails = country => {
    const showCountries = document.getElementById('showCountries');
    console.log(country);
    showCountries.innerHTML = `
        <h4>Name: ${country.name.common}</h4>
        <p>Capital: ${country.capital}</p>
        <img src="${country.flags.png}">
    `

}
loadCountries();