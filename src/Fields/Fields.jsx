import PropTypes from 'prop-types';
import Field from '../Field/Field';
import styles from './Fields.module.css';

const Fields = ({ fields, hendleClickCell }) => {
	return (
		<div className={styles.Fields}>
			{fields.map((field, index) => (
				<Field
					key={index}
					index={index}
					field={field}
					hendleClickCell={hendleClickCell}
				/>
			))}
		</div>
	);
};

export default Fields;

Fields.propTypes = {
	fields: PropTypes.array.isRequired,
	hendleClickCell: PropTypes.func,
};
