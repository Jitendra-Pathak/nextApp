import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
		<img src="/images/CompatibilitytestingBanner.png"/>
		<div className="banner-header">
			<h2 className="h1">Compatibility Testing</h2>
			<div className="breadcrumb1">
				<a href="index.html">
					<img src="/images/Homeicon.png" alt="home"/></a>
				<img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/>
				<span> Compatibility Testing</span>
			</div>
		</div>
	</div>
	
			<div className="main functional-testing">

		<div className="new-cover">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-12">
						<div className="new-content">
							<h3>Main features of Compatibility Testing services as offered by Techo Ninja are:</h3>
							<img src="/images/Compatibility-testing-info.png" alt="info"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="custom-cover functional-testing-contant">
			<div className="container">
				<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">


					<h4>Our <strong> Compatibility Testing </strong>services:</h4>

					<ul className="d-flex flex-wrap cm-ul hover-listing">
						<li>
							<div className="li-cover">
								<h3>Cross-Browser Testing</h3>
								<p>If your application works on browsers, we test on all the different versions and
									their supported versions for the application.</p>
							</div>
						</li>
						<li className="active">
							<div className="li-cover">
								<h3>Hardware Compatibility Testing</h3>
								<p>Verifying that the application works on the different configurations of hardware that
									your application supports</p>
							</div>
						</li>
						<li>
							<div className="li-cover">
								<h3>Network Testing</h3>
								<p>To ensure that applications work in challenging network environments, testing them
									under different network conditions is crucial.</p>
							</div>
						</li>
						<li>
							<div className="li-cover">
								<h3>Devices Compatibility Testing</h3>
								<p>Your application is installed and tested on all kinds of devices andconfiguration
									that you trageted to
									support</p>
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
			<img src="/images/compatinity-testing.jpg" alt="Image with Background Color" className="fit-image"/>

			<div className="section-contant-new">
				<p><strong>Experienced Team of Testers</strong>We have a team that is experienced in testing products on
					multiple hardware and software configurations and knows what to expect.</p>
				<p><strong>Testing customized to your needs</strong>Not all products are the same and compatibility
					testing expectations can’t be the same too, we only aim to test exactly according to your product
					and your needs.</p>
				<p><strong>Specialized in backward and forward compatibility testing</strong>We will be testing your
					product for backward as well as forward compatibility where applicable.</p>
			</div>

		</div>
		<div className="timeline-section">
			<div className="container">
				<div className="section-title text-center py-5">
					<h2>How <strong>Compatibility Testing</strong> Works</h2>
					<p style={{marginLeft:'20px'}}>
						Compatibility Testing aims to ensure your application works without any glitches with all the
						different kinds of environments you aim to support and below are the generic steps that need to
						be followed:
					</p>
				</div>
				<ul className="pb-5 text-center">
					<li>
						<div className="timeline-content">
							<h3>Defining Test Strategy</h3>
							<p>According to your needs and your customers, first, a comprehensive list of environments
								that need to be tested is prepared</p>
						</div>
						<div className="timeline-icon">
							<img src="/images/tl-tick.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
							<h3>Focus indicators</h3>
							<p>For people who have difficulty seeing or impaired motor function, this is especially important.</p>
						</div>
						<div className="timeline-icon">
							<img src="/images/tl-test-tube.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
							<h3>Testing on needed Environments</h3>
							<p>Test Case execution is conducted on all supported environments in terms of supported
								software, hardware, browsers, devices, etc.</p>
						</div>
						<div className="timeline-icon">
							<img src="/images/tl-edit.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
							<h3>Understandable</h3>
							<p>It is essential that users can not only perceive and use websites but also understand
								them. It is essential that content and navigation of websites must be checked before
								launch.</p>
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
