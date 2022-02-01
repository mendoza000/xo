import React from 'react'
import { 
	BrowserRouter,
	Routes,
	Route
} from 'react-router-dom';

// Pantallas
import { HomeScreen } from '../xo/HomeScreen'
import { GameScreen } from '../xo/GameScreen';

export const AppRouter = () => {
	return(
		<BrowserRouter>
			<Routes>

				<Route 
					exact 
					path="/" 
					element={ <HomeScreen /> } 
				/>

				<Route 
					exact 
					path="/game" 
					element={ <GameScreen /> } 
				/>

			</Routes>
		</BrowserRouter>
	)
}