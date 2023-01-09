import { Component } from 'react';
import css from './Filter.module.css';

class Filter extends Component {
  render() {
    return (
      <input
        className={css.input}
        type="text"
        name="filter"
        onChange={this.props.handleFilter}
      />
    );
  }
}

export default Filter;
