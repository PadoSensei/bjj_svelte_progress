<script>
	import store from '../store/memoryGame';

	import AnswerContainer from '../components/AnswerContainer.svelte';
	import MemoryGrid from '../components/MemoryGrid.svelte';
	import QuestionContainer from '../components/QuestionContainer.svelte';
	import QuestionLabel from '../components/QuestionLabel.svelte';

	import { STATUS } from '../store/status_enum.js';
	import { shuffle } from '../helpers/shuffle.js';

	export let moves = [];

	let show = 'text';
	let settings = {
		show: 'image',
		gameSize: moves.length
	};

	function restartGame() {
        console.log('trigger restart...')
		return {
			leftMatched: settings.gameSize,
			//   highestSpeed: localStorage.getItem("highestSpeed") || "",
			status: STATUS.READY,
			cards: shuffle(moves.slice(0, settings.gameSize)).map((item) => {
				item.flipped = false;
				item.show = settings.show;
				return item;
			}),
			elapsedMs: 0,
			displayEnd: false,
			displayNameInput: false,
			displaySettings: false,
			ranks: []
			//   userName: localStorage.getItem("userName") || ""
		};
	}

	function triggerRestart() {
		store.reset(restartGame());
	}

	function settingsClose(event) {
		settings = event.detail;
		triggerRestart();
	}

	function getMemoryCards(moves) {
		// Filter for active:true and moveMastery less than 10
		const filteredMoves = moves.filter((move) => move.active && move.moveMastery < 10);

		// Randomize the order of moves
		const randomizedMoves = filteredMoves.sort(() => Math.random() - 0.5);

		// Return the first four moves
		const firstFourMoves = randomizedMoves.slice(0, 4);
		const duplicatedMoves = firstFourMoves.concat(firstFourMoves);

		// Randomize the order of the duplicated array
		const randomizedDuplicatedMoves = duplicatedMoves.sort(() => Math.random() - 0.5);

		return randomizedDuplicatedMoves;
	}
    
	const gameMoves = getMemoryCards(moves);
	console.log(gameMoves);
	triggerRestart();
	console.log($store.cards);
</script>

<QuestionContainer>
	<QuestionLabel label="memory" />
	<p>Score: 0</p>
</QuestionContainer>

<AnswerContainer>
	<MemoryGrid cards={$store.cards} />
</AnswerContainer>
