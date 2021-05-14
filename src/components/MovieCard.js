import React from 'react';
import { useHistory } from 'react-router';
import '../styles/MovieCard.scss';

const MovieCard = ({
	title,
	episodeId,
	movieId,
	favHandler,
	favourite,
	description,
	director,
	releaseDate,
}) => {
	const history = useHistory();
	return (
		<div
			className="MovieCard"
			onClick={(e) => {
				e.stopPropagation();
				history.push(`/movie/${movieId}`);
			}}>
			<p className="MovieCard__episode">
				Episode {episodeId} <span>({releaseDate.split('-')[0]})</span>
			</p>
			<p className="MovieCard__title">{title}</p>
			<p className="MovieCard__description">{description}</p>
			<p className="MovieCard__director">
				Directed by <span>{director}</span>
			</p>
			<div className="MovieCard__icons">
				<i
					className={`${favourite ? 'fas' : 'far'} fa-heart`}
					onClick={(e) => {
						e.stopPropagation();
						favHandler(movieId);
					}}></i>
			</div>
		</div>
	);
};

export default MovieCard;
