import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const FreePilotTest: React.FC = () => {
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
		<img src="/images/freepilottesting.png"/>
		<div className="banner-header">
			<h2 className="h1" style={{fontSize:'25px'}}>Free Pilot Testing Service</h2>
			<div className="breadcrumb1">
				<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
          <span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
				{/* <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
				<span> Free Pilot Testing Service</span>
			</div>
		</div>
	</div>
	<div className="main">
    <section className="pt-51 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mt-md-5 mt-md-0">
            			      <div className="below-line title mb-4">
              <h2 style={{marginLeft:'0px'}}>Free Pilot Testing Service</h2>
              <p style= {{color:'#1f2633'}}>In order to start with the Pilot Testing Program, We need few inputs from your end like:</p>
              <ul className="list-disc pb-3">
				<li>
      If you want any specific features which we need to cover then do let us know.
    </li>
	<li>
      Test Environment of Your application if you have otherwise You have to send the App URL, Mobile Apps, etc,
    </li>
	<li>
      After your inputs are received by our team, We will start pilot testing and at the end of two days.
    </li>
	</ul>
    <p style= {{color:'#1f2633'}}>we would send the following deliverables: </p>
    <ul className="list-disc pb-3">    
		<li>
      An Issue list with all bugs found during pilot testing
		</li>
		<li>A test case sheet in which we would create few test cases just to show the template we would use in throughout the testing process.</li>
                <li>A test Strategy document for the further testing process.</li>
    </ul>
              <p><strong style= {{color:'#1f2633'}}>Duration:</strong> 16 Hours</p>
              <p><strong style= {{color:'#1f2633'}}>Team Size:</strong> 1 Test Engineer</p>
            </div>
			    
		        <form onSubmit={handleSubmit}>
	            <div className="contact-box">
                {/* <p className="label-cover mb-1">NAME<span className="text-danger px-1">*</span></p> */}
                
                  <div className="form-group">
                    <label className="m-0 label-cover">Name<span className="text-danger px-1">*</span></label>
                    <input type="text" name="fname" className="form-control-new rounded-0 input-cover" value={name} onChange={(e) => setName(e.target.value)} required/>
                   </div>
                
	              <div className="form-group">
                  <label className="m-0 label-cover">email<span className="text-danger px-1">*</span></label>
	                <input type="email" name="email" className="form-control-new rounded-0 input-cover" value={email} onChange={(e) => setEmail(e.target.value)} required/>
	              </div>
	              <div className="form-group">
                  <label className="m-0 label-cover">Mobile<span className="text-danger px-1">*</span></label>
	                <input type="text" name="phone" className="form-control-new rounded-0 input-cover" value={mobile} onChange={(e) => setMobile(e.target.value)} required/>
	              </div>
	              <div className="form-group">
                  <label className="m-0 label-cover">MESSAGE<span className="text-danger px-1">*</span></label>
	                <textarea name="message" className="form-control-new rounded-0 input-cover textarea-box" value={message} onChange={(e) => setMessage(e.target.value)} required></textarea>
	              </div>
	              <div className="form-group">
                  <label className="m-0 label-cover">ATTACHMENT</label>
	                <input type="file" name="attc_cu" className="form-control-new rounded-0 input-cover"  accept=".pdf,.doc,.docx"/>
	                <small>Only PDF and Doc are allowed</small>
	              </div>
	              <button className="my-btn" type="submit" name="submit" value="submit">Send</button>
	            </div>
             </form>
          </div>
        </div>
      </div>
    </section>
     </div>
      </RootLayout>
  )
};
export default FreePilotTest;