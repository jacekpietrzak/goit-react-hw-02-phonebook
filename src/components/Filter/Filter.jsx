import { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <div className={css.filter}>
        <label className={css.label} htmlFor="filter">
          Find contacts by name
        </label>
        <input
          className={css.input}
          id="filter"
          type="text"
          name="filter"
          onChange={this.props.handleFilter}
        />
      </div>
    );
  }
}

export default Filter;
