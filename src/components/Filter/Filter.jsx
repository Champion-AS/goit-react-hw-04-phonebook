import PropTypes from 'prop-types';


export const Filter = ({ onChangeName, filter }) => {
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


Filter.propTypes = {
  onChangeName: PropTypes.func,
  filter: PropTypes.string,
};