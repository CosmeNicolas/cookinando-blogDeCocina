import {Image} from 'react-bootstrap'
import banner from '../../assets/Cookinando-banner.png'


const Inicio = () => {
  return (
    <>
    <section className="main">
      <Image src={banner} 
      className='w-100 '/>
     </section>
    </>
  )
}

export default Inicio