import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

import '../style/style.css'
import {Container, Row, Col, Card, ListGroup, Jumbotron} from "react-bootstrap"


// styles
const pageStyles = {
  color: "#232129",
  padding: "2rem 1rem",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const cardStyle = {
  margin: ".5rem 0rem",
}

const noMargins = {
  margin: 0,
}

const noPadding = {
  padding: 0,
}

const jumbotronStyle ={
  paddingLeft: 0,
  paddingRight: 0,
  marginLeft: "auto",
  marginRight: "auto",
}

const sectionHeaderStyle = {
  fontSize: "1.5rem",
  fontWeight: "bolder"
}
const boxHeaderStyle = {
  fontSize: "1.3rem",
  fontWeight: "bold",
}

const cardBodyStyle = {
  padding: ".5rem 0rem",
}

const listItemStyle = {
   
}

const listStyle = {
}

const boxSubheaderStyle = {
  fontSize: ".8rem",
  fontWeight: "500",
}

const boxListItemStyle = {
  fontSize: "3rem",
}

const dateStyle = {
  fontStyle: "italic",
  float: "right",
}



const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

const education = [
  {
    school: "Christopher Newport University",
    degree: "B.S. in Computer Science",
    graduationDate: "May 2019"
  }
]

const experience = [
  {
    jobTitle: "Software Developer",
    company: "Newport News Shipbuilding",
    start: "Oct 2020",
    end: "present",
    descriptions: [
     "Hello",
     "I interned here",
    ]
  },
  {
    jobTitle: "Software Developer",
    company: "Newport News Shipbuilding",
    start: "Oct 2020",
    end: "present",
    descriptions: [
     "I worked on things from devops to working on .net core",
     "I also workedo n other things too",
    ]
  }
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Steven Wojtan</title>
      <Container>
      <Jumbotron>
        <h1>Steven R. Wojtan</h1>
      </Jumbotron>
      </Container>
      <Container >
        <Row>
          <Col xs sm md lg xl={1} style={sectionHeaderStyle}>Experience</Col>
        </Row>
        {experience.map(job=> (
          <Card >
            <Card.Header>
              <Row>
                <Col>{job.jobTitle}</Col>
                <Col><span style={dateStyle}>{job.start +' - ' + job.end}</span></Col>
              </Row>
              <Row>
                <Col>
                  {job.company}
                </Col>
              </Row>
            </Card.Header>
            <Card.Body style={cardBodyStyle}>
              <ul style={listStyle}>
                {job.descriptions.map(description => (
                  <li>
                    {description}
                  </li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        ))}
      </Container>

        
    </main>
  )
}

export default IndexPage
