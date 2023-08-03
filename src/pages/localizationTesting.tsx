import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
			<img src="/images/LocalisationtestingBanner.png"/>
			<div className="banner-header">
                    <h2 className="h1">Localization Testing</h2>
					<div className ="breadcrumb1">
					<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
						{/* <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
                        <span> Localization Testing</span>
					</div>
			</div>
            </div> 

			<div className="main functional-testing">
    <div className="new-cover">
    	<div className="container">
    		<div className="row align-items-center">
    			<div className="col-lg-12">
    				<div className="new-content">
    					<h3>Main features of Localization Testing services as offered by Techo Ninja are:</h3>
    					
						<img src="/images/Localizationtestinginfo.png" alt="info"/>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div className="custom-cover functional-testing-contant">
      <div className="container">
		<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">
			
			
			<h4>Our <strong> Localization Testing </strong>services:</h4> 
			
			<ul className="d-flex flex-wrap cm-ul hover-listing">
				<li>
				  <div className="li-cover">
					<h3>Usability Testing</h3>
					<p>Ease-Of-Use of the application from the perspective of the end-user in a particular region</p>
				  </div>
				</li>
				 <li className="active">
				  <div className="li-cover">
					<h3>Responsiveness Testing</h3>
					<p>The product is tested on multiple resolutions and screen sizes for all supported languages</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Functional Testing</h3>
					<p>This testing is to ensure that all the intended functions of an application work in all supported languages</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Cross Browser Testing and Cross-Device Testing</h3>
					<p>Testing on multiple browsers and devices in different languages</p>
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
    <img src="/images/localization-testing.png" alt="Image with Background Color" className="fit-image"/>
				
					 <div className="section-contant-new">
					 <p><strong>Proofreading by language experts</strong> To ensure that the localized version of your products clicks with the local users, proofreading is done by language experts before testing begins.</p>
						<p><strong>Region Specific Testing</strong>Testing will not be limited to only the language, it will also include region-specific stuff like phone number, date and time formats</p>
						<p><strong>Testing of Localization Efforts</strong> We use tools like HotJar and Mixpanel to evaluate how the localized product is used by the intended local users and how they react to it</p>
					 </div>
				
  </div>
	<div className="timeline-section">
		 <div className="container">
			<div className="section-title text-center py-5">
				 <h2>How <strong>Localization Testing</strong> Works</h2>
				 <p style={{marginLeft:'20px'}}>Localization testing aims to attract users from different parts of the world by making the product work in their language. The steps involved are:
				 </p>
			</div>
			 <ul className="pb-5 text-center">
			 	<li>
				 	<div className="timeline-content">
						<h3>Pre-localization Testing</h3>
						<p>To help create test cases that will be executed during localization testing </p>
					</div>
					<div className="timeline-icon">
						<img src="/images/mapping.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Proofread by Language Experts</h3>
						<p>Before embarking on the process of localization testing, all the documentation is reviewed</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/testing.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Functional and regional testing</h3>
						<p>To ensure that all functions work and regional standards are met</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/output.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Analysing regional user behaviour</h3>
						<p>Analysing how a regional user uses the products and using the data to determine if any UI/locale changes are needed</p>
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
