import React from 'react';
import { Modal } from 'react-bootstrap';
//import Logo from './Logo'
import LoginForm from './LoginForm'

function Login(props) {
	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<h3 className="logo-modal">Vendr</h3>
		<Modal.Dialog style={{margin: 0}}>
			<Modal.Header closeButton>
			</Modal.Header>

			<Modal.Body>
				{/* <Route exact path={`${path}/login`} component={LoginForm}/>
							<Route exact path={`${path}/signup`} component={SignUp}/> */}
				<LoginForm/>
				{/* <SignUp /> */}
			</Modal.Body>

			</Modal.Dialog>
		</Modal>
	);
}
export default Login;
