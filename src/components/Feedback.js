import React, { Component } from 'react';
import './Feedback.css'


const feedbackMap = [
    { id: 'good', title: 'Good' },
    { id: 'neutral', title: 'Neutral' },
    { id: 'bad', title:'Bad' }
]

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleClick = (e) => {
        const { name } = e.target
        this.setState(prevState => ({
            [name]: prevState[name] + 1
        }))
    }

    // countTotalFeedback() {
    
    // }

    // countPositiveFeedbackPercentage() {

    // }

    
    render() {
        return (
        <>
            <div>
            <h2>Please leave feedback</h2>
            <ul className='button-list'>
                {feedbackMap.map(f => (
                    <li key={f.id}><button type='button' name={f.id} onClick={this.handleClick}>{f.title}</button></li>
                ))}
            </ul>
            <h2>Statistics</h2>
            <ul>
                <li>
                    <p>Good: {this.state.good}</p>
                </li>
                <li>
                    <p>Neutral: {this.state.neutral}</p>
                </li>
                <li>
                    <p>Bad: {this.state.bad}</p>
                </li>
                <li>
                    <p>Total: 0</p>
                </li>
                <li>
                    <p>Positive feedback: 0</p>
                </li>
            </ul>
            </div>
        </>
        )
    }
}

export default Feedback;