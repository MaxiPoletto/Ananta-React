import React from 'react'
import {Card,CardImg,CardTitle,CardBody,Button,CardText } from 'reactstrap'

import Carrucel from './Carrucel'

const Tarjetas = (param) => {
  if (param.isProduct) {
    // return(
    //   <div>
    //     <h2 className='Tarjeta--Tittle'>NUESTROS PRODUCTOS</h2>
    //     <div className='Tarjeta--Product'>
    //       <div className='Tarjeta--Product--card'>
    //         <Card >
    //           <CardImg
    //             alt="Card image cap"
    //             src="https://i.ytimg.com/vi/yAwD_Zjs3lk/maxresdefault.jpg"
    //             top
    //             width="100%"
    //           />

    //           <CardBody>

    //             <CardTitle tag="h5">
    //               Carteras
    //             </CardTitle>
      
    //             <CardText>
    //               This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
    //             </CardText>
    //             <Button>Mas Info</Button>

    //           </CardBody>
    //         </Card>
    //       </div>
    //       <div className='Tarjeta--Product--card'>
    //         <Card>
    //             <CardImg
    //               alt="Card image cap"
    //               src="https://i.ytimg.com/vi/Vk7kv6Nwrio/hqdefault.jpg"
    //               top
    //               width="100%"
    //             />

    //             <CardBody>
    //               <CardTitle tag="h5">
    //                 Alfombras
    //               </CardTitle>
        
    //               <CardText>
    //                 This card has supporting text below as a natural lead-in to additional content.
    //               </CardText>
    //               <Button>Mas Info</Button>
    //             </CardBody>
    //           </Card>
    //       </div>
    //       <div className='Tarjeta--Product--card'>
    //         <Card>
    //             <CardImg
    //               alt="Card image cap"
    //               src="https://d22fxaf9t8d39k.cloudfront.net/affcfd7550738d0730e430a956368e7cd310bf334668f8530f7571563b85675e23613.jpeg"
    //               top
    //               width="100%"
    //               height="auto"
    //             />
    //             <CardBody>
    //               <CardTitle tag="h5">
    //                 Canasto
    //               </CardTitle>
      
    //               <CardText>
    //                 This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
    //               </CardText>
    //               <Button>Mas Info</Button>
    //             </CardBody>
    //           </Card>
    //       </div>  
            
    //     </div>
    //   </div>
    // )

    // O
    return(
      <Carrucel/>
    )
    
    
  }else{
    // PARA CURSOS
    return(
      <div className='Tarjeta--Cursos'>
      <h2 className='Tarjeta--Tittle'>NUESTROS CURSOS</h2>
      <div className='Tarjeta--Product'>
        <div className='Tarjeta--Product--card'>
          <Card>
            <CardImg
              alt="Card image cap"
              src="https://crehana-blog.imgix.net/media/filer_public/95/6f/956f041c-c250-4519-af53-42225aee68c3/sujetando_el_crochet_en_forma_de_cuchara.jpg?auto=format&q=50"
              top
              width="100%"
            />

            <CardBody  ClassName='Tarjeta--Product--card--dist'>

              <CardTitle tag="h5">
                Curso punto alto
              </CardTitle>
    
              <CardText>
                This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
              </CardText>
              <Button className='Tarjeta--Button'>Mas Info</Button>

            </CardBody>
          </Card>
        </div>
        <div className='Tarjeta--Product--card'>
          <Card  ClassName='Tarjeta--Product--card--dist'>
              <CardImg
                alt="Card image cap"
                src="https://crehana-blog.imgix.net/media/filer_public/95/6f/956f041c-c250-4519-af53-42225aee68c3/sujetando_el_crochet_en_forma_de_cuchara.jpg?auto=format&q=50"
                top
                width="100%"
              />

              <CardBody>
                <CardTitle tag="h5">
                  Curso punto medio
                </CardTitle>
      
                <CardText>
                  This card has supporting text below as a natural lead-in to additional content.
                </CardText>
                <Button>Mas Info</Button>
              </CardBody>
            </Card>
        </div>
        <div className='Tarjeta--Product--card'>
          <Card>
              <CardImg
                alt="Card image cap"
                src="https://crehana-blog.imgix.net/media/filer_public/95/6f/956f041c-c250-4519-af53-42225aee68c3/sujetando_el_crochet_en_forma_de_cuchara.jpg?auto=format&q=50"
                top
                width="100%"
              />
              <CardBody>
                <CardTitle tag="h5">
                  Curso punto bajo
                </CardTitle>
    
                <CardText>
                  This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.
                </CardText>
                <Button>Mas Info</Button>
              </CardBody>
            </Card>
        </div>  
          
      </div>
    </div>
    )
  }
  
}

export default Tarjetas