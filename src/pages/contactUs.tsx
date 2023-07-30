import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';
import React, { useState } from 'react';

const ContactUs: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // You can handle form submission logic here (e.g., sending the form data to a backend server)
    console.log('Form submitted with data:', { name, email, message });
    // Reset form fields after submission
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
   <RootLayout>
    <div className="banner">
		<img src="/images/why-us.png"/>
		<div className="banner-header">
			<h2 className="h1">Contact Us</h2>
			<div className="breadcrumb1">
				<a href="index.html">
					<img src="/images/Homeicon.png" alt="home"/></a>
				<img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/>
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
            <div>
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
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
