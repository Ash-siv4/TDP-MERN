import PropTypes from 'prop-types';
// const props = { name, age, specialism};
const Trainer = ({id, name, age, specialism}) => {
    return (
        <div>
            <h3>ID: {id}</h3>
            <p>Name: {name}</p>
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