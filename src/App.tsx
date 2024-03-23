import React, { useEffect, useState } from 'react';
import Nakama from './models/nakama';
import NAKAMAS from './models/mock-nakama';

function App() {
  const [nakamas, setNakamas] = useState<Nakama[]>([]);
  
  useEffect(()=>{
    setNakamas(NAKAMAS)
  }, []);
  return (
    <div>
      <h1 className='center'>One Piece</h1>
      <div className='container'>
        <div className='row'>
          {nakamas.map(({id, name, picture, created}) => (
            <><div className='card horizontal'>
              <img src={picture} alt={name} />
            </div><div className='card-stacked'>
                <div className='card-content'>
                  <p>{name}</p>
                  <p><small>{created.toString()}</small></p>
                </div>
              </div></>
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;
