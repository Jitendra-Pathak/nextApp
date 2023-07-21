
import style from './footer.module.scss';

export default function Footer() {
  return (
    <div className={style.footerContainer}>
     <div className={`py-10 ${style.content} layoutWidth`}>
        <div>
            <p>
            Techo Ninja has decades of experience in delivering high-quality 
            customer centric testing solutions to clients across the globe.
            </p>
            <p>Email: info@techoninja.com</p>
            <p>Phone: +91 9582151365</p>
        </div>
        <div>
            Quick Links
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Our services</li>
                <li>Our Team</li>
                <li>Contact us</li>
            </ul>
        </div>
        <div>
            <p>Newsletter</p>
            <p>Subscribe to our newsletter and get the latest testing tips directly in your inbox.</p>
            <div>
                <input type="text" placeholder='Email' />
                <input type="button" value='Subscribe' />
            </div>
        </div>
     </div>
    </div>
  )
}
