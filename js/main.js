var country = document.getElementById("country");
country.addEventListener('change', function (evt) {
    var selectedCountry = country[country.selectedIndex].value;
    console.log(selectedCountry);

    switch (selectedCountry) {
        case "Yemen":
            document.querySelectorAll('.country').forEach(el => el.style.display = "none");
            var city = document.getElementById("yemen_city");
            city.style.display = "inline-block";
            var images = document.getElementById("images");
           
            city.addEventListener('change', function (evt) {
                removeChilds(images);
                var selectedCity = city[city.selectedIndex].value;
                console.log(selectedCity);
                for (let i = 0; i < 3; i++) {
                    var img = `<img src="images/${selectedCity}${i+1}.png">`;
                    console.log(img);
                    document.getElementById("images").insertAdjacentHTML('beforeend', img);
                }

                
            });
            break;
        case "Egypt":
            document.querySelectorAll('.country').forEach(el => el.style.display = "none");
            city = document.getElementById("egypt_city");
            city.style.display = "inline-block";
            var images = document.getElementById("images");
           
            city.addEventListener('change', function (evt) {
                removeChilds(images);
                var selectedCity = city[city.selectedIndex].value;
                console.log(selectedCity);
                for (let i = 0; i < 3; i++) {
                    var img = `<img src="images/${selectedCity}${i+1}.png">`;
                    console.log(img);
                    document.getElementById("images").insertAdjacentHTML('beforeend', img);
                }

                
            });
        default:
            break;
    } 
});

function removeChilds(element) {
    console.log(element.firstChild);
    
    while(element.firstChild) {
        element.firstChild.remove();
    }
}
