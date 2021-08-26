import React from 'react';
import styles from './Question.module.css';
import QuestionTitle from "../QuestionTitle/QuestionTitle";
import {AnswerInterface} from "../../types/AnswerInterface";
import Answer from "../Answer/Answer";
import {useAppSelector} from "../../app/hooks";
import {answersData} from "../../app/questionRedeucer";

const Question = () => {
    const answers = useAppSelector(answersData);

    return (
        <div className={styles.Question}>

            <QuestionTitle />
            <div className={styles.Answers}>
                {answers.map((answer:AnswerInterface) => {
                    return <Answer key={answer.id} answer={answer} />
                })}

                <Answer isNew={true} />
            </div>
        </div>
    );
};

export default Question;
