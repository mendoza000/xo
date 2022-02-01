import React, {useEffect, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { GameTop } from './GameTop';
import { GameCasilla } from './GameCasilla';
import { endGame } from '../actions/gameActions';
import { Modal } from '../ui/Modal';

export const GameScreen = () => {
	const dispatch = useDispatch()
	const {game} = useSelector(state => state)
	const navigate = useNavigate()
	const {current: tokenPlayer} = useRef(game.token)
	const handleEndGame = () => {
		navigate('/')
		dispatch( endGame() )
	}

	useEffect(() => {
		if(game.game.type !== 0){
			navigate('/')
		}
	}, [])

	return(
		<div className="game__container animate__animated animate__fadeIn animate__faster">

			<GameTop />

			<div className="game__tablero">
				{
					game.game.tablero.map((e, index) => {
						return (
							<GameCasilla 
								key={index}
								i={index}
							/>
						)
					})
				}
			</div>

			<button 
				className="game__btn"
				onClick={handleEndGame}
			>
				Salir
			</button>

			{
				(game.game.win !== 3) && <Modal win={
					(game.game.win === tokenPlayer) ? true : false
				}/>
			}
		</div>
	)
}