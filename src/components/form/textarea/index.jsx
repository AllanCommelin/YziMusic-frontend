import PropTypes from 'prop-types'

const Textarea = ({label, name, placeholder, required, handleChange, value}) => (
    <div>
        <label htmlFor={name}>{label}</label>
        <textarea
            className="mt-2 bg-ym-black focus:outline-none focus:shadow-outline rounded-lg py-2 px-4 block w-full appearance-none leading-normal"
            name={name}
            id={name}
            placeholder={placeholder}
            required={required}
            onChange={handleChange}
            value={value}
        />
    </div>
)

Textarea.propTypes = {
    style: PropTypes.string,
    placeholder: PropTypes.string,
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    required: PropTypes.bool
}

Textarea.defaultProps = {
    required: false,
    placeholder: '',
}

export default Textarea;
