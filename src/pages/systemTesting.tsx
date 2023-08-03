import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
		<img src="/images/System-TestingBanner.png"/>
		<div className="banner-header">
			<h2 className="h1">System Testing</h2>
			<div className="breadcrumb1">
				<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
				{/* <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
				<span> System Testing</span>
			</div>
		</div>
	</div>

	<div className="main functional-testing">
		<div className="new-cover">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-12">
						<div className="new-content">
							<h3>Main features of System Testing services as offered by Techo Ninja are:</h3>
							<img src="/images/systemtesting-info.png" alt="info"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="custom-cover functional-testing-contant">
			<div className="container">
				<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">


					<h4>Our <strong> System Testing </strong>Services:</h4>

					<ul className="d-flex flex-wrap cm-ul hover-listing">
						<li>
							<div className="li-cover">
								<h3>Usability Testing</h3>
								<p>Provides full-cycle testing activities, which include conceptualization of test cases, development of detailed test scenarios, and implementation of high-quality tests</p>
							</div>
						</li>
						<li className="active">
							<div className="li-cover">
								<h3>Load Testing</h3>
								<p>Subjecting the product to expected real-life load such that the system does not fail
									in the real world</p>
							</div>
						</li>
						<li>
							<div className="li-cover">
								<h3>Functional Testing</h3>
								<p>Testing service that integrates with mobile and web-based applications is an essential requirement for retailers that have developed custom Ecommerce solutions.</p>
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
			<img src="/images/system-testing.jpg" alt="Image with Background Color" className="fit-image"/>

			<div className="section-contant-new">
				<p><strong>Testing customized to your needs</strong>We formulate our testing strategy only once we know
					your product and the kind of testing it needs</p>
				<p><strong>A dedicated lab for testing in different environments</strong>We have a dedicated lab with
					all popular Operating Systems, browsers and devices to test your product against for comprehensive
					compatibility testing</p>
				<p><strong>Meticulous attention to Detail</strong>We not only test your system as a whole but also go
					through each small functionality or component for maximum testing coverage</p>
			</div>

		</div>
		<div className="timeline-section">
			<div className="container">
				<div className="section-title text-center py-5">
					<h2>How <strong>System Testing</strong> Works</h2>
					<p style={{marginLeft:'20px'}}>
						System Testing aims to test your product from end to end making sure nothing breaks when all
						modules work together and below are the generic steps that need to be followed:
					</p>
				</div>
				<ul className="pb-5 text-center">
					<li>
						<div className="timeline-content">
						<h3>Requirements Mapping</h3>
						<p>The PRD document of the product are reviewed and are mapped to test cases</p>
					</div>
						<div className="timeline-icon">
							<img src="/images/mapping.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
						<h3>Quality Testers</h3>
						<p>Test cases are performed by the tester according to the user's perspective. This test ensures that the application works as described.</p>
					</div>
						<div className="timeline-icon">
							<img src="/images/testing.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
						<h3>UI & UX Testing</h3>
						<p>We have frameworks, toolkits, and checklists that perform automatic UI validation across OEMs, browsers, and O/S.</p>
					</div>
						<div className="timeline-icon">
							<img src="/images/output.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
							<h3>Performance Testing</h3>
							<p>The product is tested to ensure that the product performs satisfactorily in real life
								situations</p>
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
