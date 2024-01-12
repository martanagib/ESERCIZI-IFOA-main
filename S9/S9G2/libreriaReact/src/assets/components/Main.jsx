import { Container, Row } from 'react-bootstrap'
import Welcome from './Welcome'
import ListaCard from './ListaCard'

const Main = () => {

    return (
        <Container style={{ minHeight: '85vh' }}>
            <Row>
                <Welcome />
            </Row>
            <Row>
                <ListaCard/>
               
            </Row>
      </Container>
    )
}

export default Main