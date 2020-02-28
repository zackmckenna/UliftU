import React from 'react'
import { Container, Jumbotron, Button, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import headerImage from '../assets/action-athlete-barbell-841130.png'

const Home = () => {
  return (
    <>
      <Container>
        <Jumbotron className='mt-5'>

          <h1>UliftU</h1>
          <p>
            UliftU prepares re-entering citizens for meaningful careers in the fitness industry
          </p>
          <p>
            <Button variant="primary">Learn how</Button>
          </p>
        </Jumbotron>
        <h1>Our Mission</h1>
        <p>
          Generate employment opportunties and promote wellness in underserved communities.
        </p>
        <h1>
          Job Training Program
        </h1>
        <p>Preparing participants for for holistic wellness. UliftU empowers re-entering citizens to become strong leaders in their own lives and communities</p>
        <h1>
          Successes
        </h1>
        <p>
          Highlight a few participants here
        </p>
        <h1>
          Fitness Classes & Events
        </h1>
        <p>
          Next Event: Fitnes Class @ Martin Luther King Jr. Recreation Center
        </p>
        <p>
          <Link>View all classes</Link>
        </p>
        <h1>
          Supporters
        </h1>
        <p>
          Generous program support provided by the following organziations:
        </p>
        <ListGroup>
          <ListGroupItem>International Marketing Systems</ListGroupItem>
          <ListGroupItem>Avalanche Granola</ListGroupItem>
          <ListGroupItem>Independence Blue Cross Foundation</ListGroupItem>
          <ListGroupItem>CrossFit Foundation</ListGroupItem>
        </ListGroup>
        <h1>
          Community Partners
        </h1>
        <ListGroup>
          <ListGroupItem>Partner 1</ListGroupItem>
          <ListGroupItem>Organization A</ListGroupItem>
          <ListGroupItem>You! <Link>Become a supporter of UliftU</Link></ListGroupItem>
        </ListGroup>
      </Container>
    </>
  )
}

export default Home
