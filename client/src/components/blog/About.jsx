import Banner from "../temps/Banner";
import Header from "../temps/Header";
import SideBar from "../temps/SideBar";

function About(){
  return(

    <div className="wrapper">
    <Header />
      <div className="about">
        <Banner img="images/pic.jpg" />
          <div className="col-md-12 col-sm-12">
            <h5>ABOUT US</h5>
            <p className="w3-padding left"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nihil at velit consequatur 
                dolores exercitationem iusto, 
                soluta quos delectus itaque unde voluptate, ab esse necessitatibus. Sint qui tenetur quibusdam hic.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis nihil at velit consequatur 
                dolores exercitationem iusto, 
                soluta quos delectus itaque unde voluptate, ab esse necessitatibus. Sint qui tenetur quibusdam hic. 
            </p>
          </div>
        </div>
        <SideBar/>
      </div>
  )

}

export default About;
