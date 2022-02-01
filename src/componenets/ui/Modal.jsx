import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { endGame } from '../actions/gameActions';

export const Modal = ({win = true}) => {
	const dispatch = useDispatch()
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
						(win)
						? "¡Has ganado la partida!"
						: "Has perdido la partida :("
					}
				</p>
				<p className="modal__text">
					{
						(win)
						? 'Se nota que a ese CPU le ha costado mucho igualarte'
						: 'Esta vez se el CPU se puso las pilas, la proxima vez sera dierente.'
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