import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
			<img src="/images/ecommercetestingBanner.png"/>
			<div className="banner-header">
                    <h2 className="h1">E-commerce Testing</h2>
					<div className ="breadcrumb1">
					<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
						{/* <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
                        <span> E-commerce Testing</span>
					</div>
			</div>
            </div> 
			<div className="main functional-testing">
   
    <div className="new-cover">
    	<div className="container">
    		<div className="row align-items-center">
    			<div className="col-lg-12">
    				<div className="new-content">
    					<h3>Main features of E-Commerce Testing services as offered by Techo Ninja are:</h3>
						<img src="/images/ecommercetesting-info.png" alt="info"/>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div className="custom-cover functional-testing-contant">
      <div className="container">
		<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">
			
			
			<h4>Our <strong> E-commerce Testing </strong>services:</h4> 
			
			<ul className="d-flex flex-wrap cm-ul hover-listing">
				<li>
				  <div className="li-cover">
					<h3>Functional Testing</h3>
					<p>Testing service that integrates with mobile and web-based applications is an essential requirement for retailers that have developed custom Ecommerce solutions.</p>
				  </div>
				</li>
				 <li className="active">
				  <div className="li-cover">
					<h3>Usability Testing</h3>
					<p>Provides full-cycle testing activities, which include conceptualization of test cases, development of detailed test scenarios, and implementation of high-quality tests</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Security Testing</h3>
					<p>Make sure your system remains secure and ensures that the system is secure and safe.</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Performance Testing</h3>
					<p>Testing to make sure the performance of the application is not compromised under high load </p>
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
    <img src="/images/ecommerce-testing.jpg" alt="Image with Background Color" className="fit-image"/>
				
					 <div className="section-contant-new">
					 <p><strong>Special checklist for E-commerce Testing</strong>Special attention is given to Security and Performance Testing along with Functional testing to ensure its success on launch.</p>
						<p><strong>ISTQB Certified and Experienced Testers</strong>With the world-className team at your service, your e-commerce application will be tested thoroughly with meticulous attention to detail</p>
						<p><strong>Responsiveness and usability testing</strong> The e-commerce website will only be successful when it works well on mobile devices and is easy to use.</p>
					 </div>
				
  </div>
	<div className="timeline-section">
		 <div className="container">
			<div className="section-title text-center py-5">
				 <h2>How <strong>E-Commerce Testing</strong> Works</h2>
				 <p style={{marginLeft:'20px'}}>E-commerce testing aims to make the shopping experience for your customers fulfilling. The steps involved are:</p>
			</div>
			 <ul className="pb-5 text-center">
			 	<li>
				 	<div className="timeline-content">
						<h3>Compatibility Testing</h3>
						<p>Compatibility testing plays a vital role in testing an e-commerce site or application; it helps by reporting issues such as lack of support for browsers or significant operating systems.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/mapping.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Security Testing</h3>
						<p>Security testing for eCommerce applications can assist companies in identifying and addressing security concerns in advance to avoid financial risk and adhere to international standards to minimize cy</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/testing.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Automation Testing</h3>
						<p>Automation does not require the same amount of time and effort as manual tests, which can speed up the delivery process.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/output.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>UI & UX Testing</h3>
						<p>We have frameworks, toolkits, and checklists that perform automatic UI validation across OEMs, browsers, and O/S.</p>
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
