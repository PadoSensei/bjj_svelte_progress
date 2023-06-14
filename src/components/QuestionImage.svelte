<script>
    export let questionImage;
</script>

<style>
    .question-image{
        height: 200px;
        width: auto;
    }

    .question-image-container {
        display: flex;
        justify-content: center;
        flex-direction: column;
    }

</style>

<div class='question-image-container'>
    <img class='question-image' src={questionImage}>
    <h2>select the move shown</h2>
</div>