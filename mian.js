let link = "https://api.openweathermap.org/data/2.5/";
let key  ="8c9d6c5d374e9bbb04d87bbc14f8c84d";
const setApp = (e) =>{
    //console.log(e);
    if(e.code == "Enter"){

        getResult(serach.value)
    }


}


const getResult = (city) =>{
    console.log(city)

    let api = `${link}weather?q=${city}&appid=${key}&units=metric&lang=en`
    fetch(api)
        .then(weather => weather.json())
        .then(displaResult)
}

const displaResult = (data) => {
    console.log(data);

    let sehirAdi = document.getElementById("sehirAdi");
    sehirAdi.innerText = data.name +" , " + data.sys.country;

    let sicaklik = document.getElementById("sicaklik");
    sicaklik.innerText = `${Math.round(data.main.temp ) } °C` ;
    
    let maxmin = document.getElementById("maxmin");
    maxmin.innerText =`${Math.round(data.main.temp_max)}  °C / ${Math.round(data.main.temp_min)} °C ` 

    serach.value = " ";
    serach.focus();

}

let serach = document.getElementById("serach");
serach.addEventListener("keypress" ,setApp);







