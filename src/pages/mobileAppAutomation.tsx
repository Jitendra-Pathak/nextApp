import RootLayout from '@/app/layout'
import '../app/style994e.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
		<img src="/images/Mobileautomationbanner.png"/>
		<div className="banner-header">
			<h2 className="h1" style={{fontSize:'25px'}}>Mobile Apps Automation</h2>
			<div className="breadcrumb1">
				<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
				{/* <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
				<span> Mobile Apps Automation</span>
			</div>
		</div>
	</div>

	<div className="main"> 
		
		<div className="testing-quality-services">
			<div className="container">
				<p>Are you spending a lot of time executing the same test cases for mobile apps before every release? Do you have a lot of devices to support? Looking to speed up your release cycles? You are at the right place because Techo Ninja team, using Appium, will provide just the solution you need.</p>
			   <h2>Mobile Apps Automation Testing services:</h2> 
			   <p>Techo Ninja has the most innovative test automation tools and skilled experts to ensure your application is ideally tested as a certified mobile app testing organization. We are one of India's best Mobile app Testing companies that offer full-cycle testing from the planning to the post-launch phase.</p> 
			   
			   
			   <div className="row">
				   <div className="col-md-6 col-xs-12 testing-quality-option">
					   <div className="testing-quality-box red">
						   <img className= 'ml-6' src="/images/managed-testing-icon.svg" alt="testing services icon"/>
					   </div>
					   
					   <h3>Support for all apps with multiple framework</h3>
					   <p style={{marginLeft:'0px'}}>Techo Ninja team has ability to automate test cases by using the mobile capabilities supporting framework.</p>
				   </div>
				   <div className="col-md-6 col-xs-12 testing-quality-option">
					   <div className="testing-quality-box yellow">
						   <img className= 'ml-6' src="/images/project-specific-icon.svg" alt="testing services icon"/>
					   </div>
					   
					   <h3>100% Test Coverage</h3>
					   <p style={{marginLeft:'0px'}}>Ensures that there are many test forms available, focusing on mobile needs such as reliability, deployment, and interruptions.</p>
				   </div>
				   
				   <div className="col-md-6 col-xs-12 testing-quality-option">
					   <div className="testing-quality-box green">
						   <img className= 'ml-6' src="/images/quality-icon4.svg" alt="testing services icon"/>
					   </div>
					   
					   <h3>Usability Testing </h3>
					   <p style={{marginLeft:'0px'}}>Conducting usability testing from the perspective of a mobile user. This will allow you to see how users interact with your app and their mobile devices.</p>
				   </div>

				   <div className="col-md-6 col-xs-12 testing-quality-option">
					   <div className="testing-quality-box blue">
						   <img className= 'ml-7' src="/images/quality-icon3.svg" alt="testing services icon"/>
					   </div>
					   
					   <h3>Error Detection</h3>
					   <p style={{marginLeft:'0px'}}>Repair any issue that may result in the degradation of your mobile application prior to launch!</p>
				   </div>
			   </div>
			</div>
		</div>
		   
		<div className="testing-coverage">
			<div className="container">
			   <h2>Mobile App Automation Testing Coverage</h2> 
			   <p>Our Quality Assurance team aims to cover below areas under Mobile App Automation Testing:</p> 
			   
			   
			   <div className="row">
					
			   </div>
			</div>
		</div> 
		 
		   
		<div className="image-container">
		   <img src="/images/mobile-testing.jpg" alt="Image with Background Color" className="fit-image"/>

		   <div className="section-contant-new">
			   <p><strong>Simulators and real devices</strong>Simulators provide a realistic environment for testing, and devices allow you to test the application hard.</p>
			   <p><strong>Manual and Automatic</strong>A combination of manual and automatic testing will produce a product with higher quality and more excellent stability.
			   </p>
			   <p><strong>A selection of mobile devices</strong>Device testing is a method of testing devices that meets the target audience's needs.</p>
			   <p><strong>iOS Devices</strong>To ensure that applications work in iOS devices as well.</p>
			   
		   </div>

	   </div>

		<div className="makes-different">
			<div className="container">
			   <h2>Why choose <strong>Techo Ninja</strong> over others?</h2>
			   <p style={{marginLeft:'40px'}}>People these days prefer using mobiles for all their needs and we make sure that your app works well on such occasions.</p>
			   <div className="row">
				   <div className="col-md-6 col-xs-12 makes-different-select">
					   <h3>Test Strategy</h3>
					   <p>Our Automation Testing Team identifies the objectives and goals of automation on the basis of the clients’ requirements.</p>
				   </div>
				   
				   <div className="col-md-6 col-xs-12 makes-different-select">
					   <h3>Test Automation & Maintenance</h3>
					   <p>In this stage, our testing team updates the test as per the changes in UI and functionality of the software.</p>
				   </div>
				   
				   <div className="col-md-6 col-xs-12 makes-different-select">
					   <h3>Defect Management</h3>
					   <p>This is the stage where our team of Automated Software Testers carry out the whole bug tracking and</p>
				   </div>
				   
				   <div className="col-md-6 col-xs-12 makes-different-select">
					   <h3>Documentation</h3>
					   <p>The Last Part of our Automation Testing Process revolves around training and documentation</p>
				   </div>
				   
						 
			   </div>
			</div>
		</div> 
		
		<div className="row connect-section">
			   <div className="col-md-12 col-sm-12 col-xs-12"> 
				   <h2> Connect to discuss your project </h2> 
				   <a href="/freePilotTest" className='themeBtn'>request free consultation</a>
			   </div> 
		   </div>
		</div>
	 
    
      </RootLayout>
  )
}
