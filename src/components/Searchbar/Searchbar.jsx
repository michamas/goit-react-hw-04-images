import { Component } from 'react';

export class Searchbar extends Component {
  render() {
    const { onChange, onSubmit, value } = this.props;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={onSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
            onChange={onChange}
            value={value}
          />
        </form>
      </header>
    );
  }
}
