import RootLayout from "@/app/layout";
import '../app/style001.css';
import '../app/background.css';
export default function ContactUs() {
  return (
    <RootLayout>
        <div className="banner">
			<img src="/images/functiontestingbanner.png"/>
			<div className="banner-header">
                    <h2 className="h1">Functional Testing</h2>
					<div className ="breadcrumb1">
					<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
						{/* <img className="arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
                        <span> Functional Testing</span>
					</div>
			</div>
               
            </div>	  
<div className="main functional-testing">
    
    <div className="new-cover">
    	<div className="container">
    		<div className="row align-items-center">
    			<div className="col-lg-12">
    				<div className="new-content">
    					<h3 className="h3">Main features of functional testing services as offered by Techo Ninja are:</h3>
						<img src="/images/infi1.png" alt="infi"/>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div className="custom-cover functional-testing-contant">
      <div className="container">
		<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">
			
			
			<h4>Our <strong> Functional Testing </strong>services:</h4> 
			
			<ul className="d-flex flex-wrap cm-ul hover-listing" >
				<li>
				  <div className="li-cover">
					<h3>Usability Testing</h3>
					<p>we collect qualitative and quantitative data and satisfy customers’ needs with the product</p>
				  </div>
				</li>
				 <li className="active">
				  <div className="li-cover">
					<h3>Accelerated Testing</h3>
					<p>Our dedicated team of testers ensures that you get accelerated testing and the ability to repeat the test cases.</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Functional Testing</h3>
					<p>Provides full-cycle testing activities, which include conceptualization of test cases, development of detailed test scenarios, and implementation of high-quality tests</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Regression Testing</h3>
					<p>Re-execution of functional test cases to ensure that the change introduces no unintended breaks/bugs</p>
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
    <img src="/images/functional_testing_image.png" alt="Image with Background Color" className="fit-image"/>
				
					 <div className="section-contant-new">
						<p><strong>Focus on requirements throughout</strong>The functional requirement specifications are treated seriously at every stage of testing making sure that product works as intended.</p>
						<p><strong>Simulation of Real-world scenarios</strong>The product functions are tested under real-world conditions to catch any bug before it can reach the end-users</p>
						<p><strong>ISTQB Certified Testers</strong>With the world-className team at your service, rest assured your product is in safe hands and you will get the highest level of quality.</p>
					 </div>
				
  </div>
	<div className="timeline-section">
		 <div className="container">
			<div className="section-title text-center py-5">
				 <h2>How <strong>Functional Testing</strong> Works</h2>
				 <p style={{marginLeft:'20px'}}>
					Functional testing aims to uncover any gaps between the requirements and the actual implementation, the steps involved are as below:
				 </p>
			</div>
			 <ul className="pb-5 text-center">
			 	<li>
				 	<div className="timeline-content">
						<h3>Requirements Mapping</h3>
						<p>The PRD document of the product are reviewed and are mapped to test cases</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/mapping.png" alt="mapping" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Adaptable</h3>
						<p>Because it can be easily modified to accommodate unplanned software changes, the manual method is beneficial for ad-hoc testing.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/testing.png" alt="testing" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Quality Testers</h3>
						<p>Test cases are performed by the tester according to the user's perspective. This test ensures that the application works as described.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/output.png" alt="output" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Risk Mitigation</h3>
						<p>Our skilled and professional team of testers will assess and mitigate risks based on your type of application.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/error.png" alt="error" />
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
