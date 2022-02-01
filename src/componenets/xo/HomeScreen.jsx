import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SelecToken } from './SelecToken';
import { selectGame } from '../actions/gameActions';

export const HomeScreen = ({history}) => {
	const dispatch = useDispatch()
	const navigate = useNavigate()

	const handleSelectGame = (game) => {
		dispatch( selectGame(game) )

		if(game === 0){
			navigate('/game') 
		}
	}

	return(
		<div className="xo__container animate__animated animate__fadeIn animate__faster">
			<h1>Ceros & Cruces</h1>

			<SelecToken />

			<button 
				className="xo__play xo__play-cpu"
				onClick={() => handleSelectGame(0)}
			>
				Nuevo juego (vs CPU)
			</button>
			<button 
				className="xo__play xo__play-pvp"
				onClick={() => handleSelectGame(1)}
			>
				Nuevo juego (vs Player)
			</button>
		</div>
	)
}