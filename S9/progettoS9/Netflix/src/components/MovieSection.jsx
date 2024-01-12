import {Container, Row, Col} from 'react-bootstrap'
import CardGallery from './CardGallery';

const MovieSection = () => {
    const saga = ['harry potter', 'avengers', 'star wars']
    return (
        <>
        <Container>
            <Row>
                <Col>
                {saga.map((saga) => <CardGallery saga={saga} key={saga}/>)}
                </Col>
                </Row>
                </Container></>
    )
}

export default MovieSection