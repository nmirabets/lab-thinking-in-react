import React, { Component } from "react";

class SearchBar extends Component {

	render() {

		return (
            <form >
                <input type="text" name="search" onChange={this.props.onChange} placeholder="search for a product..."></input>
            </form>
		)
	}
}

export default SearchBar;