import Card from '../../components/Card/Card';
import Header from '../../components/Header/Header';
import './Home.scss';
import tarin from '../../asset/tarin.png';
import hankzbeer from '../../asset/hankzbeer.png';

function Home() {
  return (
    <>
      <Header/>
      <Card imagem={tarin}/>
      <Card imagem={hankzbeer}/>
      <Card imagem={hankzbeer}/>
    </>
  )
}

export default Home