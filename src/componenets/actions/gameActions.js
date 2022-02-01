import {types} from '../types/types'

export const selectToken = (token) => ({
	type: types.selectToken,
	payload: {token}
})

export const selectGame = (game) => ({
	type: types.selectGame,
	payload: {game}
})

export const selectCasilla = (index, token) => ({
	type: types.selectCasilla,
	payload: {index, token}
})

export const nextTurn = (token) => ({
	type: types.nextTurn,
	payload: {token}
})

export const restartGame = (tokenPlayer) => ({
	type: types.restartGame,
	payload: {token: tokenPlayer}
})

export const cpuTurn = (tokenPlayer) => ({
	type: types.cpuTurn,
	payload: {token: tokenPlayer}
})

export const validateGame = () => ({type: types.validateGame})

export const endGame = () => ({type: types.endGame})