import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useAuth } from "../services/use-auth.js";

export default function Login() {
	const auth = useAuth();
	const [username, setUserName] = useState();
	const [password, setPassword] = useState();
		
	const handleSubmit = e => {
		e.preventDefault();
		console.log(auth);
		const token = auth.signIn(username, password);
	}
	
	return (
		<div className="login-page">
			<div className="login-box">
			  <div className="login-logo">
				<a href="/"><b>Admin</b>LTE</a>
			  </div>
			  <div className="card">
				<div className="card-body login-card-body">
				  <p className="login-box-msg">Sign in to start your session</p>
				  <form onSubmit={handleSubmit}>
					<div className="input-group mb-3">
					  <input type="email" className="form-control" placeholder="Email" onChange={e => setUserName(e.target.value)} />
					  <div className="input-group-append">
						<div className="input-group-text">
						  <span className="fas fa-envelope"></span>
						</div>
					  </div>
					</div>
					<div className="input-group mb-3">
					  <input type="password" className="form-control" placeholder="Password" onChange={e => setPassword(e.target.value)} />
					  <div className="input-group-append">
						<div className="input-group-text">
						  <span className="fas fa-lock"></span>
						</div>
					  </div>
					</div>
					<div className="row hide">
					  <div className="col-8">
						<div className="icheck-primary">
						  <input type="checkbox" id="remember" />
						  <label htmlFor="remember">
							Remember Me
						  </label>
						</div>
					  </div>
					  <div className="col-4">
						<button type="submit" className="btn btn-primary btn-block">Sign In</button>
					  </div>
					</div>
				  </form>
				  <p className="mb-1">
					<a href="/forgot-password">I forgot my password</a>
				  </p>
				  <p className="mb-0">
					<a href="/register" className="text-center">Register a new membership</a>
				  </p>
				</div>
			  </div>
			</div>
		</div>
	)
}