import React, { FC } from "react";
import Nakama from "../models/nakama";
import './nakama-card.css'

type Props = {
    nakama : Nakama
};

const NakamaCard: FC<Props> = ({nakama}) => {

    return (
        <div className="col s6 m4">
      <div className="card horizontal">
        <div className="card-image"> 
          <img src={nakama.picture} alt={nakama.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{nakama.name}</p>
            <p><small>{nakama.created.toString()}</small></p>
          </div>
        </div>
      </div> 
    </div>
    )
}

export default NakamaCard;