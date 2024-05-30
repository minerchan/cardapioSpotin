import './Card.scss';

function Card({imagem, Cerveja, Marca, preco}) {
  return (
    <section className='Card'>
        <img src={imagem} alt={Cerveja}/>
        <h1>{Marca}</h1>
        <h3>{Cerveja}</h3>
        <h2>{preco}</h2>
    </section>
  )
}

export default Card