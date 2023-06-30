<script>
	// the chessboard display grid for cards
	import store from '../store/memoryGame';
	import AnswerImageCard from './AnswerImageCard.svelte';

	import { STATUS } from '../store/status_enum';

	export let cards = [];
	let lastCard = null;

	// fired on click
	function onFlipped(e) {
		console.log('matching...');
		const card = e.detail;

		// starts game if game not already in play
		if ($store.status === STATUS.READY) {
			store.updateStatus(STATUS.PLAYING);
		}

		// checks if a lastcard value has been stored
		// if not, stores card
		if (!lastCard) {
			console.log('card is card');
			lastCard = card;

			return;
		}

		// if cards match
		// the entities are not the same but their names match
		if (lastCard !== card && lastCard.moveName === card.moveName) {
			// reset last card
			lastCard = null;
			// decrease avail matches
			// exit function and report one less match avail
			store.match();
			return $store.leftMatched || store.updateStatus(STATUS.PASS);
		}

		// if no match, flip back
		const oldCard = lastCard;
		lastCard = null;

		// cards to flip
		console.log(oldCard, card);

		setTimeout(() => {
			store.flipCards([oldCard, card]);
		}, 1000);
	}
</script>

<div class="memory-board">
	{#each cards as card, moveID}
		<AnswerImageCard key={moveID} option={card} on:flipped={onFlipped} />
	{/each}
</div>

<style>
	.memory-board {
		margin-top: 20px;
		width: 100%;
		background-color: #fff;
		height: 530px;
		border-radius: 4px;
		padding: 10px 5px;
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: center;
		align-content: space-around;
	}

	.container:nth-child(4n) {
		margin-right: 0px;
	}

	@media screen and (max-width: 450px) {
		.memory-board {
			height: 480px;
			padding: 10px 0px;
		}
	}
	@media screen and (max-width: 370px) {
		.memory-board {
			height: 450px;
		}
	}
</style>
