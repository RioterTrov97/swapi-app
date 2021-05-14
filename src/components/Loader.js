import React from 'react';
import '../styles/Loader.scss';

const Loader = () => {
	return (
		<div className="lds-hourglass">
			<div className="lds-hourglass__text">
				<p>Please wait while we fetch awesome details for you... </p>
			</div>
		</div>
	);
};

export default Loader;
