import Carousel from 'react-bootstrap/Carousel';

function Carrucel() {
  return (
    <div className='Tarjeta--Tittle2'>
      <h2>NUESTROS PRODUCTOS</h2>
      <div className='Carrucel'>
        <Carousel slide={false} className='Carrucel--global'>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ytimg.com/vi/yAwD_Zjs3lk/maxresdefault.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Bolsos</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://crehana-blog.imgix.net/media/filer_public/95/6f/956f041c-c250-4519-af53-42225aee68c3/sujetando_el_crochet_en_forma_de_cuchara.jpg?auto=format&q=50"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3>Carteras</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.ytimg.com/vi/yAwD_Zjs3lk/maxresdefault.jpg"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3>Alfombras</h3>
              {/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
    
   
  );
}

export default Carrucel;