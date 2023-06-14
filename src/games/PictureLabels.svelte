<script>
	import AnswerContainer from "../components/AnswerContainer.svelte";
	import LabelsGrid from "../components/LabelsGrid.svelte";
	import MemoryGrid from "../components/MemoryGrid.svelte";
    import QuestionContainer from "../components/QuestionContainer.svelte";
	import QuestionImage from "../components/QuestionImage.svelte";
    import QuestionLabel from '../components/QuestionLabel.svelte';

    let dummyImage = 'https://www.rollingstone.com/wp-content/uploads/2018/06/rs-brazilian-jiu-jitsu-21abb64f-ddd9-4ce1-9e37-cfebc277285a.jpg?w=1500&h=900&crop=1'

    

</script>

<style>
    
</style>

<div>
    <QuestionContainer>
        <QuestionImage questionImage={dummyImage}></QuestionImage>
    </QuestionContainer>

    <AnswerContainer >
        <LabelsGrid moveAnswer='armbar'/>
    </AnswerContainer>
</div>