import React, { useEffect, useState } from 'react'

import Card from '../UI/Card/Card'
import classes from './Login.module.css'
import Button from '../UI/Button/Button'

const Login = (props) => {
	const [enteredEmail, setEnteredEmail] = useState('') // email жаза турган инпуттун value'син алган состояние
	const [emailIsValid, setEmailIsValid] = useState(false) //  email жаза турган инпуттун валидациясы менен иштей турган состояние
	const [enteredPassword, setEnteredPassword] = useState('')// password жаза турган инпуттун value'син алган состояние
	const [passwordIsValid, setPasswordIsValid] = useState(false)// password жаза турган инпуттун валидациясы менен иштей турган состояние
	const [formIsValid, setFormIsValid] = useState(false)// form'дун валидациясын текшерет инпуттардын валидациясы true болсо анда fоrmдун валидациясы true болот button иштейт башкача айтканда disabled иштейт  

	useEffect(() => {
	const setTime =	setTimeout(() => { //debaunce болуп жатат мисалы user жазат ал жазгандан кийин определенный убакытта иштейт  
			console.log('VALID')
			setFormIsValid(// ошол эле form'дун валидациясын текшерип жатат
				enteredPassword.trim().length > 6 && enteredEmail.includes('@'),
			)
		}, 1100)

		return ()=>{//бул жерде clean app function болуп жатат мисалы user инпутка жазып жатат жазган сайын setTime'ды тазалап турап,анан ал токтогондо гана setTimeOut'ка берилген убакытта бир жолу иштейт  
      console.log('clean up');
      clearTimeout(setTime)
    }
	}, [setFormIsValid, enteredPassword, enteredEmail])// бул зависимый массив useEffect'тин callback функциясы ушул массивке зависимый болуп калат 

	const emailChangeHandler = (event) => {//эмайл жаза турган инпуттун value'син алып берген функция ал onChange богон сайын иштеп турат
		setEnteredEmail(event.target.value)//ошол инпуттун валуесин стейтке салып алабыз
	}

	const passwordChangeHandler = (event) => {//password жаза турган инпуттун value'син алып берген функция ал onChange богон сайын иштеп турат
		setEnteredPassword(event.target.value)//ошол инпуттун валуесин стейтке салып алабыз
	}

	const validateEmailHandler = () => {//эмайл жаза турган инпуттун валидациясын текшерет onBlur деген события иштегенде
		setEmailIsValid(enteredEmail.includes('@'))//эгер "@" символ табылса true болот болбосо false бойдон тура берет
	}

	const validatePasswordHandler = () => {//пароль жаза турган инпуттун валидациясын текшерет onBlur деген события иштегенде
		setPasswordIsValid(enteredPassword.trim().length > 6)//)//эгер инпуттагы символдордун саны 6 дан ашса true болот болбосо false бойдон тура берет
	}

	const submitHandler = (event) => {// форма отправка кылгандагы event'тин функциясы
		event.preventDefault()// HTML'дин default'ный свойствасын иштетпей коет мисалы submit страницаны перезагрузка кылып жиберетбошону иштетпей коет
 		props.onLogin(enteredEmail, enteredPassword)// бул жерде поднятие состояние болот качан кнопка басылганда то есть инпутардын валидациялары туура болгондо  
	}

	return (
		<Card className={classes.login}> {/**UI компонент */}
			<form onSubmit={submitHandler}>{/**onSubmt форманы отправка кылганда иштейт */}
				<div
					className={`${classes.control} ${ 
						emailIsValid === false ? classes.invalid : '' //валидация false болсо invlid деген класс кошулуп инпут кызыл болуп калат эгер true болсо эч кандай класс кошулбайт кыскасы динамический стиль  
					}`}
				>
					<label htmlFor='email'>E-Mail</label>
					<input
						type='email'
						id='email'
						value={enteredEmail}
						onChange={emailChangeHandler}
						onBlur={validateEmailHandler}
					/>
				</div>
				<div
					className={`${classes.control} ${
						passwordIsValid === false ? classes.invalid : '' //валидация false болсо invlid деген класс кошулуп инпут кызыл болуп калат эгер true болсо эч кандай класс кошулбайт кыскасы динамический стиль  
					}`}
				>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						value={enteredPassword}
						onChange={passwordChangeHandler}
						onBlur={validatePasswordHandler}
					/>
				</div>
				<div className={classes.actions}>
					<Button
						type='submit'
						className={classes.btn}
						disabled={!formIsValid}
					>
						Login
					</Button>
				</div>
			</form>
		</Card>
	)
}

export default Login
