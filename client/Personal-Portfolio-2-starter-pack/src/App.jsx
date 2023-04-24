import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Aboutme from "./components/AboutMe/Aboutme";
import css from './styles/app.module.scss';
import Myskills from "./components/Myskills/Myskills";
import Portfolio from "./components/Portfolio/Portfolio";
import ContactMe from "./components/ContactMe/ContactMe";
import Footer from "./components/Footer/Footer";
import.meta.hot;
const App = () => {
  //don't forget to add font link in index.html
  return <div className={`${css.container}`}>
    <Header/>
    <Hero/>
    <Aboutme/>
    <Myskills/>
    <Portfolio/>
    <ContactMe/>
    <Footer/>
  </div>
   
};

export default App;
