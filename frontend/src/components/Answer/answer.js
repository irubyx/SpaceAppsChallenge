import React from 'react'
import { Card, Badge } from "react-bootstrap";

const Answer = (props) => {
    const { title, summary, date, author } = props.props;

    return (
        <div className="col-sm-6 col-md-3">
          <Card className="card">
              <Card.Body className="cardBody">
                <Card.Title className="cardTitle">{title}</Card.Title>
                <Card.Text>
                    <Card.Text>
                        {summary}
                    </Card.Text>
                    <span style={ {textAlign: "center"} }>
                    <Badge pill bg="success">Date: {date}</Badge>
                    </span>
                    <span>
                        <Badge pill bg="primary">Author: {author}</Badge>
                    </span>
                    <a src='https://www.google.com/'>Link</a>
                </Card.Text>
              </Card.Body>
          </Card>
        </div>
        
      );
}

export default Answer;