import { useState } from 'react'
import './App.css'
import Header from './Header';
import MyCard from './MyCard';
import Footer from './Footer';


function App() {

  return (
    <useState>

    <Header titulo="Adopta un perrito"/>

    <div className='principal'>
    <MyCard 
    imagen ="https://media.istockphoto.com/id/1503385646/es/foto/retrato-divertido-y-feliz-perro-cachorro-shiba-inu-asomándose-detrás-de-una-pancarta-azul.jpg?s=612x612&w=0&k=20&c=mMZ1Dvy0J8iNpF2boWkL8bo45vYYPi_AvZ1aYr9oO8w="
    nombre="Jack"
    descripcion="Confiable y amistoso buscando dueño"
    colorFondo= "danger"
    texto= "Pitbul"
    />
  
    <MyCard 
    imagen="https://media.istockphoto.com/id/1482780848/es/foto/foto-de-cerca-de-las-manos-de-una-mujer-sosteniendo-un-tazón-de-gránulos-para-su-perro.jpg?s=612x612&w=0&k=20&c=YqYhk_pT740JFbfL44Y9y45vhgCO7QPPCTS7zfnTYAM="
    nombre="Sanson"
    descripcion="Simpatico, juguetón, con ganas de ser adoptado"
    colorFondo= "success"
    texto= "Chiguagua"
    />

<MyCard 
    imagen="https://media.istockphoto.com/id/1728169829/es/foto/lindo-perro-marrón-fondo-aislado-primer-plano-interior.jpg?s=612x612&w=0&k=20&c=SVmDWmV96OPk08JDjA_hfd8mCFfvwfXYaHSC42Hag0A="
    nombre="Clif"
    descripcion="Obediente y con adietramiento"
    colorFondo= "warning"
    texto= "Pastor Belga"
    />

<MyCard 
    imagen="https://media.istockphoto.com/id/1551607933/es/foto/perro-golden-retriever-haciendo-truco.jpg?s=612x612&w=0&k=20&c=bzMTWdjnCAECNmJBK86KVU313UNB-qCgvrtoFRBey94="
    nombre="Fox"
    descripcion="Timido y cariñoso en busca de cariño"
    colorFondo= "primary"
    texto= "Gran Danés"
    />

    </div>
    
    <Footer />
    
    </useState>
  )
}

export default App;
