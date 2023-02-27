
import './App.css';
import AboutUs from './Components/AboutUs/AboutUs';
import StudentReview from './Components/AboutUs/StudentReview/StudentReview';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Navigation from './Components/Navigation/Navigation';
import Raseo from './Components/Raseo/Raseo';
import Services from './Components/Services/Services';
import TopDestinations from './Components/TopDestinations/TopDestinations';

function App() {
  return (
    <div>
      <Navigation/>
      <Header/>
      <AboutUs/>
      <StudentReview/>
      <Raseo/>
      <Services/>
      <TopDestinations/>
      <Footer/>
    </div>
  );
}

export default App;
