import Header from "../components/Header";
import Title from "../components/Title";
import { TOPICS } from "../consts";
import './Topics.css'
import { v4 as uuidv4 } from 'uuid';
import React from "react";

import { quickSort } from "../util/algorithms";


export default function Topics() {

    const [list, setList] = React.useState([]);
    const [num, setNum] = React.useState(0);

    function handleChange(event) {
        // track input field's state
        setNum(event.target.value);
    }
    
    function handleAdd() {
        // add item
        const newList = list.concat({ num, id: uuidv4() });
    
        setList(newList);
    
        setNum(0);
    }

    return (
        <div class="topics-page">
            <Header />
            <div class="topics-container">
                <Title title={TOPICS.DATA_STRUCTURES}/>
                <div class="array-container">
                    <a href="https://www.interviewcake.com/concept/python/array?">Arrays</a>
                    <p>What are the array operations runtimes?</p>
                </div>

                <Title title={TOPICS.ALGORITHMS}/>
                <div class="algorithms-container">
                    <a href="https://www.interviewcake.com/concept/python/array?">Arrays</a>
                    <h3>Sorting</h3>
                    <p>Implement a quick sort on an array of numbers</p>
                    <p>User: Input up to 9 numbers from -10 to 10</p>
                    <AddNumber 
                        num={num} 
                        onChange={handleChange}
                        onAdd={handleAdd}    
                    />

                    <p>Unsorted List of numbers:</p>
                    <UnsortedList list={list} />

                    <p>Sorted Array of numbers here:</p>
                    <SortedList list={list}/>
                    <h3>Traversals</h3>
                    <p>Implement a breadth-first traversal on an set of DOM elements</p>

                </div>
            </div>
        </div>
    )
}

const AddNumber = ({ num, onChange, onAdd }) => (
    <div>
        <input type="number" value={num} onChange={onChange}/>
        <button type="button" onClick={onAdd}>Add</button>
    </div>

);

const UnsortedList = ({ list }) => (
    <div>
        {list.map((item) => (
            <span key={item.id}>{item.num}   </span>
        ))}
    </div>
);

function SortedList ({ list }) {
    const numList = [];
    list.forEach((item) => {
        numList.push(parseInt(item.num));
    });
    const sortedList = numList.length > 1 ? quickSort(numList, 0, numList.length-1) : []; 
    return (
        <div>
            {sortedList.map((item) => (
                <span>{item}   </span>
            ))}
        </div>
    )

}