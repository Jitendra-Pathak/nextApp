import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
      <div className="banner">
		<img src="/images/Mobileapptesting.png"/>
		<div className="banner-header">
			<h2 className="h1">Mobile App Testing</h2>
			<div className="breadcrumb1">
				<a href="index.html">
					<img src="/images/Homeicon.png" alt="home"/></a>
				<img className="arrowIcon" src="/images/arrow.png" alt="arrow"/>
				<span> Mobile App Testing</span>
			</div>
		</div>
	</div>


	<div className="main functional-testing">

		<div className="new-cover">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-12">
						<div className="new-content">
							<h3>Main features of Mobile App Testing services as offered by Techo Ninja are:</h3>
							<img src="/images/Mobileapptesting-info.png" alt="info"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="custom-cover functional-testing-contant">
			<div className="container">
				<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">


					<h4>Our <strong> Mobile Apps Testing </strong>services:</h4>

					<ul className="d-flex flex-wrap cm-ul hover-listing">
						<li>
							<div className="li-cover">
								<h3>Usability Testing</h3>
								<p>We perform mobile application testing from the perspective of the end-user. Our main fouse is application should be easy to use 
									and fullfil user's requirement.
								</p>
							</div>
						</li>
						<li className="active">
							<div className="li-cover">
								<h3>Functional Testing</h3>
								<p>This testing is to ensure that all the high priority functions of a mobile application
									should work as expected and nothing break the application functionality.</p>
							</div>
						</li>
						<li>
							<div className="li-cover">
								<h3>Performance Testing</h3>
								<p>The Mobile Application is tested on mobile devices with low-end and high-end
									configurations in different conditions</p>
							</div>
						</li>
						<li>
							<div className="li-cover">
								<h3>Compatibility Testing</h3>
								<p>We execute functional test cases on different devices we also verify the web view of application if provided.</p>
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
			<img src="/images/mobileTesting.jpg" alt="Image with Background Color" className="fit-image"/>

			<div className="section-contant-new">
				<p><strong>Dedicated Device Farm</strong>We have an ingenious mix of devices and services to give you
					exactly what you need in terms of mobile app testing</p>
				<p><strong>Customized testing according to your targeted audience</strong>We take special care to application via
					test on different the devices and configurations that will actually be used by your targeted traffic.
				</p>
				<p><strong>Use of Simulators and real devices</strong>Simulators provide a realistic environment for testing, and devices allow you to test the application hard.</p>

			</div>
		</div>
		<div className="timeline-section">
			<div className="container">
				<div className="section-title text-center py-5">
					<h2>How <strong>Mobile Testing</strong> Works</h2>
					<p style={{marginLeft:'20px'}}>
						Mobile App Testing aims to uncover any bugs that could be device specific, configuration
						specific or network specific via steps as below:
					</p>
				</div>
				<ul className="pb-5 text-center">
					<li>
						<div className="timeline-content">
							<h3>A selection of mobile devices</h3>
							<p>Device testing is a method of testing devices that meets the target audience's needs.</p>
						</div>
						<div className="timeline-icon">
							<img src="/images/tl-tick.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
							<h3>Network</h3>
							<p>To ensure that applications work in challenging network environments, testing them under different network conditions is crucial.</p>
						</div>
						<div className="timeline-icon">
							<img src="/images/tl-test-tube.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
							<h3>Bug reporting</h3>
							<p>Repair any issue that may result in the degradation of your mobile application prior to launch!</p>
						</div>
						<div className="timeline-icon">
							<img src="/images/tl-edit.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
							<h3>Performance Testing</h3>
							<p>Automated Testing can verify the application's performance and behavior using load/stress.</p>
						</div>
						<div className="timeline-icon">
							<img src="/images/tl-winner.png" alt="tick" />
						</div>
					</li>
				</ul>

			</div>
		</div>
	
		<div className="row connect-section mx-0">
			<div className="col-md-12 col-sm-12 col-xs-12">
				<h2> Connect to discuss your project </h2>
				<a href="free-pilot-test.php">request free consultation</a>
			</div>
		</div>
	</div>
      </RootLayout>
  )
}
