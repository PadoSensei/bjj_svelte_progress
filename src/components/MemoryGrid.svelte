<script>
	// the chessboard display grid for cards
	import store from '../store/memoryGame';
	import AnswerImageCard from './AnswerImageCard.svelte';

	import { STATUS } from '../store/status_enum';

	export let cards = [];
	let lastCard = null;

	function onFlipped(e) {
		console.log('matching...')
		const card = e.detail;
		console.log(e.detail)
		if ($store.status === STATUS.READY) {
			store.updateStatus(STATUS.PLAYING);
		}

		if (!lastCard) {
			console.log('card is card')
			lastCard = card;
			return;
		}

		if (lastCard !== card && lastCard.moveName === card.moveName) {
			console.log('firing matcher')
			console.log(card)
			console.log(lastCard)
			lastCard = null;
			store.match();
			return $store.leftMatched || store.updateStatus(STATUS.PASS);
		}

		const oldCard = lastCard;
		lastCard = null;

		console.log(oldCard, card)

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
