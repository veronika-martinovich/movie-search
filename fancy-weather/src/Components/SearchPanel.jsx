import React from "react";

export class SearchPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      searchQuery: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="search-panel">
        <form className="search-panel__form">
          <input
            type="text"
            name="searchQuery"
            className="search-panel__input"
            placeholder="Search city or ZIP"
            value={this.state.searchQuery}
            onChange={this.handleChange}
          />
          <button type="submit" className="search-panel__button">
            Search
          </button>
        </form>
      </div>
    );
  }
}
