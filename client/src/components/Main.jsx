import React, { useState } from 'react'
import styles from "../styles/Main.module.css"
import { Link } from 'react-router-dom'
import { Button, TextInput } from '@mantine/core';

const FIELDS = {
  USERNAME: 'name',
  ROOM: 'room'
}

const Main = () => {
  const { USERNAME, ROOM } = FIELDS;
  const [values, setValues] = useState({ [USERNAME]: '', [ROOM]: '' });
  const [isDisabled, setIsDisabled] = useState(true);

  const handleChange = ({ target: { value, name } }) => {
    setValues(prevValues => ({
      ...prevValues,
      [name]: value
    }));
    setIsDisabled(Object.values({ ...values, [name]: value }).some(v => !v));
  };

  const handleSubmit = (e) => {
    if (isDisabled) {
      e.preventDefault();
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Join</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.formInputs}>
          <div className={styles.formItem}>
            <TextInput
              type='text'
              onChange={handleChange}
              className={styles.input}
              name={USERNAME}
              placeholder='Имя пользователя'
              value={values[USERNAME]}
              required
              autoComplete='off'
            />
          </div>
          <div className={styles.formItem}>
            <TextInput
              type='text'
              onChange={handleChange}
              className={styles.input}  
              name={ROOM}
              placeholder='Комната'
              value={values[ROOM]}
              required
              autoComplete='off'
            />
          </div>
        </div>
        
        <Link
          className={styles.formItem}
          to={`/chat?name=${values[USERNAME]}&room=${values[ROOM]}`}
        >
          <Button
            type='submit'
            onClick={handleSubmit}
            className={styles.button}
            disabled={isDisabled}
          >
            LFG!
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Main