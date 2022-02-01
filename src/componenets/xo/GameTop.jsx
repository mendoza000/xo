import React, {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { restartGame } from '../actions/gameActions';

export const GameTop = () => {
	const dispatch = useDispatch()
	const {game} = useSelector(state => state)
	const {current: tokenPlayer} = useRef(game.token)

	const handleRestart = () => {
		dispatch( restartGame(tokenPlayer) )
	}

	return(
		<div className="game__top">
			<p>
				<span>x</span>
				<span>o</span>
			</p>

			<span className="game__top-turn">
				Turno <span>{
					(game.token === 0) 
					? 'X'
					: 'O'
				}</span>
			</span>

			<button
				onClick={handleRestart}
			>
				<box-icon name='revision'></box-icon>
			</button>
		</div>
	)
}