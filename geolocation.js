const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    })
}



const whereAmI = async function () {
    try {
        //Geolocation
        const pos = await getPosition();
        const { latitude: lat, longitude: lng } = pos.coords;

        //Reverse geocoding
        const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=JSON`);
        const dataGeo = await resGeo.json();
        return dataGeo.city;
        

    }
    catch (err) {
        alert(err.message)
    }
}