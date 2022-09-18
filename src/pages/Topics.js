import Header from "../components/Header";
import Title from "../components/Title";
import { TOPICS } from "../consts";
import './Topics.css'

function Topics() {
    return (
        <div class="topics-page">
            <Header />

            <div class="topics-container">
                <Title title={TOPICS.DATA_STRUCTURES}/>
                <div class="array-container">
                    <a href="https://www.interviewcake.com/concept/python/array?">Arrays</a>
                    <p>What are the array operations runtimes?</p>
                </div>
            </div>
        </div>
    )
}

export default Topics;