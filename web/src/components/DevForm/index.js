import React, { useState, useEffect} from 'react'

function DevForm ({ onSubmit }) {
    const [github_username, setGithub_username] = useState('');
    const [techs, setTechs] = useState('');
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    useEffect(()=>{
        navigator.geolocation.getCurrentPosition (
          (position)=>{
            const { latitude, longitude } = position.coords;
    
            setLatitude(latitude);
            setLongitude(longitude);
          },
          (error)=>{
            console.log(error);
          },{
            timeout: 30000,
          }
    
        )
      },[])

      async function handSubmit(e) {
          e.preventDefault();  

          await onSubmit({
            github_username,
            techs,
            latitude, 
            longitude 
          });

          setGithub_username('');
          setTechs('');
        
      }

    return(
        <form onSubmit={handSubmit}>
        <div className="input-block">
          <label htmlFor="github_username">Usuario do Github</label>
          <input 
            name="github_username" 
            id="username_github" 
            value={github_username}
            onChange={ e=> setGithub_username(e.target.value)}  
          />
        </div>

        <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input 
            name="techs" 
            id="techs" 
            value={techs}
            onChange={ e=> setTechs(e.target.value)}  
            />
        </div>

        <div className="input-group">
          <div className="input-block">
            <label htmlFor="latitude">latitude</label>
            <input 
              type="number" 
              name="latitude" 
              id="latitude" 
              value={latitude}
              onChange={ e=> setLatitude(e.target.value)}  
            />
          </div>
          <div className="input-block">
            <label htmlFor="longitude">longitude</label>
            <input 
              type="number" 
              name="longitude" 
              id="longitude"
              value={longitude}
              onChange={ e=> setLongitude(e.target.value)} 
            />
          </div>
        </div>

        <button type="submit">Salvar</button>
      </form>
    )
}

export default DevForm