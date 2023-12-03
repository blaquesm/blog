import PropTypes from 'prop-types';
import styles from './Information.module.css';
const InformationLayout = ({ isXNext, fields, hasWin, restartGame }) => {
	const hasEmpty = fields.some((cell) => cell === '');

	let playInfo;
	if (hasWin) {
		playInfo = `Победа игрока ${isXNext ? '0' : 'X'}`;
	} else if (!hasEmpty && !hasWin) {
		playInfo = `Ничья`;
	} else {
		playInfo = isXNext ? `Ход игрока X` : `Ход игрока 0`;
	}

	return (
		<div className={styles.Information}>
			<input className={styles.Input} value={`${playInfo}`} readOnly />
			{(hasWin || (!hasWin && !hasEmpty)) && (
				<button onClick={restartGame}>Restart</button>
			)}
		</div>
	);
};
export default InformationLayout;

InformationLayout.propTypes = {
	isXNext: PropTypes.bool,
	fields: PropTypes.array.isRequired,
	hasWin: PropTypes.bool,
};
