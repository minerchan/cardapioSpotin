import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import './Home.scss';
import tarin from '../../asset/tarin.png';
import hankzbeer from '../../asset/hankzbeer.png';
import xeque from '../../asset/xeque.png';

function Home() {
  return (
    <>
      <Header/>
      <Card Marca={'Tarin'} Cerveja={"American IPA"} imagem={tarin} preco={"24 / 34"}/>
      <Card Marca={'Hankzbier'} imagem={hankzbeer} Cerveja={"stout"} preco={"26 / 38"}/>
      <Card Marca={'Hankzbier'} imagem={hankzbeer} Cerveja={"SOUR FRUIT"} preco={"18 / 30"}/>
      <Card Marca={'Hankzbier'} imagem={hankzbeer} Cerveja={"pilsen"} preco={"14 / 18"}/>
      <Card Marca={'Hankzbier'} imagem={hankzbeer} Cerveja={"munich dunkel"} preco={"16 / 20"}/>
      <Card Marca={'Hankzbier'} imagem={hankzbeer} Cerveja={"session ipa"} preco={"16 / 20"}/>
      <Card Marca={'Xeque Mate'} imagem={xeque} preco={"15"}/>
    </>
  )
}

export default Home