import React, {ChangeEvent} from 'react';
import styles from './QuestionTitle.module.css';
import {questionText, updateQuestion} from "../../app/questionRedeucer";
import {useAppDispatch, useAppSelector} from "../../app/hooks";

const QuestionTitle = () => {
    const initText = useAppSelector(questionText);
    const dispatch = useAppDispatch();
    const [question, setQuestion] = React.useState(initText);

    const questionChange = (event:ChangeEvent<HTMLTextAreaElement>) => {
        const value:string = event.target.value;
        setQuestion(value);
        dispatch(updateQuestion(value));
    }

    return (
        <div className={styles.QuestionTitle}>
            <textarea className={styles.Textarea} onChange={questionChange} value={question} placeholder={'Write your question...'}/>
        </div>
    );
};

export default QuestionTitle;
