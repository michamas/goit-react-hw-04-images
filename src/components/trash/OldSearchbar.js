import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    keyword: '',
  };

  handleChange = event => {
    event.preventDefault();
    this.setState({
      keyword: event.target.value,
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log('🚀 ~ form:', form);
    const keyword = this.state.keyword;
    this.props.onSubmit(keyword);
    form.reset();
  };
  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images"
            onChange={this.handleChange}
            value={this.state.keyword}
          />
        </form>
      </header>
    );
  }
}
