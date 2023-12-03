import React from 'react';
import { useState } from 'react';
import styles from './App.module.css';
import Fields from './Fields/Fields';
import InformationLayout from './Information/Information';

function App() {
	const [fields, setFields] = useState(Array(9).fill(''));
	const [isXNext, setIsXNext] = useState(true);

	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const hasWin = WIN_PATTERNS.some(
		(pattern) =>
			pattern.every((cur) => fields[cur] === 'X') ||
			pattern.every((cur) => fields[cur] === '0'),
	);
	const hendleClickCell = (index) => {
		if (hasWin) {
			return;
		}

		const copyArray = fields.slice();

		if (copyArray[index] === '') {
			if (isXNext) {
				copyArray[index] = 'X';
			} else {
				copyArray[index] = '0';
			}

			setIsXNext(!isXNext);
		}
		setFields(copyArray);
	};

	const restartGame = () => {
		setFields(Array(9).fill(''));
		setIsXNext(true);
	};
	return (
		<div className={styles.App}>
			<InformationLayout
				isXNext={isXNext}
				fields={fields}
				hasWin={hasWin}
				restartGame={restartGame}
			/>
			<Fields fields={fields} hendleClickCell={hendleClickCell} />
		</div>
	);
}

export default App;
