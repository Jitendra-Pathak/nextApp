import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [mobile, setMobile] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., sending the form data to a backend server)
    try {
      const serviceId = 'service_gvl69u9';
      const templateId = 'template_tazx5ca';
      const userId = 'WMcMriTvtEyizD9Os';

      await emailjs.send(serviceId, templateId, {
        from_name: name,
        from_email: email,
        mobile,
        message,
      }, userId);

      alert('Email sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
      setMobile('');
    } catch (error) {
      console.error(error);
      alert('Failed to send email.');
    }
  };

  return (
   <RootLayout>
    <div className="banner">
		<img src="/images/why-us.png"/>
		<div className="banner-header">
			<h2 className="h1">Contact Us</h2>
			<div className="breadcrumb1">
				<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
          <span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
				{/* <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
				<span> Contact Us</span>
			</div>
		</div>
	</div>

    <div className="contact-us-container">
      <div className="left-side">
      <p>If you have any questions please feel free to contact us at any time. We will do our best to respond as soon as possible.
</p>
<p>
            Email: info@techoninja.com<br />
            Phone: +91 9582151365<br />
          </p>
<img src="/images/contactus.jpg" alt="Contact Us" />
</div>
      <div className="right-side">
        <div className="contact-info-box">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className='text-xs'>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className='text-xs'>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className='text-xs'>
              <label htmlFor="mobile">Mobile:</label>
              <textarea
                id="mobile"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                required
              ></textarea>
            </div>
            <div className='text-xs'>
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
            <button type="submit" name="submitbtn">Submit</button>
          </form>
        </div>
      </div>
    </div>
   </RootLayout>
  )
};
export default ContactUs;
