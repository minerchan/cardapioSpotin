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
      <Card Marca={'Tarin'} Cerveja={"American IPA"} imagem={tarin} preco={"24 / 34"} descricao={"Triple IPA com adições pesadas de lúpulos que trazem notas de frutas maduras, dentre eles Nelson Sauvin no formato Hop Hash. O rótulo rende homenagem ao Marco Zero na linda cidade de Recife."}/>
      <Card Marca={'Hankzbier'} imagem={hankzbeer} Cerveja={"stout"} preco={"26 / 38"} descricao={"Achocolatado de Gente Grande é o novo lançamento dos nossos parceiros. Esta cerveja é um verdadeiro licor de chocolate amargo com quantidades absurdas de nibs de cacau. Possui aroma de sorvete, achocolato amargo e ao leite e um incrível toffee."}/>
      <Card Marca={'Hankzbier'} imagem={hankzbeer} Cerveja={"SOUR FRUIT"} preco={"18 / 30"} descricao={"Sour com adições de maracuja, goiaba e amora. Extremamente refrescante e aromatica."}/>
      <Card Marca={'Hankzbier'} imagem={hankzbeer} Cerveja={"pilsen"} preco={"14 / 18"} />
      <Card Marca={'Hankzbier'} imagem={hankzbeer} Cerveja={"munich dunkel"} preco={"16 / 20"} descricao={"Munich Dunkel é um estilo de cerveja tradicional de Munique, Alemanha. Com carga expressiva de malte base Munich e outros especiais, ela é de cor cobre avermelhada a marrom escuro profundo."}/>
      <Card Marca={'Hankzbier'} imagem={hankzbeer} Cerveja={"session ipa"} preco={"16 / 20"} descricao={"Session IPA extremamente refrescante, perfeita para dias de calor."}/>
      <Card Marca={'Xeque Mate'} imagem={xeque} preco={"15"} descricao={"Uma mistura saborosa de mate, rum, guaraná e limão"}/>
    </>
  )
}

export default Home