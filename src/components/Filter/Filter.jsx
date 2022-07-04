import PropTypes from 'prop-types';

const Filter = ({ value, onChange }) => (
  <label>
    Find contacts by name
    <input
      type="text"
      name="filter"
      title="Enter search name"
      onChange={onChange}
      value={value}
    />
  </label>
);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
