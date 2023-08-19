import React from 'react';
import { Card , Container} from 'react-bootstrap';

function DisplayCard(props) {
    const details = props.info;
  return(
    <>
        <div className="d-inline-flex p-2 col-example justify-content-center" >
            <Container>
                <Card style={{width:'29rem', height:'auto'}}>
                    <Card.Img variant='top' src={details.urlToImage}/>
                    <Card.Body>
                        <Card.Title>{details.title}</Card.Title>
                        <Card.Subtitle>{details.author} : {details.publishedAt}</Card.Subtitle>
                        <Card.Text>{details.description}</Card.Text>
                        <Card.Link href={details.url}>View Full News Coverage</Card.Link>
                    </Card.Body>
                </Card>
            </Container>
        </div>
    </>
  )
}

export default DisplayCard;