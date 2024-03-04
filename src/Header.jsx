import React from 'react'

const Header = (props) => {
    const {titulo} = props
    return (
        <>

        <div className='titulo'>
         <h1>{titulo}</h1>
        </div>
           
        </>
 )
}

export default Header;