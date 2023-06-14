<script>
	import AnswerContainer from "../components/AnswerContainer.svelte";
	import MemoryGrid from "../components/MemoryGrid.svelte";
    import QuestionContainer from "../components/QuestionContainer.svelte";
    import QuestionLabel from '../components/QuestionLabel.svelte';

    let dummyImage = 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-brazilian-jiu-jitsu-21abb64f-ddd9-4ce1-9e37-cfebc277285a.jpg?w=1500&h=900&crop=1'

    let images = [
    dummyImage,
    dummyImage,
    dummyImage,
    dummyImage,
    dummyImage,
    dummyImage,
    ];

</script>

<style>
    
</style>

<div>
    <QuestionContainer>
        <QuestionLabel label='armbar'></QuestionLabel>

    </QuestionContainer>

    <AnswerContainer >
        <MemoryGrid images={images} />
    </AnswerContainer>
</div>