<script>
	import AnswerLabel from './AnswerLabel.svelte';
	export let moveAnswer;
	let answerArray = ['ans1', 'ans2', 'ans3', 'ans4', 'ans5'];

	answerArray.push(moveAnswer);
</script>

<div class="grid">
	{#each answerArray as answer}
		<AnswerLabel label={answer} />
	{/each}
</div>
