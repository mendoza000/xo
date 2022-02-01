import React, {useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { selectCasilla, nextTurn, cpuTurn, validateGame } from '../actions/gameActions';

export const GameCasilla = ({i}) => {
	const dispatch = useDispatch()
	const {game} = useSelector(state => state)
	const {current: tokenPlayer} = useRef(game.token)

	const handleSelectCasilla = () => {
		dispatch( selectCasilla(i, game.token) )
		dispatch( validateGame() )
		dispatch( nextTurn(game.token) )
		
		if(game.game.type === 0){
			setTimeout(function() {
				dispatch( cpuTurn(tokenPlayer, game.game.win) )
			}, 100);
			setTimeout(function() {
				dispatch( validateGame() )
			}, 150);
		}
	}
	return(
		<div 
			onClick={handleSelectCasilla}
			className={`game__casilla ${
				(game.game.tablero[i] === 0)
				? "game__casilla-x"
				: (game.game.tablero[i] === 1)
				? "game__casilla-o"
				: ""
			}`}
		>
			<span>
				{
					  (game.game.tablero[i] === 0)
					? "x"
					: (game.game.tablero[i] === 1)
					? "o"
					: ""
				}
			</span>
		</div>
	)
}