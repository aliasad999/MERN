import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import customSpacing from "../spacing/customSpacing";
function App() {
	const { m, p, y } = customSpacing();
	const history = useHistory()

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3000/api/register',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				firstName,
				lastName,
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			history.push('/login')
		}
	}

	return (
		<div>
			<Box className={`${m("x", 500)} ${p("x", 50)} ${y("x",500)}`}>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<TextField label="First Name" id="margin-normal" name="firstName" value={firstName}
            		helperText="Enter your first name"
					style={{ background: "white" }}
        			className={`${m("x", 20)} ${p("x", 2)}`}
            		onChange={(e) => setFirstName(e.target.value)} />
				<br />
				<TextField label="Last Name" id="margin-normal" name="lastName" value={lastName}
            		helperText="Enter your first name"
					style={{ background: "white" }}
        			className={`${m("x", 20)} ${p("x", 2)}`}
            		onChange={(e) => setLastName(e.target.value)} />
				<br />
				<TextField label="Email" id="margin-normal" name="Email" value={email}
            		helperText="Enter your Email address eg name@gmail.com"
					style={{ background: "white" }}
        			className={`${m("x", 20)} ${p("x", 2)}`}
            		onChange={(e) => setEmail(e.target.value)}/>
				<br />
					<TextField
            		label="Password" id="margin-normal" type="password" name="password" value={password} style={{ background: "white" }}
        			className={`${m("x", 20)} ${p("x", 2)}`} helperText="your password" onChange={(e) => setPassword(e.target.value)}/>
				<br />
					<Button type="submit" variant="contained"  color="primary" className={`${m("x", 20)} ${p("x", 2)}`}
            			 >Sign up</Button>
					<Button type="" variant="contained"  color="secondary" className={`${m("x", 2)} ${p("x", 2)}`}
            			 >Cancel</Button>
				
			</form>
			</Box>
		</div>
	)
}

export default App