import React, {useRef} from 'react';
import styles from './Answer.module.css';
import {AnswerInterface} from "../../types/AnswerInterface";
import Img from "../Img/Img";
import Input from "../Input/Input";
import Checkbox from "../Checkbox/Checkbox";
import {addAnswer, removeAnswer, updateAnswerText} from "../../app/questionRedeucer";
import {useAppDispatch} from "../../app/hooks";
import TrashButton from "../TrashButton/TrashButton";
import {guid} from "../../app/questionAPI";

interface AnswerProps {
    answer?:AnswerInterface,
    isNew?:boolean;
}

const Answer:React.FC<AnswerProps> = ({ answer , isNew}) => {
    const emptyAnswer:AnswerInterface = {
       text: '',
       imageURL: '',
       id: guid()
    };
    const itemRef = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [newAnswer, setNewAnswer] = React.useState(isNew ? emptyAnswer : {...answer});
    const dispatch = useAppDispatch();

    const handleInputChange = (value:string) => {
        setNewAnswer(prevState => ({
            ...prevState,
            text: value
        }));

        if (!isNew) {
            dispatch(updateAnswerText({text: value, id: answer?.id}));
        }
    }

    const handleKeyDown = (event:any):void => {
        if (event.key === 'Enter') {

            if (newAnswer.text.trim() === '') {
                alert('Answer text is required.');
                return;
            }

            if (newAnswer.imageURL === '') {
                alert('Answer image is required.');
                return;
            }

            dispatch(addAnswer(newAnswer as AnswerInterface));

            setNewAnswer(({
                id: guid(),
                text: '',
                imageURL: ''
            }));
        }
    }

    const handleImageChanged = (imageUrl:string):void => {
        setNewAnswer(prevState => ({
            ...prevState,
            imageURL: imageUrl
        }))
    }

    const onTrash = () => {
        if (answer?.id) {
            dispatch(removeAnswer(answer.id));
        }
    }

    return (
        <div ref={itemRef} className={styles.Answer}>
            {!isNew &&
                <>
                    <div className={styles.CheckboxContainer}>
                        <Checkbox />
                    </div>

                    <div className={styles.TrashContainer}>
                        <TrashButton  handleOnClick={onTrash}/>
                    </div>
                </>
            }

            <div className={styles.ImgContainer}>
                <Img allowSelectImage={isNew === true} imageUrl={ isNew ? newAnswer.imageURL: answer?.imageURL } handleImageChange={handleImageChanged}/>
            </div>
            <div className={styles.InputContainer}>
                <Input initValue={ isNew ? newAnswer.text : answer?.text } handleKeyDown={handleKeyDown} handleInputChange={handleInputChange} />
            </div>
        </div>
    )
};

export default Answer;
