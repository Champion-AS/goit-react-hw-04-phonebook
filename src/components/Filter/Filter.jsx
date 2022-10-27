import { Component } from 'react';
import PropTypes from 'prop-types';


export class Filter extends Component {
  render() {
    const { onChangeName, filter } = this.props;
    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onChangeName}
        />
      </>
    );
  }
}

Filter.propTypes = {
  onChangeName: PropTypes.func,
  filter: PropTypes.string,
};