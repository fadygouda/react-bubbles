import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

const Login = () => {
const {push} = useHistory();
	const [login, setLogin] = useState({
		username: "",
		password: "",
	});

	const handleChanges = (e) => {
		setLogin({
			...login,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post("http://localhost:5000/api/login", login)
			.then((res) => {
				console.log(res);
				localStorage.setItem("token", res.data.payload);
				push("/bubblepage");
			})
      .catch((err) => console.log(err.response));
      setLogin({
        username:'',
        password:''
      })
  };

	return (
		<>
			<h1>Welcome to the Bubble App!</h1>
			<br />
			<form onSubmit={handleSubmit}>
				<label htmlFor="username">
					Username:
					<input
						type="text"
						name="username"
						value={login.username}
						onChange={handleChanges}></input>
				</label>
				<label htmlFor="password">
					Password:
					<input
						type="text"
						name="password"
						value={login.password}
						onChange={handleChanges}></input>
				</label>
				<button type="submit">Submit</button>
			</form>
		</>
  );
  }


export default Login;