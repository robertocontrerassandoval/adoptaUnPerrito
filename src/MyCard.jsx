import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Badge from 'react-bootstrap/Badge';
import Tags from './Tags';

const MyCard = (props) => {
    const {imagen, nombre, descripcion, colorFondo, texto} = props
  return (
   <>

        <div className='card'>
            <img src={imagen} alt={imagen} />
            <h2>{nombre}</h2>
            <h4>{descripcion}</h4>
           <Badge id='badge' bg={colorFondo}>{texto}</Badge> 
        </div>

      <Tags/>


        
   
   </>
        
   

    
  )
}

export default MyCard