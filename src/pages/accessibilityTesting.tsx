import RootLayout from '@/app/layout'
import '../app/style994e.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
		<img src="/images/Mobileautomationbanner.png"/>
		<div className="banner-header">
			<h2 className="h1" style={{fontSize:'25px'}}>Accessibility Testing</h2>
			<div className="breadcrumb1">
				<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
				{/* <img  className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
				<span> Accessibility Testing</span>
			</div>
		</div>
	</div>

			<div className="main">  
		    
		 <div className="testing-quality-services">
			 <div className="container">
			     <p>Accessibility Testing WCAG 2.1 at Techo Ninja is accessible and easy to use. Here at Techo Ninja, we offer online web accessibility testing that provides you with the most comprehensive automated accessibility audit of any given website or software.</p>
				<h2>Accessibility Testing Highlights:</h2> 
				<p>The advantages of web accessibility aren't limited to their immediate impact on people with disabilities; below are some of the things you can achieve by web accessibility:</p> 
				
				
				<div className="row">
					<div className="col-md-6 col-xs-12 testing-quality-option">
						<div className="testing-quality-box red">
							<img className= 'ml-6' src="/images/managed-testing-icon.svg" alt="testing services icon"/>
						</div>
						
						<h3>Accesible Inspection</h3>
						<p style={{marginLeft:'0px'}}>Makes the website accessible for society thus, reaching a larger audience</p>
					</div>
					<div className="col-md-6 col-xs-12 testing-quality-option">
						<div className="testing-quality-box yellow">
							<img className= 'ml-6' src="/images/project-specific-icon.svg" alt="testing services icon"/>
						</div>
						
						<h3>Higher Quality and CodeBase</h3>
						<p style={{marginLeft:'0px'}}>Applications and websites that were designed using accessibility as a primary goal are likely to have higher-quality codebases.</p>
					</div>
					<div className="col-md-6 col-xs-12 testing-quality-option">
						<div className="testing-quality-box blue">
							<img className= 'ml-7' src="/images/quality-icon3.svg" alt="testing services icon"/>
						</div>
						
						<h3>Useablity</h3>
						<p style={{marginLeft:'0px'}}>Testing accessibility can be viewed as a concept that overlaps usability that aims to enhance the usability and experience for users of a service or product. Obtain accessibility certification and reduce legal exposure</p>
					</div>
					<div className="col-md-6 col-xs-12 testing-quality-option">
						<div className="testing-quality-box green">
							<img className= 'ml-6' src="/images/quality-icon4.svg" alt="testing services icon"/>
						</div>
						
						<h3>Content Testing</h3>
						<p style={{marginLeft:'0px'}}>The creation of a website that is accessible helps the website content be more likely to be discovered by visitors. Testing accessibility improves the quality of the application in a variety of ways</p>
					</div>
				</div>
			 </div>
		 </div>

		 <div className="testing-coverage">
			 <div className="container">
				<h2>Accessibility Testing Coverage</h2> 
				<p>Our Quality Assurance team aims to cover below areas under accessibility Testing:</p> 
				
				
				<div className="row">
					 
				</div>
			 </div>
		 </div> 
		  
		 <div className="image-container">
			<img src="/images/laptop-with.jpg" alt="Image with Background Color" className="fit-image"/>

			<div className="section-contant-new">
				<p><strong>Structural Inspection</strong>We use structural inspection to describes the various components of the software application or the web page as well as their relation with one another</p>
				<p><strong>Understandable</strong>It is essential that users can not only perceive and use websites but also understand them. It is essential that content and navigation of websites must be checked before launch.
				</p>
				<p><strong>User testing</strong>Users are an integral part of this process. They review the software from their point of view. This helps the team to resolve any issues that were not yet identified.</p>
			</div>

		</div>
			
			
		 <div className="makes-different">
			 <div className="container">
				<h2>Why choose <strong>Techo Ninja</strong> over others?</h2>
				<div className="row">
					<div className="col-md-6 col-xs-12 makes-different-select">
						<h3>Focus indicators</h3>
						<p>For people who have difficulty seeing or impaired motor function, this is especially important.</p>
					</div>
					
					<div className="col-md-6 col-xs-12 makes-different-select">
						<h3>Operability</h3>
						<p>Making sure all the navigation and UI components are as accessible to all uses as possible.</p>
					</div>
					
					<div className="col-md-6 col-xs-12 makes-different-select">
						<h3>3rd Party Integrations Tested</h3>
						<p>Along with testing functionality of the endpoints thoroughly, we make sure to test all 3rd party integrations before the test completion</p>
					</div>
					
					<div className="col-md-6 col-xs-12 makes-different-select">
						<h3>Perceivable</h3>
						<p>We ensure that the information and components of the user interface (UI) must be presented so that users can easily be viewed or can be narrated.</p>
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
		 </div>
		 
      </RootLayout>
  )
}
