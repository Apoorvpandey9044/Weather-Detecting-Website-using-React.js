import React from 'react';
import { getCurrentweather } from './../api keys/open-weather.api keys';
import './search-bar.scss'

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    onInputChange(e) {
        this.props.inputChange(e);
    }
    onFormSubmit(e) {
     e.preventDefault();
     this.props.formSubmitted();
    }
    render() {
        const location = this.props.location ;
        const temp = 'this.state.temp';

         return (
             <div className="search-bar">
                 <form className="search-bar__form" onSubmit={(e) => this.onFormSubmit(e)}>
                 <button className="search-bar__button" type="submit">
                    Search
                </button>
                <input id="search" name="search" value={location} className="search-bar__input" onChange={(e) => this.onInputChange(e)}>

                </input>
            </form>
            
            </div>

        );
    }
}

export default SearchBar;