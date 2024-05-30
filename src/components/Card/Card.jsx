import './Card.scss';

function Card({imagem, nomeDaCerveja, }) {
  return (
    <section className='Card'>
        <img src={imagem} alt={nomeDaCerveja}/>
    </section>
  )
}

export default Card