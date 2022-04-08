import React, { useState, useEffect } from 'react';
import api from './services/api'

import './global.css';
import './App.css';
import './Main.css';
import './Sidebar.css';




function App() {
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

async function handleAddDev(e){
  e.preventDefault();

  const response = await api.post('/devs', {
    github_username,
    techs,
    latitude, 
    longitude 
  })

  console.log(response.data)
}



  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
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
      </aside>
      <main>
        <ul>
          <li className="dev-item">
              <header>
                <img src="https://avatars.githubusercontent.com/u/39663232?v=4" alt="Caio Cavalcanti"/>
                <div className="user-info">
                  <strong>Caio Cavalcanti</strong>
                  <span>ReactJS, ReactNative, Node.js</span>
                </div>
              </header>
              <p> Aluno da vida, apaixonado por tecnologias</p>
              <a href="#"> Acessar o perfil nom gitHub</a>
          </li>
          <li className="dev-item">
              <header>
                <img src="https://avatars.githubusercontent.com/u/39663232?v=4" alt="Caio Cavalcanti"/>
                <div className="user-info">
                  <strong>Caio Cavalcanti</strong>
                  <span>ReactJS, ReactNative, Node.js</span>
                </div>
              </header>
              <p> Aluno da vida, apaixonado por tecnologias</p>
              <a href="#"> Acessar o perfil nom gitHub</a>
          </li>
          <li className="dev-item">
              <header>
                <img src="https://avatars.githubusercontent.com/u/39663232?v=4" alt="Caio Cavalcanti"/>
                <div className="user-info">
                  <strong>Caio Cavalcanti</strong>
                  <span>ReactJS, ReactNative, Node.js</span>
                </div>
              </header>
              <p> Aluno da vida, apaixonado por tecnologias</p>
              <a href="#"> Acessar o perfil nom gitHub</a>
          </li>
          <li className="dev-item">
              <header>
                <img src="https://avatars.githubusercontent.com/u/39663232?v=4" alt="Caio Cavalcanti"/>
                <div className="user-info">
                  <strong>Caio Cavalcanti</strong>
                  <span>ReactJS, ReactNative, Node.js</span>
                </div>
              </header>
              <p> Aluno da vida, apaixonado por tecnologias</p>
              <a href="#"> Acessar o perfil nom gitHub</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
