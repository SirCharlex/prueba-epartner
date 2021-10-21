import { useEffect, useState} from "react";

import LogoBath from "../src/imagenes/bathroom.png";
  import Bath1 from "../src/imagenes/bath/bath1.png"
  import Bath2 from "../src/imagenes/bath/bath2.jpg"
  import Bath3 from "../src/imagenes/bath/bath3.png"
  import Bath4 from "../src/imagenes/bath/bath4.jpg"
  import Bath5 from "../src/imagenes/bath/bath5.jpg"
  import Bath6 from "../src/imagenes/bath/bath6.jpg"
  import Bath7 from "../src/imagenes/bath/bath7.jpg"
  import Bath8 from "../src/imagenes/bath/bath8.jpg"
import LogoAndadera from "../src/imagenes/andadera.png";
  import Marcha1 from "../src/imagenes/marcha/marcha1.jpg"
  import Marcha2 from "../src/imagenes/marcha/marcha2.jpg"
  import Marcha3 from "../src/imagenes/marcha/marcha3.jpg"
  import Marcha4 from "../src/imagenes/marcha/marcha4.jpg"
  import Marcha5 from "../src/imagenes/marcha/marcha5.jpg"
  import Marcha6 from "../src/imagenes/marcha/marcha6.jpg"
  import Marcha7 from "../src/imagenes/marcha/marcha7.jpg"
import LogoControl from "../src/imagenes/control_personas.jpg";
  import Control1 from "../src/imagenes/control/control1.png"
  import Control2 from "../src/imagenes/control/control2.jpg"
  import Control3 from "../src/imagenes/control/control3.png"
  import Control4 from "../src/imagenes/control/control4.jpg"
  import Control5 from "../src/imagenes/control/control5.jpg"
  import Control6 from "../src/imagenes/control/control6.jpg"
  import Control7 from "../src/imagenes/control/control7.jpg"
import LogoSillas from "../src/imagenes/mujer_perro_ico.jpg";
  import Silla1 from "../src/imagenes/sillas/silla1.jpg"
  import Silla2 from "../src/imagenes/sillas/silla2.jpg"
  import Silla3 from "../src/imagenes/sillas/silla3.jpg"
  import Silla4 from "../src/imagenes/sillas/silla4.jpg"
  import Silla5 from "../src/imagenes/sillas/silla5.jpg"
  import Silla6 from "../src/imagenes/sillas/silla6.jpg"
  import Silla7 from "../src/imagenes/sillas/silla7.jpg"
  import Silla8 from "../src/imagenes/sillas/silla8.jpg"
  import Silla9 from "../src/imagenes/sillas/silla9.jpg"
import LogoRespira from "../src/imagenes/respira.jpg";
  import Respi1 from "../src/imagenes/respiratoria/respi1.jpg"
  import Respi2 from "../src/imagenes/respiratoria/respi2.png"
  import Respi3 from "../src/imagenes/respiratoria/respi3.jpg"
  import Respi4 from "../src/imagenes/respiratoria/respi4.jpg"
  import Respi5 from "../src/imagenes/respiratoria/respi5.jpg"
  import Respi6 from "../src/imagenes/respiratoria/respi6.jpg"
  import Respi7 from "../src/imagenes/respiratoria/respi7.jpg"
  import Respi8 from "../src/imagenes/respiratoria/respi8.jpg"
import LogoTapa from "../src/imagenes/tapa_bocas.png";
  import Tapa1 from "../src/imagenes/tapabocas/tapa1.jpg"
  import Tapa2 from "../src/imagenes/tapabocas/tapa2.jpg"
  import Tapa3 from "../src/imagenes/tapabocas/tapa3.jpg"
  import Tapa4 from "../src/imagenes/tapabocas/tapa4.jpg"
  import Tapa5 from "../src/imagenes/tapabocas/tapa5.jpg"
  import Tapa6 from "../src/imagenes/tapabocas/tapa6.jpg"
import Logo from "./imagenes/Logo.png"
import Carrito from "./imagenes/carrito.png"
import Menu from "./imagenes/menu.png"
import Corazon from "./imagenes/corazon.png"
import Rueditas from "./imagenes/rueditas.png"
import Mano from "./imagenes/mano.png"
import Persona from "./imagenes/persona.png"
import Mujer from "./imagenes/mujer_perro.png"
import Pie from "./imagenes/pie.png"





import './App.css';


function App() {
  const [prods, setProds] = useState([])
  const [categ, setCateg] = useState()
  const [descrip, setDescrip] = useState()
  // const [procesar, setProcesar] = useState(false)


  const Productos =[
    {   
        id: 1,
        categoria: "control",
        descripcion: "Control y Prevención",
        logo: LogoControl,
        prods:[
          {
            id: 1,
            referencia: "GMD-BPM-1872",
            nombre: "Tensiómetro Digital GMD KARDYO 500 con Altavoz",
            imagen: Control1,
          },
          {
            id: 2,
            referencia: "GMD-BPM-1490-C",
            nombre: "Tensiómetro Digital GMD KARDYO 300",
            imagen: Control2,
          },
          {
            id: 3,
            referencia: "GMD-BPM-1491-C",
            nombre: "Tensiómetro Digital GMD KARDYO 100",
            imagen: Control3,
          },
          {
            id: 4,
            referencia: "Korpus300",
            nombre: "Balanza con Monitor de Grasa Corporal KORPUS 300",
            imagen: Control4,
          },
          {
            id: 5,
            referencia: "GMD-BD-1522",
            nombre: "Balanza Digital de Peso Corporal GMD",
            imagen: Control5,
          },
          {
            id: 6,
            referencia: "GMDPX-500D",
            nombre: "Pulsioxímetro con Curva GMD",
            imagen: Control6,
          },
          {
            id: 7,
            referencia: "GMDPX500E",
            nombre: "Pulsioxímetro GMD Pulsax 500E",
            imagen: Control7,
          },
        ]
    },
    {   
        id: 2,
        categoria: "marcha",
        descripcion: "Ayudas para la marcha",
        logo: LogoAndadera,
        prods:[
          {
            id: 1,
            referencia: "HY5",
            nombre: "HY5 Caminador 5 Funciones",
            imagen: Marcha1,
          },
          {
            id: 2,
            referencia: "KP271-AL-2",
            nombre: "Caminador con Ruedas y Asiento Ajustable Konfort Plus",
            imagen: Marcha2,
          },
          {
            id: 3,
            referencia: "KP153-AL-12",
            nombre: "Caminador con Ruedas en Aluminio Anodizado Konfort Plus",
            imagen: Marcha3,
          },
          {
            id: 4,
            referencia: "KP1342AL-19",
            nombre: "Caminador Doble Función Konfort Plus",
            imagen: Marcha4,
          },
          {
            id: 5,
            referencia: "KP1342AL-19",
            nombre: "Caminador Doble Función Konfort Plus",
            imagen: Marcha5,
          },
          {
            id: 6,
            referencia: "KP133-AL-12",
            nombre: "Caminador Doble Botón Konfort Plus",
            imagen: Marcha6,
          },
          {
            id: 7,
            referencia: "KP321-AL-12",
            nombre: "Muleta Canadiense para Adulto Konfort Plus",
            imagen: Marcha7,
          },
        ]
    },
    {   
        id: 3,
        categoria: "respiratoria",
        descripcion: "Terapia Respiratoria",
        logo: LogoRespira,
        prods:[
          {
            id: 1,
            referencia: "GMRN846",
            nombre: "Compresor Nebulizador NUBE 5000",
            imagen: Respi1,
          },
          {
            id: 2,
            referencia: "NUBE3000",
            nombre: "Compresor Nebulizador Nube 3000",
            imagen: Respi2,
          },
          {
            id: 3,
            referencia: "GMRN457-183",
            nombre: "Compresor Nebulizador Nube 1000 - Pez Payaso",
            imagen: Respi3,
          },
          {
            id: 4,
            referencia: "NUBE1000",
            nombre: "Compresor Nebulizador Nube 1000 - Perro",
            imagen: Respi4,
          },
          {
            id: 5,
            referencia: "GMRN818",
            nombre: "Compresor Nebulizador Nube 7000",
            imagen: Respi5,
          },
          {
            id: 6,
            referencia: "KIT1",
            nombre: "Kit 1 con Cilindro de 680 Litros",
            imagen: Respi6,
          },
          {
            id: 7,
            referencia: "KIT 2",
            nombre: "Kit 2 con Cilindro de 416 Litros",
            imagen: Respi7,
          },
          {
            id: 8,
            referencia: "CS270111",
            nombre: "Aspirador de Secreciones Portátil",
            imagen: Respi8,
          },

        ]
    },
    {   
        id: 4,
        categoria: "sillas",
        descripcion: "Sillas de Ruedas",
        logo: LogoSillas,
        prods:[
          {
            id: 1,
            referencia: "PWI007-604-15",
            nombre: "Silla de Ruedas Motorizada M2000",
            imagen: Silla1,
          },
          {
            id: 2,
            referencia: "KBM-110LAEF2-46",
            nombre: "Silla de Ruedas Motorizada en Aluminio Konfort Plus",
            imagen: Silla2,
          },
          {
            id: 3,
            referencia: "KBM-110A-46",
            nombre: "Silla de Ruedas Motorizada Estándar en Acero Konfort Basic",
            imagen: Silla3,
          },
          {
            id: 4,
            referencia: "K100",
            nombre: "Silla de Ruedas Neurológica Pediátrica K100 Konfort Plus",
            imagen: Silla4,
          },
          {
            id: 5,
            referencia: "G5-1",
            nombre: "Silla de Ruedas Pediátrica Deportiva G5 Konfort Plus",
            imagen: Silla5,
          },
          {
            id: 6,
            referencia: "BBG5SG2481",
            nombre: "Silla de Ruedas Ligera en Aluminio Konfort Plus",
            imagen: Silla6,
          },
          {
            id: 7,
            referencia: "RWLT3211P-18",
            nombre: "Silla de Ruedas con Respaldo Reclinable Rin Estrella Ancho del Asiento 46 cm",
            imagen: Silla7,
          },
          {
            id: 8,
            referencia: "LT2486",
            nombre: "Silla de Ruedas en Aluminio Konfort Plus",
            imagen: Silla8,
          },
          {
            id: 9,
            referencia: "KBEL-903LAJQF9-46",
            nombre: "Silla de Ruedas Estándar Doble Propósito Konfort Plus",
            imagen: Silla9,
          },
        ]
    },
    {   
        id: 5,
        categoria: "tapabocas",
        descripcion: "Tapabocas",
        logo: LogoTapa,
        prods:[
          {
            id: 1,
            referencia: "KN95-2",
            nombre: "Mascarilla Autofiltrante KN95-2",
            imagen: Tapa1,
          },
          {
            id: 2,
            referencia: "KN95",
            nombre: "Mascarilla KN95",
            imagen: Tapa2,
          },
          {
            id: 3,
            referencia: "KN95-4",
            nombre: "Mascarilla KN95-4",
            imagen: Tapa3,
          },
          {
            id: 4,
            referencia: "GMD-TP-01",
            nombre: "Tapabocas Civil",
            imagen: Tapa4,
          },
          {
            id: 5,
            referencia: "GMD-TP-KN95",
            nombre: "Tapabocas KN95 50 Unidades Bolsa Individual",
            imagen: Tapa5,
          },
          {
            id: 6,
            referencia: "YDFZ-M2002",
            nombre: "Tapabocas de Uso Médico",
            imagen: Tapa6,
          },
        ]
    },
    {   
        id: 6,
        categoria: "bath",
        descripcion: "Seguridad en el baño",
        logo: LogoBath,
        prods:[
          {
            id: 1,
            referencia: "KP2-6542SR-AP1",
            nombre: "Cómodo Sanitario Plegable en Acero Pintado Konfort Plus",
            imagen: Bath1,
          },
          {
            id: 2,
            referencia: "KB215SR-AL",
            nombre: "Cómodo Sanitario Plegable en Aluminio Konfort Basic",
            imagen: Bath2,
          },
          {
            id: 3,
            referencia: "KP1-3520L",
            nombre: "Silla para Ducha con Brazos Konfort Plus",
            imagen: Bath3,
          },
          {
            id: 4,
            referencia: "KB1-798L",
            nombre: "Silla para Ducha con Pines Konfort Basic",
            imagen: Bath4,
          },
          {
            id: 5,
            referencia: "JBS168-1",
            nombre: "Grúa Hidráulica Konfort Plus",
            imagen: Bath5,
          },
          {
            id: 6,
            referencia: "KP3-67036",
            nombre: "Eleva Sanitario ES 5000",
            imagen: Bath6,
          },
          {
            id: 7,
            referencia: "KP3-67034",
            nombre: "Eleva Sanitario con Seguro y Apoyabrazos Konfort Plus",
            imagen: Bath7,
          },
          {
            id: 8,
            referencia: "KP68080",
            nombre: "Barras de Seguridad Konfort Plus",
            imagen: Bath8,
          },
        ]
    }
  ]
  
  

  function aDerecha(e){
    e.preventDefault();
    const fila = document.querySelector(".contenedor-carrusel");
    fila.scrollLeft =+ fila.offsetWidth
  }

  function aIzquierda(e){
    e.preventDefault();
    const fila = document.querySelector(".contenedor-carrusel");
    fila.scrollLeft =- fila.offsetWidth
  }

  function categDescrip(e){
    e.preventDefault();
    setDescrip(e.target.value)
    setCateg(e.target.name)
    setProds([])
    traeProds();
  }

  function traeProds(){    // console.log("Productos",Productos)
    if (categ){
      if(Productos){
        let busqueda=[];
        for (let x = 0; x< Productos.length; x++){
          if(Productos[x].categoria===categ){
            // console.log(Productos[x].prods)
            busqueda =Productos[x].prods;
            break;
          }
        }
        setProds(busqueda)
        // setProcesar(true)
      }
    }else{
      setProds([])

    }
  }
    
    // console.log(prods)
    // console.log(categ)

  // console.log(Productos)

//********************************************************************************** */
useEffect(()=>{
  traeProds();
},[prods])

  return (
    <div className="App">

      <div className="navbar">
        <div className="logotipo">
          <img src={Logo} alt="Logo" width="70px"/>
          <label>importmedicol</label>
        </div>
        <div className="barrabusca">
          <input type="text" placeholder="¿QUE ESTÁS BUSCANDO?  ESCRIBELO AQUI"/>
          <button>&#128269;</button>
        </div>

        <label className="mispedidos">MIS PEDIDOS</label>
        
        <div className="aliados">
          <label className="holaaliado">HOLA ALIAD@</label>
          <a href="#">INGRESA</a>
        </div>

        <div className="carrito">
          <img src={Carrito} alt="carrito" width="40px"/>
          <label>CARRITO</label>

        </div>


      </div>

      <div className="menu">
        <div className="contienemenu">
          <img src={Menu} alt="menu" width="30px"/>
        </div>
        <div className="movilidad">
          <img src={Rueditas} alt="menu" width="30px"/>
          <a href="#">MOVILIDAD</a>
        </div>

        <div className="hogar">
          <img src={Corazon} alt="menu" width="30px"/>
          <a href="#">CUIDADO EN EL HOGAR</a>
        </div>

        <div className="profesionales">
          <img src={Persona} alt="menu" width="30px"/>
          <a href="#">PROFESIONALES DE LA SALUD</a>
        </div>

        <div className="tapabocas">
          <img src={Mano} alt="menu" width="30px"/>
          <a href="#">TAPABOCAS Y DESINFECCIÓN</a>
        </div>

      </div>

      <div className="imagenPrincipal">
        <img src={Mujer} alt="mujer"/>
      </div>

      <div className="contenedor"> 
        <div  className="productos contenedor">
          {/* <label>haga doble clic sobre el nombre de la imagen</label> */}
          <div className="contenedor-principal">
            <button id="flecha-izquierda" className="flecha-izquierda" onClick={e=>aIzquierda(e)}>&#60;</button>
            
            <div className="contenedor-carrusel">
              <div className="carrusel">
                {Productos.length && Productos.map(arg=>{
                  return(
                    <div className="card">
                        <img className="imagen" src={arg.logo} alt={arg.categoria} /> 
                        <button name={arg.categoria} value ={arg.descripcion}className="button" onClick={e=>categDescrip(e)}> {arg.descripcion} </button>
                      </div>
                  )
                })}
              </div>
            </div>
            <button  id="flecha-derecha" className="flecha-derecha" onClick={e=>aDerecha(e)}>&#62;</button>
          </div>
        </div>
      
        {categ && descrip && <h3 className="tituloprods">{descrip}</h3>}
        <div className="listaProductos">
          {/* {console.log(prods)} */}
          {categ && prods && prods.map(arg=>{
            return(
              
              <div key={arg.id} className="tarjeta">
                <img src={arg.imagen} alt={arg.referencia}/>
                <label className="labelref">{arg.referencia}</label>
                <label className="labelnombre">{arg.nombre}</label>
                <div className="contieneBoton">
                  <button>AÑADIR AL CARRITO</button>
                </div>
              </div>
            )
          })}
      
        </div>
      </div>
      <div className="pie">
        <img src={Pie} alt="pie"/>
      </div>

    </div>
  );
}

export default App;
