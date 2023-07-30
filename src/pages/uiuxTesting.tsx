import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
		<img src="/images/uiuxBanner.png"/>
		<div className="banner-header">
			<h2 className="h1">UI/UX Testing</h2>
			<div className="breadcrumb1">
				<a href="index.html">
					<img src="/images/Homeicon.png" alt="home"/></a>
				<img className='arrowIcon' src="/images/arrow.png" alt="arrow"/>
				<span> UI/UX Testing</span>
			</div>
		</div>
	</div>

	<div className="main functional-testing">


<div className="new-cover">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-lg-12">
				<div className="new-content">
					<h3>Main features of UI & UX Testing services as offered by Techo Ninja are:</h3>

					<img src="/images/UI_UXtestinginfo.png" alt="info"/>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="custom-cover functional-testing-contant">
	<div className="container">
		<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">


			<h4>Our <strong> UI & UX Testing </strong>services:</h4>

			<ul className="d-flex flex-wrap cm-ul hover-listing">
				<li>
					<div className="li-cover">
						<h3>Usability Testing</h3>
						<p>Check that every component on a webpage appears in the correct dimensions, shape, and location</p>
					</div>
				</li>
				<li className="active">
					<div className="li-cover">
						<h3>Responsiveness Testing</h3>
						<p>Helps you verify the visual accuracy of all the things that end-users will see and interact with.</p>
					</div>
				</li>
				<li>
					<div className="li-cover">
						<h3>Compatibility testing</h3>
						<p>UI tests increase test coverage by conducting tests on various platforms simultaneously on actual devices and different platforms faster</p>
					</div>
				</li>
				<li>
					<div className="li-cover">
						<h3>Cross Browser Testing and Cross-Device Testing</h3>
						<p>Testing UI across different platforms simultaneously reduces the amount of time required to run every test only on one platform at a time</p>
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
	<img src="/images/ui_ux.jpg" alt="Image with Background Color" className="fit-image"/>

	<div className="section-contant-new">
		<p><strong>Navigational elements</strong>This test verifies that all navigational buttons function and redirect users to the correct page.</p>
		<p><strong>No UI component is spared</strong>We believe in being thorough at all costs and make sure to
			test all UI components with all possible values to prevent any embarrassing but at the user’s end.
		</p>
		<p><strong>Access to all possible devices and browsers</strong>We use an exhaustive pool of web browsers
			and mobile devices to catch any compatibility issues with any browser or application.</p>
	</div>

</div>
<div className="timeline-section">
	<div className="container">
		<div className="section-title text-center py-5">
			<h2>How <strong>UI & UX Testing</strong> Works</h2>
			<p style={{marginLeft:'20px'}}>UI & UX testing aims to make the product use easy and simple for an
				end user. The steps involved are:</p>
		</div>
		<ul className="pb-5 text-center">
			<li>
				<div className="timeline-content">
					<h3>Data type errors</h3>
					<p>This test verifies that valid data is entered in specific fields, such as currency or dates.</p>
				</div>
				<div className="timeline-icon">
					<img src="/images/tl-tick.png" alt="tick" />
				</div>
			</li>
			<li>
				<div className="timeline-content">
					<h3>Cross Browser Testing</h3>
					<p>This is done to make sure the user interface appears and works well on different
						resolutions and screen sizes.</p>
				</div>
				<div className="timeline-icon">
					<img src="/images/tl-test-tube.png" alt="tick" />
				</div>
			</li>
			<li>
				<div className="timeline-content">
					<h3>Type-ahead</h3>
					<p>Drop-down lists require type-ahead. If there are multiple options in a drop-down menu, the user must select the correct one by simply typing the first letter.
					</p>
				</div>
				<div className="timeline-icon">
					<img src="/images/tl-edit.png" alt="tick" />
				</div>
			</li>
			<li>
				<div className="timeline-content">
					<h3>Shortcuts for working</h3>
					<p>This test confirms that the software can create shortcuts across different browsers, platforms, and devices.</p>
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
