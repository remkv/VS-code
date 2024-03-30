function fetchData() {
    const rowContainer = document.getElementById('row');

    fetch("https://restcountries.com/v3.1/all")
        .then((res) => res.json())
        .then(data => {
           
            data.forEach((item) => {
                const flagImage = item.flags.png;
                let capitalName = ""
                if (item.capital) {
                    let capital = item.capital;

                    if (capital.length > 0) {
                        capitalName = capital[0];
                    }
                    else {
                        capitalName = "No capital"
                    }
                }
                const col = document.createElement('div');
                col.className = 'col-lg-3 col-sm-12';
                rowContainer.appendChild(col);
                const card = document.createElement('div');
                card.className = 'card h-100';

                const cardBody = document.createElement('div');
                cardBody.className = 'card-body'
                country = document.createElement("h5");
                country.textContent = item.name.common;
                country.className = 'card-header';
                const flagImg = document.createElement('img');
                flagImg.src = flagImage;
                flagImg.style.width = '100px';
                flagImg.style.height = '70px';
                flagImage.className = "card-img-top";
                const capitalElement = document.createElement("p");
                capitalElement.textContent = "Capital: " + capitalName;

                const region = document.createElement("p");
                region.textContent = "Region: " + item.region;

                const code = document.createElement("p");
                code.textContent = "Country Code: " + item.fifa;

                const latlng = document.createElement("p");
                code.textContent = "Lat Long: " + item.latlng.join(",");


                cardBody.appendChild(country);
                cardBody.appendChild(flagImg);
                cardBody.appendChild(capitalElement);
                cardBody.appendChild(region);
                cardBody.appendChild(latlng);
                cardBody.appendChild(code);

                let alertMsg = "The Weather is ";
                fetch(`https://api.openweathermap.org/data/2.5/weather?q=${item.name.common}&&appid=a2a177f8094b97960ce12aac9464f379`)
                    .then((result) => result.json())
                    .then(data1 => {
                        if (data1 && data1.weather && data1.weather[0].description) {
                            alertMsg = alertMsg + " " + (data1.weather[0].description);
                            console.log(alertMsg)
                        } else {
                            alertMsg = "The weather data is not available"
                        }

                    })


                const button = document.createElement('button');
                button.className = 'btn btn-primary';
                button.textContent = 'Click for Weather';
                button.addEventListener('click', function () {
                    alert(alertMsg);
                });

                cardBody.appendChild(button);
                card.appendChild(cardBody);
                col.appendChild(card);


            })
        })

    rowContainer.appendChild(col);
}
fetchData();

