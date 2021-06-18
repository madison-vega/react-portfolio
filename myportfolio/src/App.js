import ButtonAppBar from './components/Header';
import Layout from './components/Layout';
import ParticlesBg from 'particles-bg'
// import Footer from './Footer';
// import Projects from './Projects';

function App() {
  return (
    <div className="App">
      <ButtonAppBar />
      <Layout/>

      <ParticlesBg color="#98838f" num={400} type="cobweb" bg={true} />
    </div>
    

  );
}

export default App;
