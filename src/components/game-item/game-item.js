import React from "react";
import {GameCover} from '../game-cover';
import {GameBuy} from '../game-buy';
import {GameGenre} from '../game-genre';
import {useHistory} from "react-router-dom"
import { useDispatch } from "react-redux";
import {setCurrentGame} from "../../redux/games/reducer"
import './game-item.css'


export const GameItem = ({game}) =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const handelClick = () => {
        dispatch(setCurrentGame(game));
        history.push(`/app/${game.title}`);
    }
    return(
        
        <div className="game-item" onClick={handelClick}>
            <GameCover image={game.image}/>
            <div className="game-item__details">
                <span className="game-item__title">{game.title}</span>
                <div className="game-item__genre">
                    {
                        game.genres.map(genre => <GameGenre genre={genre} key={genre}/>)
                    }
                </div>
                <div className="game-item__buy">
                    <GameBuy game={game}/>
                </div>
            </div>
        </div>
    )
}