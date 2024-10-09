import React, { useState } from 'react'
import styles from "../styles/Main.module.css"
import { Link } from 'react-router-dom'

const FIELDS = {
  USERNAME: 'name',
  ROOM: 'room'
}

const Main = () => {
  const {USERNAME, ROOM} = FIELDS
  const [values, setValues] = useState({ [USERNAME]: '', [ROOM]: '' })
  const [isDisabled, setIsDisabled] = useState(true)
  const handleSubmit = (e) => {
    setIsDisabled(Object.values(values).some(v =>  !v))
    
    if(!isDisabled) e.preventDefault()
  }
  const handleChange = ( {target: {value, name}}) => {
    setValues({...values, [name]: value })

  }
  console.log(values)
  return (
    <div className={styles.wrapper}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Sign in</h2>
      </div>
      <form className={styles.form}>
        <div className={styles.formItem}>
          <input type='text' onChange={handleChange} className={styles.input} name={USERNAME} placeholder='username' value={values[USERNAME]} required autoComplete='off'  />
        </div>
        <div className={styles.formItem}>
          <input type='text' onChange={handleChange} className={styles.input} name={ROOM} placeholder='room' value={values[ROOM]} required autoComplete='off'  />
        </div>
        <Link className={styles.formItem} to={`/chat?name=${values[USERNAME]}&room=${values[ROOM]}`}>
          <button type='submit' onClick={handleSubmit} className={styles.button}>
            Join
          </button>
        </Link>
      </form>
    </div>
  )
}

export default Main