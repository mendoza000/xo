import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { selectToken } from '../actions/gameActions';

export const SelecToken = () => {
	const dispatch = useDispatch()
	const {game} = useSelector(state => state)

	const handleSelect = (e) => {
		dispatch( selectToken(e) )
	}
	return(
		<div className="xo__selec">
			<h3 className="xo__selec-title">
				Selecciona tu ficha
			</h3>

			<div className="xo__selec-btn-container">
				<button 
					onClick={ () => handleSelect(0)}
					className={`xo__selec-btn ${
						(game.token !== 0) 
						? "xo__selec-btn-not"
						: ""
					}`}
				>
					x
				</button>
				<button 
					onClick={ () => handleSelect(1)}
					className={`xo__selec-btn ${
						(game.token !== 1) 
						? "xo__selec-btn-not"
						: ""
					}`}
				>
					o
				</button>
			</div>

			<p>Con la ficha seleccionada es con la que jugaras</p>
		</div>
	)
}