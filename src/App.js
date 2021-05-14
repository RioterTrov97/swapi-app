import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import MovieScreen from './screens/MovieScreen';

function App() {
	return (
		<>
			<Router>
				<Route exact path="/" component={HomeScreen} />
				<Route path="/movie/:id" component={MovieScreen} />
			</Router>
		</>
	);
}

export default App;

/* 
Challenge:

Consume the Star Wars API (SWAPI) using React, NextJS and other JS technologies you deem fit.

Acceptance criteria

• Home screen contains a list of films pulled from the SWAPI

• List should be searchable

• Films can be favourited, this state should be persisted using local storage

• Favourited films should appear at the top of the list

• Favourited films can be unfavourited

• Film list items can be clicked to show individual film page

• Film page should exist on it’s own URL

• Film page should show all the information pulled from the SWAPI endpoint for an individual film

• The list of characters should display a tooltip when a list item is hovered, containing their name, birth year, eye colour, gender, hair colour and any other information you deem necessary

• Film page should contain a back to home link

• Provide public GitHub repo to source code

• Use SCSS for styling

• Use Flexbox or CSS grid for layouts - avoid Bootstrap etc

• Host the finished project on Vercel or similar
*/
