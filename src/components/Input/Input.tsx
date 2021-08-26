import React, {ChangeEvent, useEffect} from 'react';
import styles from './Input.module.css';

interface InputProps {
  initValue?:string,
  handleKeyDown(event:React.KeyboardEvent<HTMLInputElement>):void
  handleInputChange(value:string):void
}

const Input:React.FC<InputProps> = ({ initValue = '', handleKeyDown, handleInputChange }) => {
  const [value, setValue] = React.useState(initValue);

  const answerChange = (event:ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event.target.value)
    setValue(event.target.value);
  }

  useEffect(() => {
    if (initValue === '' && value !== '') {
      setValue('');
    }
  }, [initValue, setValue]);

  return (
      <input className={styles.Input} onInput={answerChange} onKeyDown={handleKeyDown} value={value} placeholder={'Write here'} type={'text'}>

      </input>
  );
};

export default Input;
