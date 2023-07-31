
import style from './footer.module.scss';
import '../../../app/style001.css';
import '../../../app/background.css';

export default function Footer() {
  return (
    <footer className="footer--section" data-bg-img="img/footer-img/footer-widget.jspg">
           
            <div className="footer--widgets pt--90 pb--30">
                <div className="container">
                    <div className="row AdjustRow">
                        <div className="col-md-3 col-xs-6 col-xss-12 pb--60">
                            
                            <div className="widget">
                               
                                <div className="about--widget">
                                    <div className="logo-footer">
                                        <img src="/images/whitelogo.png" alt="footer"/>
                                    </div>

                                    <address>
                                    <p style={{fontSize:'11px'}}>Techo Ninja has decades of experience in delivering high-quality customer centric testing solutions to clients across the globe.</p>
                                    </address>

                                    <dl>
                                      <dt style={{fontSize:'11px'}}><i className="fa fa-envelope-o"></i>Email: 
                                        
                                          <span><a style={{fontSize:'11px'}} href="mailto:info@techoninja.com" className="btn-link"> info@techoninja.com</a></span></dt>
                                    </dl>

                                    <dl>
                                      <dt style={{fontSize:'11px'}}><i className="fa fa-phone"></i>Phone:  
                                            <span>
                                                <a href="tel:+91 9582151365" className="btn-link"> +91  9582151365</a>
</span> </dt>
                                        
                                    </dl>
                                </div>
                               
                            </div>
                         
                        </div>
                        <div className="verticalLineFooter"></div>
<div className="col-md-3 col-xs-6 col-xss-12 pb--60 col-md-offset-1">
             
              <div className="widget">
                                <h2 className="h8 widget--title">Quick Links</h2>

                                
                                <div className="links--widget" style={{fontSize:'12px'}}>
                                    <ul className="nav">
                                        <li><a href="index.php">Home</a></li>
                                        <li><a href="about.php">About us</a></li>
                                        <li><a href="services.php">Our Services</a></li>
                                        <li><a href="team.php">Our Team</a></li>
                                        <li><a href="contact.php">Contact us</a></li>
                                        
                                    </ul>
                                </div>
                                
                            </div>
                          
                        </div>
                        <div className="verticalLineFooter"></div>
                        <div className="col-md-3 col-xs-6 col-xss-12 pb--60 col-md-offset-2">
                           
                            <div className="widget">
                                <h2 className="h8 widget--title">NewsLetter</h2>

                                <div className="newsletter--widget">
                                    <div className="desc">
                                      <p style={{fontSize:'11px'}}>Subscribe to our newsletter and get latest testing tips directly in your inbox.</p>
                                    </div>

                                    <form action="https://themelooks.us13.list-manage.com/subscribe/post?u=79f0b132ec25ee223bb41835f&id=f4e0e93d1d" method="post" name="mc-embedded-subscribe-form" target="_blank" data-form="validate">
                                        <input type="text" name="EMAIL" placeholder="Email" className="form-control" required/>

                                        <button type="submit" className="btn btn-primary">Subscribe</button>
                                    </form>
                                </div>
                                
                            </div>
                           
                            <div className="widget">
                                <h2 className="h4-n widget--title">Payment Methods</h2>

                                <div className="img---widget">
                                    <img style= {{maxWidth:'150px'}} src="/images/payment-methods.png" alt=""/>
                                </div>
                              
                            </div>
                         
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        
  )
}
