import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
			<img src="/images/dekstoptestingbanner.png"/>
			<div className="banner-header">
                    <h2 className="h1">Desktop Testing</h2>
					<div className ="breadcrumb1">
					<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
						{/* <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
                        <span> Desktop Testing</span>
					</div>
			</div>
            </div> 
	<div className="main functional-testing">

<div className="new-cover">
	<div className="container">
		<div className="row align-items-center">
			<div className="col-lg-12">
				<div className="new-content">
					<img src="/images/desktoptesting-info.png" alt="info"/>
				</div>
			</div>
		</div>
	</div>
</div>
<div className="custom-cover functional-testing-contant">
  <div className="container">
	<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">
		
		
		<h4>Our <strong> Desktop App Testing </strong>services:</h4> 
		
		<ul className="d-flex flex-wrap cm-ul hover-listing">
			<li>
			  <div className="li-cover">
				<h3>Installation Testing</h3>
				<p>Testing that the desktop application installing and uninstalling properly across specific environments</p>
			  </div>
			</li>
			 <li className="active">
			  <div className="li-cover">
				<h3>Compatibility Testing</h3>
				<p>Ensure the app is compatible with multiple browsers and operating systems (OS)</p>
			  </div>
			</li>
			 <li>
			  <div className="li-cover">
				<h3>GUI Testing</h3>
				<p>Ensuring that the GUI and the overall readability of the application are according to its functionality.</p>
			  </div>
			</li>
			 <li>
			  <div className="li-cover">
				<h3>Functional Testing</h3>
				<p>Provides full-cycle testing activities, which include conceptualization of test cases, development of detailed test scenarios, and implementation of high-quality tests </p>
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
<img src="/images/desktop-testing.jpg" alt="Image with Background Color" className="fit-image"/>
			
				 <div className="section-contant-new">
				 <p><strong>Experienced Team of Testers</strong>With a team of ISTQB certified testers and experienced in testing a wide variety of desktop apps, rest assured that your app will be tested as it needs to be.</p>
					<p><strong>Testing with 100% coverage</strong>At Techo Ninja QA, we don’t only test to make sure that the app works as expected, but we also go through all possible edge and negative scenarios</p>
					<p><strong>Special focus on Usability</strong>Your application will be tested to ensure that the user experience is the best and leads to more customers for you.</p>
				 </div>
			
</div>
<div className="timeline-section">
	 <div className="container">
		<div className="section-title text-center py-5">
			 <h2>How <strong>Desktop App Testing</strong> Works</h2>
			 <p style={{marginLeft:'20px'}}>
				Desktop App Testing aims to ensure your Desktop applications work smoothly on all supported desktop machines and below are the generic steps that need to be followed:
			 </p>
		</div>
		 <ul className="pb-5 text-center">
			 <li>
				 <div className="timeline-content">
					<h3>Installation Testing</h3>
					<p>Our team tests your desktop app with various browsers, operating devices, and hardware. To ensure that every user gets the best experience, we try it.</p>
				</div>
				<div className="timeline-icon">
					<img src="/images/mapping.png" alt="tick" />
				</div>
			 </li>
			 <li>
				 <div className="timeline-content">
					<h3>GUI Testing</h3>
					<p>Ensuring that the GUI and the overall readability of the application are according to its functionality.</p>
				</div>
				<div className="timeline-icon">
					<img src="/images/testing.png" alt="tick" />
				</div>
			 </li>
			 <li>
				 <div className="timeline-content">
					<h3>Smoke Testing</h3>
					<p>Our team performs smoke tests to ensure your desktop application is performing as it should. It also tests the stability and functionality of your app's build.</p>
				</div>
				<div className="timeline-icon">
					<img src="/images/output.png" alt="tick" />
				</div>
			 </li>
			 <li>
				 <div className="timeline-content">
					<h3>Cross-platform Testing</h3>
					<p>Comprehensive testing across multiple platforms and systems to ensure smooth application performance.</p>
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
