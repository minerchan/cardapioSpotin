import './Card.scss';
import arrowUp from '../../asset/arrowUp.png';
import { useState } from 'react';

function Card({imagem, Cerveja, Marca, preco, descricao}) {
    const [tamanho, setTamanho] = useState("20rem")
    const [rotate, setRotate] = useState("0deg")

    function mudanca(){
        if(tamanho === "20rem"){
            setTamanho("fit-content")
            setRotate("90deg")
        }
        else{
            setTamanho("20rem")
            setRotate("0deg")
            
        }
    }
  return (
    <div className='caixaDeDescricao' style={{height: tamanho}}>
        <section className='Card'>
            <img src={imagem} alt={Cerveja}/>
            <div className='flexMarcaCerveja'>
                <h1>{Marca}</h1>
                <h3>{Cerveja}</h3>
            </div>
            
            <h2>{`R$ ${preco}`}</h2>
            <button onClick={()=> mudanca()}><img style={{rotate: rotate}} src={arrowUp} alt="Saber mais" /></button>
        </section>
        <p className='descricao'>{descricao}</p>
    </div>
  )
}

export default Card