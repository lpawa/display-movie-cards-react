import React from 'react';
import './App.css';

class Card extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        if(this.props.movie) {
            let movie = this.props.movie;
            const MOVIE_CARD_ID = "movie-card-" + movie.movie_id;
            return (
                <div className="card" id={MOVIE_CARD_ID} key={MOVIE_CARD_ID}>
                    <img className={"card-image"} src={movie.movie_poster} alt={movie.movie_name}/>
                    <div className="card-block">
                        <h4 className="card-title">{movie.movie_name}</h4>
                        <p className="card-text">{movie.movie_overview}</p>
                    </div>
                </div>
            );
        } else {
            return <div>Empty Card</div>
        }
    }
}

export default Card;