import React from 'react';

const LoginForm = (props) => (
	<div className="login">
		<form onSubmit={props.submit} className="login__form">
			<ul className="login__list">
				<li className="login__item">
					<label htmlFor="firstname" className="login__label">First Name</label>
					<input type="text" name="firstname" id="firstname" className="login__input"/>
				</li>
				<li className="login__item">
					<label htmlFor="lastname" className="login__label">Last Name</label>
					<input type="text" name="lastname" id="lastname" className="login__input"/>
				</li>

				<li className="login__item">
					<label htmlFor="username" className="login__label">Username</label>
					<input type="text" name="username" id="username" className="login__input"/>
				</li>
				
				<li className="login__item">
					<label htmlFor="password" className="login__label">Password</label>
					<input type="text" name="password" id="password" className="login__input"/>
				</li>

				<li className="login__item">
					<label htmlFor="verify" className="login__label">Verify Password</label>
					<input type="text" name="verify" id="verify" className="login__input"/>
				</li>



				<li className="login__item">
					<button type="submit">Submit</button>
				</li>
			</ul>
		</form>
	</div>
);

export default LoginForm;