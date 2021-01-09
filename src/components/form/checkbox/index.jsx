import { Fragment } from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({ label, values, handleChange }) => (
  <div>
    <p>{label}</p>
      <div className="flex flex-col">
          {values.map(({ label, name, id, isChecked }) => (
              <div key={id}>
                  <input type="checkbox" name={name} id={id} onChange={handleChange} className="rounded mr-2 form-checkbox h-5 w-5 text-main" value={id} checked={isChecked}/>
                  <label htmlFor={id}>{label}</label>
              </div>
          ))}
      </div>
  </div>
)

Checkbox.propTypes = {
  handleChange: PropTypes.func.isRequired,
  values: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isChecked: PropTypes.bool.isRequired,
    })
  )
}

export default Checkbox;
