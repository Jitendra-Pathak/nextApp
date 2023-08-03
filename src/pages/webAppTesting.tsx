import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
		<img src="/images/webtestingbanner.png"/>
		<div className="banner-header">
			<h2 className="h1">Web App Testing</h2>
			<div className="breadcrumb1">
				<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
				{/* <img className='arrowIcon' src="/images/arrow.png" alt="arrow"/> */}
				<span> Web App Testing</span>
			</div>
		</div>
	</div>
	
	<div className="main functional-testing">
    <div className="new-cover">
    	<div className="container">
    		<div className="row align-items-center">
    			<div className="col-lg-12">
    				<div className="new-content">
    					<h3>Main features of web app testing services as offered by Techo Ninja are:</h3>

                        <img src="/images/Webtesting-info.png" alt="info"/>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div className="custom-cover functional-testing-contant">
      <div className="container">
		<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">
			
			
			<h4>Our <strong> Web App Testing </strong>services:</h4> 
			
			<ul className="d-flex flex-wrap cm-ul hover-listing">
				<li>
				  <div className="li-cover">
					<h3>Module Testing</h3>
					<p>Testing of individual units or modules of the web application. A module is the smallest individually testable part of the application</p>
				  </div>
				</li>
				 <li className="active">
				  <div className="li-cover">
					<h3>Scaling Testing</h3>
					<p>Know the scale of the app required in terms of hardware, network capacity, etc.</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Cross Browser Testing</h3>
					<p>It's essential to ensure that the website is accessible on every available version of individual web browsers.</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Load Test</h3>
					<p>Sustainability for a web app that needs to withstand peak loads without going down.</p>
				  </div>
				</li>
		   </ul>
		</div>  
      </div>
    </div>
	<div className="bottom-last-section top-cover">
		<div className="container">
			<h2>Why choose <strong>Techo Ninja</strong> over others?</h2>
			
		</div> 
	</div>

    <div className="image-container">
			<img src="/images/webapp.jpg" alt="Image with Background Color" className="fit-image"/>

			<div className="section-contant-new">
            <p><strong>ISTQB Certified Testers</strong>With the world-className team at your service, rest assured that your web app is in safe hands and you will get the highest level of quality.</p>
						<p><strong>Scrupulous work on Documentation</strong>The test cases are created with meticulous attention to detail. And all the bugs reported have all the necessary information without overdoing it.</p>
						<p><strong>Support for a wide range of tools</strong>Our staff is trained to work on multiple tools for test case creation and bug reporting as mentioned on our techstack page(link)</p>
					 
			</div>

		</div>
	<div className="timeline-section">
		 <div className="container">
			<div className="section-title text-center py-5">
				 <h2>How <strong>Web App Testing</strong> Works</h2>
				 <p style={{marginLeft:'20px'}}>
					At Techo Ninja, Testing of your web app is conducted from all angles and customized to your needs but below are the generic steps that need to be followed:
				 </p>
			</div>
			 <ul className="pb-5 text-center">
			 	<li>
				 	<div className="timeline-content">
						<h3>Test Case Creation</h3>
						<p>With The help of PRD document, We create all possible test cases for Backend and Frontend. Test cases documented to avoid bugs and cover all the application functionality.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/mapping.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Test Case Execution</h3>
						<p>All the documented test cases should be executed on required browsers with provided configuration.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/testing.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Security</h3>
						<p>Security Our security specialists conduct security audits to make sure that the application is not susceptible to cyberattacks and malware.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/output.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Reduce cost</h3>
						<p>You can save time and money by not worrying about test requirements or hiring the right engineers.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/error.png" alt="tick" />
					</div>
				 </li>
			 </ul>
			 
		 </div>
	</div> 
	
	<div className="row connect-section mx-0">
		<div className="col-md-12 col-sm-12 col-xs-12"> 
			<h2> Connect to discuss your project </h2> 
			<a href="/freePilotTest" className='themeBtn'>request free consultation</a>
		</div> 
	</div>
</div>
    
    
      </RootLayout>
  )
}
