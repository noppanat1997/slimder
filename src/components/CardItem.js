import React from 'react';
import Card from 'react-bootstrap/Card'
const CardItem = (props) => {
  return (
    <div>
      <Card style={{ width: '95%' }}>
        <Card.Img
          variant="top"
          src="https://farm8.staticflickr.com/7500/15514383088_8477f9efc0_z_d.jpg"
          style={{ overflow: 'hidden', position: 'relative', height: '18rem', objectFit: 'cover' }}
        />
        <Card.Body>
          <Card.Title>{props.data.name}, {props.data.age}</Card.Title>
        </Card.Body>
      </Card>
    </div>
  );
}
export default CardItem;