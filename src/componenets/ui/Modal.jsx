import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { endGame } from '../actions/gameActions';

export const Modal = ({win = true}) => {
	const dispatch = useDispatch()
	const {game} = useSelector(state => state)
	const navigate = useNavigate()

	const handleEndGame = () => {
		navigate('/')
		dispatch( endGame() )
	}

	return(
		<div className="modal__container">
			<div className="modal__card">
				<p className="modal__title">
					{
						(win && game.game.type === 0)
						? "¡Has ganado la partida!"
						: (!win && game.game.type === 0)
						? "Has perdido la partida :("
						: ""
					}
					{
						(win === 0 && game.game.type === 1)
						? "¡El jugador X ha ganado la partida!"
						: (win === 1 && game.game.type === 1)
						? "¡El jugador O ha ganado la partida!"
						: ""
					}
				</p>
				<p className="modal__text">
					{
						(win && game.game.type === 0)
						? 'Se nota que a ese CPU le ha costado mucho igualarte'
						: (!win && game.game.type === 0)
						? 'Esta vez se el CPU se puso las pilas, la proxima vez sera dierente.'
						: ""
					}
					{
						(win === 0 && game.game.type === 1)
						? "Se nota que a tu contrincante le ha costado mucho igualarte"
						: (win === 1 && game.game.type === 1)
						? "Se nota que a tu contrincante le ha costado mucho igualarte"
						: ""
					}
				</p>

				<button 
					className="modal__btn" 
					onClick={handleEndGame}>
					Salir
				</button>
			</div>
		</div>
	)
}