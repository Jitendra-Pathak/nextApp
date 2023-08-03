import RootLayout from '@/app/layout'
import '../app/style994e.css';
import '../app/background.css';

export default function Home() {
	return (
		<RootLayout>
			<div className="banner">
				<img src="/images/websiteautomation.png" />
				<div className="banner-header">
					<h2 className="h1" style={{ fontSize: '25px' }}>Website Automation Testing</h2>
					<div className="breadcrumb1">
						<a href="/">
							<img src="/images/Homeicon.png" alt="home" /></a>
							<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
						{/* <img className='arrowIcon' src="/images/arrow.png" alt="arrow" /> */}
						<span> Website Automation Testing</span>
					</div>
				</div>
			</div>


			<div className="testing-quality-services">
				<div className="container">
					<h2>Address all your regression test automation needs with our selenium automation services</h2>
					<p>If you have a website that has a large regression test suite that needs to be executed before every release and you are looking for automating them, don’t go any further. Techo Ninja has a dedicated team for Selenium Automation that will provide the highest quality of automation in a minimum amount of time.</p>
					<h2>Selenium Automation services:</h2>
					<p>Techo Ninja has a team of testers well trained in Selenium Automation and guarantees below services:</p>


					<div className="row">
						<div className="col-md-6 col-xs-12 quality-option">
							<div className="testing-quality-box red">
								<img className= 'ml-6' src="/images/managed-testing-icon.svg" alt="testing services icon" />
							</div>

							<h3>Automation of all test cases and workflows</h3>
							<p style={{ marginLeft: '0px' }}>We aim to automate all possible test cases including all workflows and edge cases</p>
						</div>
						<div className="col-md-6 col-xs-12 quality-option">
							<div className="testing-quality-box yellow">
								<img className= 'ml-6' src="/images/project-specific-icon.svg" alt="testing services icon" />
							</div>

							<h3>Option to run tests as and when needed</h3>
							<p style={{ marginLeft: '0px' }}>The automation will be done in such a way that you would be able to select what test cases you need to be run at what time
							</p>
						</div>
						<div className="col-md-6 col-xs-12 quality-option">
							<div className="testing-quality-box blue">
								<img className= 'ml-7' src="/images/quality-icon3.svg" alt="testing services icon" />
							</div>

							<h3>Test cases automated to test error handling
							</h3>
							<p style={{ marginLeft: '0px' }}>Test cases will be automated to make sure error and exceptions are handled gracefully at all times</p>
						</div>
						<div className="col-md-6 col-xs-12 quality-option">
							<div className="testing-quality-box green">
								<img className= 'ml-6' src="/images/quality-icon4.svg" alt="testing services icon" />
							</div>

							<h3>Execution reports sent via email after every run</h3>
							<p style={{ marginLeft: '0px' }}>The configuration will be done to send execution reports in emails after every test run
							</p>
						</div>
					</div>
				</div>
			</div>







			<div className="testing-coverage">
				<div className="container">
					<h2>Automation Coverage</h2>
					<p>Our Quality Assurance team aims to cover below areas under</p>

				</div>
			</div>

			<div className="image-container">
				<img src="/images/webAutomation_12.png" alt="Image with Background Color" className="fit-image" />

				<div className="section-contant-new">
					<p><strong>Increased Verification Speed</strong>Automated testing requires far less time to complete when compared with manual testing.</p>
					<p><strong>Anytime Testing Support</strong>Automated testing provides round-the-clock time coverage because computerized tests can be run at any time and in all-day, seven-day-a-week environments.
					</p>
					<p><strong>Publish Reports</strong>It covers all the other aspects, such as selecting the appropriate product, creating the relevant test data, and analyzing the results.</p>
				</div>

			</div>


			<div className="makes-different">
				<div className="container">
					<h2>What Makes Us Different</h2>
					<p style={{ marginLeft: '40px' }}>Manually repeating tests can be expensive and time-consuming. Once automated tests are created, they can be replicated repeatedly at no cost, and they are significantly faster than a manual test.
					</p>
					<div className="row">
						<div className="col-md-6 col-xs-12 makes-different-select">
							<h3>Good Quality Test</h3>
							<p>Automated testing offers a lower chance of errors, making it more reliable and appropriate for businesses.</p>
						</div>

						<div className="col-md-6 col-xs-12 makes-different-select">
							<h3>Expertise Testers</h3>
							<p>We are experts in all leading open source and commercial automation tools for the web, desktop, and mobile applications.</p>
						</div>

						<div className="col-md-6 col-xs-12 makes-different-select">
							<h3>Efficiency increased
							</h3>
							<p>Cut the regression testing cycle by as much as 80%, which allows you to make faster releases with greater frequency.</p>
						</div>

						<div className="col-md-6 col-xs-12 makes-different-select">
							<h3>Easy to Understand automation</h3>
							<p>Automated Testing can reduce the time it takes to run repetitive Automation tests from days to hours, thus significantly saving costs on testing.</p>
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
		</RootLayout>
	)
}
