
let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    let inp = document.getElementById("search");
    let xhr = new XMLHttpRequest();

    xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${inp.value}&appid=cf2c348512586c45e376b52d471c845d&units=imperial`,true);

    xhr.onload = ()=>{
        let data = JSON.parse(xhr.response);
        console.log(data);
        
        let tempo = document.getElementById("tempChild1");
        let feels = document.getElementById("feellikeChild1");
        let pres = document.getElementById("PressureChild1");
        let maxtem = document.getElementById("tempmaxChild1");
        let mintem = document.getElementById("tempminChild1");
        let hum = document.getElementById("humidityChild1");
        let vis = document.getElementById("visibleChild1");
        let city = document.getElementById("weather");

        

        let Temp = data.main.temp;
        tempo.innerHTML=`${Temp}&#176;C`

        let Pressure = data.main.pressure;
        pres.innerHTML=`${Pressure}&#176;C`

        let feel = data.main.feels_like;
        feels.innerHTML=`${feel}&#176;C`;

        let humid = data.main.humidity;
        hum.innerHTML=`${humid}&#176;C`

        let tempmax = data.main.temp_max;
        maxtem.innerHTML=`${tempmax}&#176;C`;

        let tempmin = data.main.temp_min;
        mintem.innerHTML=`${tempmin}&#176;C`;

        let visi = data.visibility;
        vis.innerHTML = visi;

        city.innerHTML=`Weather of ${inp.value}`;

        inp.value = "";
        
    }

    xhr.send();
})