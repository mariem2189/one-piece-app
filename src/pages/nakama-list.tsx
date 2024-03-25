import React, { useState, useEffect } from 'react';
import Nakama from '../models/nakama';
import NAKAMAS from '../models/mock-nakama';
import NakamaCard from '../components/nakama-card';
  
const NakamaList = () => {
  const [nakamas, setNakama] = useState<Nakama[]>([]);
  
  useEffect(() => {
    setNakama(NAKAMAS);
  }, []);
  
  return (
    <div>
      <h1 className="center">One Piece</h1>
      <div className="container"> 
        <div className="row"> 
        {nakamas.map(nakama => (
          <NakamaCard key={nakama.id} nakama={nakama}/>
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default NakamaList;