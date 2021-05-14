import axios from '../utils/axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import '../styles/MovieScreen.scss';
import Loader from '../components/Loader';
import ToolTip from '../components/ToolTip';

const MovieScreen = () => {
	const { id: movieId } = useParams();
	const [movie, setMovie] = useState(null);
	const [loading, setLoading] = useState(false);
	const [characters, setCharacters] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [species, setSpecies] = useState([]);
	const [starships, setStarships] = useState([]);
	const [vehicles, setVehicles] = useState([]);
	const history = useHistory();

	useEffect(() => {
		setLoading(() => true);
		async function fetchData() {
			try {
				const request = await axios.get(`/films/${movieId}`);
				console.log(request.data);
				setMovie(request.data);
				setLoading(() => false);
			} catch (error) {
				console.log(error);
				setLoading(() => false);
			}
		}
		fetchData();
	}, [movieId]);

	useEffect(() => {
		setLoading(() => true);
		const fetchUrlData = () => {
			try {
				const newData = async (url, type) => {
					const newUrl = url.split('/');
					const request = await axios.get(
						`/${newUrl[4]}/${newUrl[5]}`
					);
					console.log(request.data);
					if (type === 'characters')
						setCharacters((character) => [
							...character,
							request.data,
						]);
					if (type === 'planets')
						setPlanets((planet) => [...planet, request.data]);
					if (type === 'species')
						setSpecies((species) => [...species, request.data]);
					if (type === 'starships')
						setStarships((starship) => [...starship, request.data]);
					if (type === 'vehicles')
						setVehicles((vechile) => [...vechile, request.data]);
					setLoading(() => false);
				};
				if (characters.length === 0)
					movie?.characters.map((character) => {
						return newData(character, 'characters');
					});
				if (planets.length === 0)
					movie?.planets.map((planet) => {
						return newData(planet, 'planets');
					});
				if (species.length === 0)
					movie?.species.map((species) => {
						return newData(species, 'species');
					});
				if (starships.length === 0)
					movie?.starships.map((starship) => {
						return newData(starship, 'starships');
					});
				if (vehicles.length === 0)
					movie?.vehicles.map((vechile) => {
						return newData(vechile, 'vehicles');
					});
			} catch (error) {
				console.log(error);
				setLoading(() => false);
			}
		};

		fetchUrlData();

		// eslint-disable-next-line
	}, [movie]);

	return (
		<div className="MovieScreen">
			{loading ? (
				<Loader />
			) : (
				<div className="MovieScreen__container">
					<div className="MovieScreen__top">
						<i
							className="fas fa-arrow-circle-left MovieScreen__top__button"
							onClick={() => history.push('/')}></i>

						<p className="MovieScreen__top__episode">
							Episode {movie?.episode_id}:&nbsp;
							<span className="MovieScreen__top__title">
								{movie?.title}
							</span>
						</p>
					</div>

					<div className="MovieScreen__details">
						<p>
							Directed by {movie?.director} & Produced by
							{movie?.producer}.
						</p>
						<p>Released on {movie?.release_date}</p>
					</div>

					<div className="MovieScreen__description">
						<p>
							Overview <br /> <span>{movie?.opening_crawl}</span>
						</p>
					</div>

					<div className="MovieScreen__characters">
						<p>Characters &nbsp;</p>
						<div>
							{characters.map((character, index) => {
								return (
									<ToolTip
										key={index}
										name={character.name}
										birth_year={character.birth_year}
										gender={character.gender}
										eye_color={character.eye_color}
										hair_color={character.hair_color}
									/>
								);
							})}
						</div>
					</div>
					<div className="MovieScreen__characters">
						<p>Planets &nbsp;</p>
						<div>
							{planets.map((planet, index) => {
								return (
									<ToolTip
										key={index}
										name={planet.name}
										climate={planet.climate}
										gravity={planet.gravity}
										orbital_period={planet.orbital_period}
									/>
								);
							})}
						</div>
					</div>
					<div className="MovieScreen__characters">
						<p>Species &nbsp;</p>
						<div>
							{species.map((species, index) => {
								return (
									<ToolTip
										key={index}
										name={species.name}
										designation={species.designation}
										language={species.language}
										classification={species.classification}
									/>
								);
							})}
						</div>
					</div>
					<div className="MovieScreen__characters">
						<p>Starships &nbsp;</p>
						<div>
							{starships.map((starship, index) => {
								return (
									<ToolTip
										key={index}
										name={starship.name}
										cargo_capacity={starship.cargo_capacity}
										classes={starship.starship_class}
									/>
								);
							})}
						</div>
					</div>
					<div className="MovieScreen__characters">
						<p>Vehicles &nbsp;</p>
						<div>
							{vehicles.map((vehicle, index) => {
								return (
									<ToolTip
										key={index}
										name={vehicle.name}
										cargo_capacity={vehicle.cargo_capacity}
										classes={vehicle.vehicle_class}
									/>
								);
							})}
						</div>
					</div>
					<div className="MovieScreen__edited">
						<p>Last edited at {movie?.created.split('T')[0]}</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default MovieScreen;
