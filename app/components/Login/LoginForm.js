import React from 'react';

const LoginForm = (props) => (
	<form onSubmit={props.submit} className="login__form" autoComplete="off">

		<ul className="login__list">
			<li className="login__item">
				<label htmlFor="username" className="login__label">Username</label>
				<input type="text" name="username" id="username" className="login__input"/>
			</li>
			<li className="login__item">
				<label htmlFor="password" className="login__label">Password</label>
				<input type="text" name="password" id="password" className="login__input"/>
			</li>

			<li className="login__item">
				<button type="submit">Submit</button>
			</li>
		</ul>

	</form>
);

export default LoginForm;