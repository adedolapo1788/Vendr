import React from 'react';
import { Modal } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import SignUpForm from './SignupForm'
//import Logo from './Logo'

function Signup(props) {
	
	return (
		<Modal show={props.show} onHide={props.handleClose}>
			<h3 className="logo-modal">Vendr</h3>
		<Modal.Dialog style={{margin: 0}}>
			<Modal.Header closeButton>
				
			</Modal.Header>

			<Modal.Body>
				{/* <Route exact path={`${path}/login`} component={LoginForm}/>
							<Route exact path={`${path}/signup`} component={SignUp}/> */}
				<SignUpForm/>
				{/* <SignUp /> */}
			</Modal.Body>

			<Modal.Footer style={{ display: 'flex', justifyContent: 'center' }}>
				<Form.Group controlId="formBasicCheckbox">
					<Form.Check type="checkbox" label="Some BS over here" />
				</Form.Group>
			</Modal.Footer>
		</Modal.Dialog>
		</Modal>
	);
}
export default Signup;
