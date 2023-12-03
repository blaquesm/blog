import PropTypes from 'prop-types';
import style from './Field.module.css';

const Field = ({ field, hendleClickCell, index }) => {
	return (
		<div className={style.Field} onClick={() => hendleClickCell(index)}>
			<h1>{field}</h1>
		</div>
	);
};

export default Field;

Field.propTypes = {
	field: PropTypes.string,
	hendleClickCell: PropTypes.func,
	index: PropTypes.number,
};
