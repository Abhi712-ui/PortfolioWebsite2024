
import './Home.css';
import Experiences from "../components/Experiences";
import FeaturedProjects from "../components/FeaturedProjects";
import Descriptions from "../components/Descriptions"
import PortfolioNavbar from "../components/PortfolioNavbar";
import '../components/Components.css'
import "@blueprintjs/core/lib/css/blueprint.css"
import "../components/Components.css"


function Home() {
  return (
      <div className={"container"}>
          <PortfolioNavbar/>
          <div className={"content"}>
              <div className={"left-column"}>
                  <h1
                      style={{fontSize: '5rem', textAlign: 'center'}}
                      className={'public-sans'}
                  >
                      Hi, I'm Abhimanyu Sharma
                  </h1>
                  <Descriptions/>
              </div>
              <div className={"right-column"}>
                  <FeaturedProjects/>
                  <Experiences/>
              </div>
          </div>
      </div>
  );
}

export default Home;
