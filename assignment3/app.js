const http = new XMLHttpRequest();

http.open('GET', 'https://restcountries.eu/rest/v2/all', true);

http.onload = function () {
    if (this.status === 200) {
        const countries = JSON.parse(this.responseText);
        // Countries belonging to Asia region.
        console.log(countries.filter(country => country.region === 'Asia'));
        // Get all the countries with population less than 2 lacs.
        console.log(countries.filter(country => country.population < 200000));
        //Print countries which are using US dollars as currencies.
        const countries_with_$ = [];
        countries.forEach(country => {
            if (country.currencies.length > 1) {
                country.currencies.forEach(currency => {
                    if (currency.code === 'USD') {
                        countries_with_$.push(country);
                    }
                });
            } else {
                if (country.currencies[0].code === 'USD') {
                    countries_with_$.push(country);
                }
            }

        });
        console.log(countries_with_$);
        // Print total population of all countries using reduce.
        console.log(countries.reduce(getPopulation, 0));

        function getPopulation(total_population, country) {
            return total_population + country.population;
        }
    }
}

http.send();