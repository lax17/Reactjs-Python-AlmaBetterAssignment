import React,{useState} from "react"
import {Modal,Button,Navbar,Nav,Form,FormControl,Col} from 'react-bootstrap'


const EnterMarks = props => {

const [errors, setErrors] = useState([])
const [field1, setfield1] = useState('')
const [field2, setfield2] = useState('')
const [field3, setfield3] = useState('')
const [field4, setfield4] = useState('')
const [field5, setfield5] = useState('')

const postData = () => {

  let total_marks,percentage
  let databody = {
    rollno: parseInt(field1),
    name: field2,
    marks_maths: parseInt(field3),
    marks_physics: parseInt(field4),
    marks_chemistry: parseInt(field5),
    total_marks: parseInt(field3) + parseInt(field4) +  parseInt(field5),
    percentage : (parseInt(field3)+ parseInt(field4) +  parseInt(field5)) / 300 * 100
  }

  fetch(`http://127.0.0.1:5000/student/marks/`, {
    method: 'POST',
    body: JSON.stringify(databody),
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
    .then(response => response.json())
    .then(response => {
      alert(response.message)
      console.log(response.message)
    })
    .catch(err => console.log(err))
}

const handleInputChange = event => {
  var key = event.target.name
  var value = event.target.value
  eval('set' + key + '(value);')
}

const hasError = key => {
  return errors.indexOf(key) !== -1
}

const handleSubmit = event => {
  event.preventDefault()

  let error = []

  if (field1 === '') error.push('field1')
  if (field2 === '') error.push('field2')
  if (field3 === '') error.push('field3')
  if (field4 === '') error.push('field4')
  if (field5 === '') error.push('field5')
 


  setErrors(error)

  if (error.length > 0) return false
  else {
    postData()
  }
}

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Entering Marks ...
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Row>
    <Form.Group controlId='formBasicClassName'>
      <Form.Label>RollNo</Form.Label>
      <Form.Control type='name'
                  className={
                    hasError('field1')
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  name='field1'
                  value={field1}
                  onChange={handleInputChange} />
                  <div
                  className={hasError('field1') ? 'inline-errormsg' : 'hidden'}
                >
                  Please enter a value
                </div>
    </Form.Group>

    <Form.Group controlId='formBasicClassName'>
      <Form.Label>Name</Form.Label>
      <Form.Control
                  type='text'
                  className={
                    hasError('field2')
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  name='field2'
                  value={field2}
                  onChange={handleInputChange}
                />
                 <div
                  className={hasError('field2') ? 'inline-errormsg' : 'hidden'}
                >
                  Please enter a value
                </div>
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group controlId='formBasicClassName'>
      <Form.Label>Marks:Maths</Form.Label>
      <Form.Control
                  type='text'
                  className={
                    hasError('field3')
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  name='field3'
                  value={field3}
                  onChange={handleInputChange}
                />
                <div
                  className={hasError('field3') ? 'inline-errormsg' : 'hidden'}
                >
                  Please enter a value
                </div>
    </Form.Group>

    <Form.Group controlId='formBasicClassName'>
      <Form.Label>Marks:Physics</Form.Label>
      <Form.Control
                  type='text'
                  className={
                    hasError('field4')
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  name='field4'
                  value={field4}
                  onChange={handleInputChange}
                />
                <div
                  className={hasError('field4') ? 'inline-errormsg' : 'hidden'}
                >
                  Please enter a value
                </div>
    </Form.Group>

    <Form.Group controlId='formBasicClassName'>
      <Form.Label>Marks:Chemistry</Form.Label>
      <Form.Control
                  type='text'
                  className={
                    hasError('field5')
                      ? 'form-control is-invalid'
                      : 'form-control'
                  }
                  name='field5'
                  value={field5}
                  onChange={handleInputChange}
                />
                <div
                  className={hasError('field5') ? 'inline-errormsg' : 'hidden'}
                >
                  Please enter a value
                </div>
    </Form.Group>
  </Form.Row>
  <Form.Row>
    <Form.Group controlId='formBasicClassName'>
      <Form.Label>Total</Form.Label>
      <Form.Control  placeholder= {parseInt(field3)+ parseInt(field4) +  parseInt(field5)} />
    </Form.Group>

    <Form.Group controlId='formBasicClassName'>
      <Form.Label>Percentage</Form.Label>
      <Form.Control  placeholder= {(parseInt(field3)+ parseInt(field4) +  parseInt(field5)) / 300 * 100 } />
    </Form.Group>
  </Form.Row>
  </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant='success' type='submit' onClick={handleSubmit}>
               Submit
            </Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );



}







function DisplayHomeChoice(){
    const [modalShow, setModalShow] = React.useState(false);
    return(

  <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">StudentMang</Navbar.Brand>
    <Nav className="mr-auto">
       <Button variant="outline-info" onClick={() => setModalShow(true)}>
            Enter Marks
       </Button>
  
      <EnterMarks
       show={modalShow}
       onHide={() => setModalShow(false)}
        />
      <Nav.Link href="#home">LeaderBoard</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>)
}
  
export default DisplayHomeChoice