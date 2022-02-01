import {types} from '../types/types'

const initialState = {
	token: 0,
	game: {
		init: false,
		type: null,
		win: 3,
		tablero: [ 
			3, 3, 3,
			3, 3, 3,
			3, 3, 3,
		]
	}
}

export const gameReducer = (state=initialState, action) => {

	switch(action.type){
		case types.selectToken:
			return {
				...state,
				token: action.payload.token
			}

		case types.selectGame:
			return{
				...state,
				game: {
					...state.game,
					init: true,
					type: action.payload.game,
					win: 3,
					tablero: [ 
						3, 3, 3,
						3, 3, 3,
						3, 3, 3,
					]	
				}
			}

		case types.selectCasilla:
			const arr = state.game.tablero
			arr[action.payload.index] = action.payload.token 
			return{
				...state,
				game:{
					...state.game,
					tablero: arr
				}
			}

		case types.nextTurn:
			return{
				...state,
				token: (action.payload.token === 1)
					? 0
					: 1
			}

		case types.cpuTurn:

			if (state.game.win !== 3) {
				return{
					...state
				}
			}
			const cpuToken = (action.payload.token === 1)
				?	0
				: 1

			let arr2 = state.game.tablero
			let turnoListo = false
			do{
				const casilla = Math.floor(Math.random() * (9 - 1)) + 1;
				if (arr2[casilla] === 1 || arr2[casilla] === 0) {
					continue
				}

				arr2[casilla] = cpuToken
				turnoListo = true
			}while(!turnoListo)
			

			return{
				...state,
				token: action.payload.token,
				game: {
					...state.game,
					tablero: arr2
				}
			}

		case types.restartGame:
			return {
				...state,
				token: action.payload.token,
				game: {
					...state.game,
					tablero: [ 
						3, 3, 3,
						3, 3, 3,
						3, 3, 3,
					]
				}
			}

		case types.validateGame:
			let win = 3
			if (state.game.tablero[0] === 1 && state.game.tablero[1] === 1 && state.game.tablero[2] === 1) {
				win = 1
			} else if (state.game.tablero[0] === 0 && state.game.tablero[1] === 0 && state.game.tablero[2] === 0) {
				win = 0
			} else if (state.game.tablero[3] === 1 && state.game.tablero[4] === 1 && state.game.tablero[5] === 1) {
				win = 1
			} else if (state.game.tablero[3] === 0 && state.game.tablero[4] === 0 && state.game.tablero[5] === 0) {
				win = 0
			} else if (state.game.tablero[6] === 1 && state.game.tablero[7] === 1 && state.game.tablero[8] === 1) {
				win = 1
			} else if (state.game.tablero[6] === 0 && state.game.tablero[7] === 0 && state.game.tablero[8] === 0) {
				win = 0
			} else if (state.game.tablero[0] === 1 && state.game.tablero[3] === 1 && state.game.tablero[6] === 1) {
				win = 1
			} else if (state.game.tablero[0] === 0 && state.game.tablero[3] === 0 && state.game.tablero[6] === 0) {
				win = 0
			} else if (state.game.tablero[1] === 1 && state.game.tablero[4] === 1 && state.game.tablero[7] === 1) {
				win = 1
			} else if (state.game.tablero[1] === 0 && state.game.tablero[4] === 0 && state.game.tablero[7] === 0) {
				win = 0
			} else if (state.game.tablero[2] === 1 && state.game.tablero[5] === 1 && state.game.tablero[8] === 1) {
				win = 1
			} else if (state.game.tablero[2] === 0 && state.game.tablero[5] === 0 && state.game.tablero[8] === 0) {
				win = 0
			} else if (state.game.tablero[0] === 1 && state.game.tablero[4] === 1 && state.game.tablero[8] === 1) {
				win = 1
			} else if (state.game.tablero[0] === 0 && state.game.tablero[4] === 0 && state.game.tablero[8] === 0) {
				win = 0
			}	else if (state.game.tablero[2] === 1 && state.game.tablero[4] === 1 && state.game.tablero[6] === 1) {
				win = 1
			} else if (state.game.tablero[2] === 0 && state.game.tablero[4] === 0 && state.game.tablero[6] === 0) {
				win = 0
			}
			return {
				...state,
				game:{
					...state.game,
					win
				}
			}

		case types.endGame:
			return initialState
		default:
			return state;
	}
}

