<script>
	//App level -
	import { dummyMoves } from '../dummy/dummyMoves';
	import { flip } from 'svelte/animate';

	import AnswerImageCard from '../components/AnswerImageCard.svelte';
	import QuestionContainer from '../components/QuestionContainer.svelte';
	import AnswerContainer from '../components/AnswerContainer.svelte';
	import Header from '../components/Header.svelte';
	import LabelPictures from '../games/LabelPictures.svelte';
	import PictureLabels from '../games/PictureLabels.svelte';
	import Memory from '../games/Memory.svelte';
</script>

<div class="App">
	<Header />
	<div class="app-container">
		<Memory moves={dummyMoves} />
		<!-- <LabelPictures/> -->
		<!-- <PictureLabels /> -->
	</div>
</div>

<style>
	.App {
		background-color: aqua;
	}
	.app-container {
		display: flex;
		justify-content: center;
		align-content: center;
		background-color: hotpink;
	}
</style>
