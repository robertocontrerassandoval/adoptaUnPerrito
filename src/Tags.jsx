import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';

const Tags = (props) => {
  const {texto, colorFondo}= props
  return (
    <>
    
      <Badge bg={colorFondo}>{texto}</Badge>
    
    
    </>
  
  )
}

export default Tags;