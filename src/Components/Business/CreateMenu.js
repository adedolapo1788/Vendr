import { Col, Row, Container, Card, Form } from 'react-bootstrap';
import CurrencySvg from '../../Image/assests/Group 270.svg'
import SvgPhoto from '../../Image/assests/Group 230.svg'
import '../../styles/upload.scss'
import { useState } from 'react';

const CreateMenu =  () => {
    const [file, showUpload] = useState()
    var fileUpload = (e) => {
        const files = e.target.files[0]?.name
            showUpload(files)
    }
    return(
        <>
        <div className="main-panel">
      <Container fluid className="hurt">

        <div>
        <p className="dashboard-style">Create new menu</p>
           </div>
           <p className="f-15">Add you new menu here</p>
            <Row>
            <Col xl={12}>
                <Card className="pb-5">
                <Form className="menu-form" >
				<Form.Row>
					
					<Col xs={12} sm={6} md={6} className="mt-3">
						<Form.Group>
							<label>Menu name</label>
							<Form.Control type="text"  className="change-input" placeholder="Name" />
						</Form.Group>
					</Col>
					<Col xs={12} sm={6} md={6} className="mt-3" >
						<Form.Group>
                        <label>Select Categories</label>
							
							<Form.Control as="select" className="change-input">
                                <option value={null}>Pick an Option</option>
                            <option value="Soup">Soup</option>
                            <option value="Swallow">Swallow</option>
                            <option value="Rice">Rice</option>
                            <option value="Slides">Slides </option>
                            <option value="Breads">Breads</option>
                            <option value="Beans">Beans</option>
                            <option value="Others">Others</option>
                            </Form.Control>
						
						</Form.Group>
					</Col>
                    <Col md={12} className="mt-3">
                    <Form.Group>
                        <label>Set Price</label>
                        <Form.Control placeholder="Set Price" className="change-input"/>
            <div className="currency-svg">
            <img src={CurrencySvg} alt="Currency" width="83%"/>
            </div> 
              </Form.Group>  
                  </Col> 

                        <Col xs={12} sm={6} md={6} className="mt-3">
						<Form.Group>
							<label>Description of menu</label>
							<Form.Control as="textarea"  className="change-textarea" placeholder="Write a short description about the menu..."/>
						</Form.Group>
					</Col>
					<Col xs={12} sm={6} md={6} className="mt-3" >
						<Form.Group>
                        <label>Upload picture</label>
							
                        <div className="wrapper bd">
  <div className="file-upload">
  {file}
    <input type="file" onChange={fileUpload}/>
    <img src={SvgPhoto} className="svg-photos" alt="upload"/>
        <p className="rf4">Drag and drop, or click to upload 240 x 240px minimum (JPG or PNG file, up to 10 MB)</p>
  </div>
  
  </div>
      
                  		</Form.Group>
					</Col>
                    
				</Form.Row>
                <div className="buss-sign-btn mt-3">
					<button variant="primary" className="w-100 p-btn login-btn" type="submit">
						Save
					</button>
				</div>
			
               
                    </Form>
                </Card>
            </Col>
            </Row>
        </Container>
        </div>
        
        </>
    )
}
export default CreateMenu