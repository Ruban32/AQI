function AQICard() {

const data={

city:"Chennai",

aqi:52,

status:"Good",

temperature:31,

humidity:64,

pm25:12,

pm10:25,

co:0.8

}

return(

<div className="bg-white rounded-xl shadow p-6 mt-8">

<h2 className="text-2xl font-bold">

{data.city}

</h2>

<div className="mt-4">

<p>

AQI :
<span className="text-green-600 font-bold">

{data.aqi}

</span>

</p>

<p>Status : {data.status}</p>

<p>Temperature : {data.temperature} °C</p>

<p>Humidity : {data.humidity}%</p>

<p>PM2.5 : {data.pm25}</p>

<p>PM10 : {data.pm10}</p>

<p>CO : {data.co}</p>

</div>

</div>

);

}

export default AQICard;
