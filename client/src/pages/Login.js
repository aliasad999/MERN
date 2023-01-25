import { useState } from 'react';
import { Button, Icon, TextField, Paper, Typography } from "@material-ui/core";
import Box from '@mui/material/Box';
import customSpacing from "../spacing/customSpacing";
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;
function App() {
	const { m, p, y } = customSpacing();
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function loginUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:3000/api/login',{
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
				password,
			}),
		})

		const data = await response.json()

		if (data.user) {
			localStorage.setItem('token', data.user)
			alert('Login successful')
			window.location.href = '/dashboard'
		} else {
			alert('Please check your username and password')
		}
	}
	return (
		<div>
			<Box className={`${m("x", 500)} ${p("x", 50)} ${y("x",500)}`}>
				<h1 className={`${m("x", 20)} ${p("x", 2)} `}
            		helperText="your password">Login</h1>
				<form onSubmit={loginUser}>
					<TextField label="Email" id="margin-normal" name="Email" value={email}
            		helperText="Enter your Email address eg name@gmail.com"
					style={{ background: "white" }}
        			className={`${m("x", 20)} ${p("x", 2)}`}
            		onChange={(e) => setEmail(e.target.value)}
          					/>
				<br />
					<TextField
            		label="Password" id="margin-normal" type="password" name="password" value={password} style={{ background: "white" }}
        			className={`${m("x", 20)} ${p("x", 2)}`} helperText="your password" onChange={(e) => setPassword(e.target.value)}
          				/>
				<br />
					<Button type="submit" variant="contained"  color="primary" className={`${m("x", 20)} ${p("x", 2)}`}
            			 >Login</Button>
					<Button type="" variant="contained"  color="secondary" className={`${m("x", 2)} ${p("x", 2)}`}
            			 >Forgot Password</Button>
				<Typography sx={{ fontSize: '0.9rem', mb: '1rem' }}>
                    Need an account?{' '}
                    <LinkItem to='/register'>Sign up here</LinkItem>
                  </Typography>
				</form>
			</Box>
		</div>
		 
	)
}

export default App