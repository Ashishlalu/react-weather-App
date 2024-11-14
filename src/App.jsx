import { useState } from 'react'
import './App.css'
import { TextField } from '@mui/material'
import { weathercallApi } from '../apis'


function App() {
  const [Place,setPlace]=useState("Location")
  const [FeelsLike,setFeelsLike]=useState("Feels Like")
  const [Wind,setWind]=useState({speed:"wind"})
  const [Description,setDescription]=useState("Description")

  const getweather=async(location)=>{

    try{
   console.log(location);
      const response=await weathercallApi(location)
  setPlace(response.data.name)
  setFeelsLike(response.data.main.feels_like)  
  setWind(response.data.wind)
  setDescription(response.data.weather[0].description)

   
  }catch(err){
      console.log(err);
      
    }

  }


  
  return (
    <>
    <div style={{minHeight:"100vh",    backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/006/668/349/large_2x/rain-droplets-on-surface-of-car-glass-with-blurred-green-nature-background-through-window-glass-of-car-covered-by-raindrops-freshness-after-rain-wet-windscreen-shot-from-inside-car-selective-focus-free-photo.jpg')`,
 backgroundSize:"cover"}} className='d-flex justify-content-center align-items-center k'>
    <div style={{width:'600px'}} className='bg-light rounded p-5 bg-opacity-50 d-flex justify-content-center align-items-center flex-column'>
  <img src="https://static.vecteezy.com/system/resources/previews/012/066/505/original/sunny-and-rainy-day-weather-forecast-icon-meteorological-sign-3d-render-png.png" alt=""style={{height:"200px" ,width:"200px"}} className='rounded-5'/>
<h2>Today's Weather</h2>
<TextField id="standard-basic"  onChange={e=>getweather(e.target.value)} label="Enter your City" variant="standard" />
<div className='d-flex justify-content-around align-items-center w-100 m-3'>
  <h1><i className="fa-solid fa-location-dot"></i> <span className='fs-5 text-tertiary ms-2'>{Place}</span></h1>
    <h1><i className="fa-solid fa-temperature-low"></i><span className='fs-5 text-tertiary ms-2'>{FeelsLike}</span> </h1>
</div>
<div className='d-flex justify-content-around align-items-around w-100 m-3'>
    <h1><i className="fa-solid fa-wind"></i><span className='fs-5 text-tertiary ms-3'>{Wind.speed}</span> </h1>
    <h1><i className="fa-solid fa-cloud-sun"></i><span className='fs-5 text-tertiary ms-2'>{Description}</span> </h1>
</div>
</div>

      </div>
    </>
  )
}

export default App
