import RootLayout from '@/app/layout'
import '../app/style994e.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
		<img src="/images/APItesting-banner.png"/>
		<div className="banner-header">
			<h2 className="h1">API Testing</h2>
			<div className="breadcrumb1">
				<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
				{/* <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
				<span> API Testing</span>
			</div>
		</div>
	</div>
			<div className="main">     
		 <div className="testing-quality-services">
			 <div className="container">
			     <p>API automation testing is important because any compromise here may lead to serious security issues that have the potential of damaging your product, your clientele and your reputation. Techo Ninja understands that and aims to uncover all such issues beforehand.</p>
				<h2>API Automation Testing Services</h2> 
				<p style= {{marginLeft:'40px'}}>Techo Ninja has a team of testers well trained in the latest API automation testing technologies and guarantees a thoroughly tested and automated product.</p> 
				
				
				<div className="row">
					<div className="col-md-6 col-xs-12 testing-quality-option">
						<div className="testing-quality-box red">
							<img className= 'ml-6' src="/images/managed-testing-icon.svg" alt="testing services icon"/>
						</div>
						
						<h3>Optimise Testing Process</h3>
						<p style= {{marginLeft:'0px'}}>you can optimize and automate the testing process. We will help you with scripting, debugging, and maintaining tests with code inspection and more.</p>
					</div>
					<div className="col-md-6 col-xs-12 testing-quality-option">
						<div className="testing-quality-box yellow">
							<img className= 'ml-6' src="/images/project-specific-icon.svg" alt="testing services icon"/>
						</div>
						
						<h3>Sutable Testing approach</h3>
						<p style= {{marginLeft:'0px'}}>Identify the loopholes in the API and check for any possible defects. We can block those error in intial phase.</p>
					</div>
					<div className="col-md-6 col-xs-12 testing-quality-option">
						<div className="testing-quality-box blue">
							<img className= 'ml-7' src="/images/quality-icon3.svg" alt="testing services icon"/>
						</div>
						
						<h3>Performance Testing</h3>
						<p style= {{marginLeft:'0px'}}>Verify if all the APIs’ features and functions of the API works or not. We can also validate performance for the system under various levels of user/ transaction load</p>
					</div>
					<div className="col-md-6 col-xs-12 testing-quality-option">
						<div className="testing-quality-box green">
							<img className= 'ml-6' src="/images/quality-icon4.svg" alt="testing services icon"/>
						</div>
						
						<h3>Error Detection</h3>
						<p style= {{marginLeft:'0px'}}>Execution of Automated / Manual tests to identify problems, such as exceptions and resource leaks</p>
					</div>
				</div>
			 </div>
		 </div>
		  
			
			
		 <div className="testing-coverage">
			 <div className="container">
				<h2>Testing Coverage</h2> 
				<p>The kinds of testing covered under API Automation Testing are as below:</p> 
				
				
				<div className="row">
			 
				</div>
			 </div>
		 </div> 
		  
		 <div className="image-container">
			<img src="/images/api_testing.jpg" alt="Image with Background Color" className="fit-image"/>

			<div className="section-contant-new">
				<p><strong>Increased Verification Speed</strong>API Automated testing requires far less time to complete when compared with manual testing for data verification.</p>
				<p><strong>API Automation</strong>With us, you can optimize and automate the testing process. We will help you with scripting, debugging, and maintaining tests with code inspection and more.
				</p>
				<p><strong>Expertise</strong>We are experts in leading industry tools for API testing. This includes functional, load, security, and a wide variety of API protocols such as REST with different verity of open source tools</p>
			</div>

		</div>
			
			
		 <div className="makes-different">
			 <div className="container">
				<h2>Why choose <strong>Techo Ninja</strong> over others?</h2>
				<p style= {{marginLeft:'40px'}}>The importance of conducting API tests is significant if you want to get a perfect product. Our team at Techo Ninja has years of experience in industry-leading technologies, an eye for quality, and guarantees that our code is compatible with the latest innovations available in the market today.
</p>
				<div className="row">
					<div className="col-md-6 col-xs-12 makes-different-select">
						<h3>We Support Testing all kinds of APIs</h3>
						<p>Trained staff to automate testing all types of APIs including REST, SOAP, JSON, XML.</p>
					</div>
					
					<div className="col-md-6 col-xs-12 makes-different-select">
						<h3>Multiple API Testing tools used</h3>
						<p>To test against a variety of values for different parameters in an API Call and the correctness of output we use tools like Postman and SOAPUI.</p>
					</div>
					
					<div className="col-md-6 col-xs-12 makes-different-select">
						<h3>Thorough Testing of the APIs</h3>
						<p>Test Cases are added to the automated test suite with utmost care making sure that all possible combinations for input values are covered.</p>
					</div>
					
					<div className="col-md-6 col-xs-12 makes-different-select">
						<h3>Load Testing and Security Testing</h3>
						<p>All APIs are tested for the times when the website load could go beyond the expected limit and for any security glitches.</p>
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
