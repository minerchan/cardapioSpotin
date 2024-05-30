import './Card.scss';

function Card({imagem, Cerveja, Marca, preco}) {
  return (
    <section className='Card'>
        <img src={imagem} alt={Cerveja}/>
        <div className='flexMarcaCerveja'>
            <h1>{Marca}</h1>
            <h3>{Cerveja}</h3>
        </div>
        <h2>{`R$ ${preco}`}</h2>
    </section>
  )
}

export default Card