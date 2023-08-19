import React from 'react';
import { useState} from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import News from './News';

function SearchBar() {
    const [state, setState] = useState("trump");
    const [typedQuery, setTypedQuery] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        setState(typedQuery);
    }
    const handleClick = (option) => {
        setState(option);
    }

    //console.log(state, typedQuery);

  return (
    <>
        <Navbar>
            <Container>
                <Navbar.Brand>News</Navbar.Brand>
                <Nav.Link onClick={()=>{handleClick('India')}}>India</Nav.Link>
                <Nav.Link onClick={()=>{handleClick('World')}}>World</Nav.Link>
                <Nav.Link onClick={()=>{handleClick('Sports')}}>Sports</Nav.Link>
                <Nav.Link onClick={()=>{handleClick('Business')}}>Business</Nav.Link>
                <Nav.Link onClick={()=>{handleClick('Weather')}}>Weather</Nav.Link>

                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Control type='search' className="me-2" onChange={(e)=>{setTypedQuery(e.target.value)}}></Form.Control>
                    <Button type='submit'>Submit</Button>
                </Form>
            </Container>
        </Navbar>
        <News query={state}/>
    </>
  )
}

export default SearchBar