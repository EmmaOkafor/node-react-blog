import Banner from '../temps/Banner';
import SideBar from '../temps/SideBar';

function Contact(){
  return(
    <div className='wrapper'>
    <Banner />
        <div className="row">
            <div className='col-md-9'>
              <div className='contact margin-top-50'>
                  <form action="" method="post" className='row'>
                  <h5><strong>Contact Us</strong></h5>            
                    <div className="col-sm-12">
                      <input className="form-control" type="text" name="username" value="" placeholder="Enter username" />
                      <input className="form-control" type="email" name="username" value="" placeholder="Enter Email" />
                      <textarea rows="5" col="20" className="form-control" placeholder="Compose your message" />     
                    </div>
                  <button className='form-control'>Send message</button>
                  </form>
              </div>
            </div>
            <SideBar/>
        </div>
    </div>
  )

}

export default Contact;
