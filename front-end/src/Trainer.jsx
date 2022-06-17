import PropTypes from 'prop-types';
// const props = { name, age, specialism};
const Trainer = ({name, age, specialism}) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>Age: {age}</p>
            <p>Specialism: {specialism}</p>
        </div>
    )
}

export default Trainer;

Trainer.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    specialism: PropTypes.string.isRequired,
}