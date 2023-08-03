import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
			<img src="/images/acceptancetestingBanner.png"/>
			<div className="banner-header">
                    <h2 className="h1">Acceptance Testing</h2>
					<div className ="breadcrumb1">
					<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
						{/* <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
                        <span> Acceptance Testing</span>
					</div>
			</div>
            </div> 
			<div className="main functional-testing">
    <div className="new-cover">
    	<div className="container">
    		<div className="row align-items-center">
    			<div className="col-lg-12">
    				<div className="new-content">
    					<h3>Main features of Acceptance Testing services as offered by Techo Ninja are:</h3>
						<img src="/images/acceptancetesting-info.png" alt="info"/>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div className="custom-cover functional-testing-contant">
      <div className="container">
		<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">
			
			
			<h4>Our <strong> Acceptance Testing </strong>services:</h4> 
			
			<ul className="d-flex flex-wrap cm-ul hover-listing">
				<li>
				  <div className="li-cover">
					<h3>Black Box Testing</h3>
					<p>Testing of the product manually to ascertain all functionalities work as expected</p>
				  </div>
				</li>
				 <li className="active">
				  <div className="li-cover">
					<h3>Alpha & Beta Testing</h3>
					<p>Alpha testing is done at the developers' sites and involves testing the operational system by internal staff. Beta testing involves feedback from the customers themselves.</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Contract Acceptance Testing</h3>
					<p>UAT aids in identifying bugs that have been left behind during the integration testing.</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Compliance Acceptance Testing</h3>
					<p>Before a system can be accepted, it is subject to acceptance criteria. An application is tested for compliance with safety, legal, and government standards in regulation acceptance testing.</p>
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
    <img src="/images/acceptence_1.jpg" alt="Image with Background Color" className="fit-image"/>
				
					 <div className="section-contant-new">
					 <p><strong>Experienced Team of Testers</strong>At Techo Ninja, we have a team that holds experience of testing a wide variety of products and handling an array of customers, we guarantee to provide a thorough acceptance testing as per your needs.</p>
						<p><strong>Ad-hoc testing</strong>Acceptance is not when just the requirements are met but also when the user is not lost while doing something unplanned on the application  and we handle that via Ad-hoc testing</p>
						<p><strong>Meticulous attention to Detail</strong>We test your product thoroughly to make sure any problems which unit or integration tests missed will be caught during acceptance testing</p>
					 </div>
				
  </div>
	<div className="timeline-section">
		 <div className="container">
			<div className="section-title text-center py-5">
				 <h2>How the <strong>Acceptance Testing</strong> Works</h2>
				 <p style={{marginLeft:'20px'}}>
					Acceptance Testing is used to determine if your product is ready for the customer and below are the generic steps that need to be followed:
				 </p>
			</div>
			 <ul className="pb-5 text-center">
			 	<li>
				 	<div className="timeline-content">
						<h3>UAT For Mobile</h3>
						<p>To make your website applications as user-friendly they can be. We design the acceptance test plan and conduct tests to confirm that the app is ready to use.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/mapping.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>UAT for Websites</h3>
						<p>User Acceptance applications are multi-tenant, due to which there is always a risk of data theft. Our solution is to offer our clients an audit trail to ensure the security of their stored data.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/testing.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>UAT For Desktop</h3>
						<p>We work to make your application more stable to earn the trust of your users. We make sure that the software complies with user requirements and doesn't have any systematic anomalies.</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/output.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Contract Acceptance Testing</h3>
						<p>Before a system can be accepted, it is subject to acceptance criteria. An application is tested for compliance with safety, legal, and government standards in regulation acceptance testing.</p>
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
