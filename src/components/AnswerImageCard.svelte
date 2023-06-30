<script>
	import store from '../store/memoryGame';

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

	let jujitsuImage =
		'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpKT_hRA68GQMJFRS-vrj3AMNc9bpmANp29w&usqp=CAU';

	export let key;
	export let option = {
		flipped: false,
		name: '',
		img: '',
		show: 'img'
	};

	function flip() {
		console.log('flipping card...');
		if (option.flipped) {
			return;
		}
		store.flipCard(option);
		dispatch('flipped', option);
	}

	$: flipped = option.flipped ? 'flipped' : '';
	console.log(option);
</script>

<div class="container" on:click={flip}>
	<div class="card {flipped}">
		{#if option.show == 'image'}
			<img class="front" src={option.moveImage} />
			<div class="front">{option.moveName}</div>
		{/if}
		{#if option.show == 'text'}
			<p class="front">{option.name}</p>
		{/if}
		<img class="back" src={jujitsuImage} />
	</div>
</div>

<style>
	.container {
		width: 100px;
		height: 121px;
		margin-right: 3px;
		cursor: pointer;
		position: relative;
		perspective: 800px;
	}

	.card {
		width: 100%;
		height: 100%;
		transition: transform 1s;
		transform-style: preserve-3d;
		display: flex;
		flex-direction: column;
	}

	.card.flipped {
		transform: rotateY(180deg);
	}

	.card img,
	.card p {
		display: block;
		height: 100%;
		width: 100%;
		position: absolute;
		backface-visibility: hidden;
		-webkit-backface-visibility: hidden;
	}

	.card p {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.card .back {
		background: white;
		transform: rotateY(0deg);
	}

	.card .front {
		background: white;
		transform: rotateY(180deg);
	}

	@media screen and (max-width: 450px) {
		.container {
			width: 92px;
			height: 111px;
			margin-right: 1px;
		}
	}

	@media screen and (max-width: 380px) {
		.container {
			width: 85px;
			height: 102px;
			margin-right: 1px;
		}
	}

	@media screen and (max-width: 360px) {
		.container {
			width: 70px;
			height: 84px;
			margin-right: 1px;
		}
	}
</style>
