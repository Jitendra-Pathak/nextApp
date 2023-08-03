import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
		<img src="/images/QAconsultancybanner.png"/>
		<div className="banner-header">
			<h2 className="h1">Qa Consultancy</h2>
			<div className="breadcrumb1">
				<a href="/">
					<img src="/images/Homeicon.png" alt="home"/></a>
					<span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
				{/* <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/> */}
				<span> Qa Consultancy</span>
			</div>
		</div>
	</div>
			
	<div className="main functional-testing">
    <div className="new-cover">
    	<div className="container">
    		<div className="row align-items-center">
    			<div className="col-lg-12">
    				<div className="new-content">
    					<h3>Main features of QA consultancy services as offered by Techo Ninja are:</h3>
						<img src="/images/Compatibility-testing-info.png" alt="info"/>
    				</div>
    			</div>
    		</div>
    	</div>
    </div>
    <div className="custom-cover functional-testing-contant">
      <div className="container">
		<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">
			
			
			<h4>Our <strong> QA Consultancy </strong>Services:</h4> 
			
			<ul className="d-flex flex-wrap cm-ul hover-listing">
				<li>
				  <div className="li-cover">
					<h3>Requirement Analysis</h3>
					<p>We first understand the processes currently followed and then analyse what improvements are needed</p>
				  </div>
				</li>
				 <li className="active">
				  <div className="li-cover">
					<h3>ROI focused solutions</h3>
					<p>We only suggest solutions focusing on return on investment for you in the long run</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>Identification of tools suitable for your needs</h3>
					<p>The tools that would improve your processes will only be suggested</p>
				  </div>
				</li>
				 <li>
				  <div className="li-cover">
					<h3>QA specific project management</h3>
					<p>According to your needs, scoping, monitoring and execution of your project will be handled by our team</p>
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
			<img src="/images/qa-consultancy.jpg" alt="Image with Background Color" className="fit-image"/>

			<div className="section-contant-new">
			<p><strong>Individuals assigned only with relevant experience</strong>We understand the importance of QA consultancy for you and will assign only suitable individuals to your project</p>
						<p><strong>Solutions provided only after careful analysis</strong>Any improvements or tools we suggest will only be after assiduous comprehension of your processes and needs</p>
						<p><strong>We work as a team</strong>We will be there with you till the time you need us and will ensure proper knowledge transfer and training before ending our contract.</p>
					 
			</div>
	</div>
	<div className="timeline-section">
		 <div className="container">
			<div className="section-title text-center py-5">
				 <h2>How <strong>QA Consultancy</strong> Works</h2>
				 <p style={{marginLeft:'20px'}}>
					QA consultancy is a service offered when you are looking for guidance in terms of what QA processes and methodologies should be followed in your organization and below are the generic steps that are generally followed:
				 </p>
			</div>
			 <ul className="pb-5 text-center">
			 	<li>
				 	<div className="timeline-content">
						<h3>Requirement Analysis</h3>
						<p>Analysis of the testing processes and methodologies being followed by the organization</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/mapping.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Identification of Gaps</h3>
						<p>Any issues that could hamper the smooth functioning of the QA and the improvements needed are figured out</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/testing.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Evaluation of available options</h3>
						<p>All the available options in terms of tools and processes are evaluated</p>
					</div>
					<div className="timeline-icon">
						<img src="/images/output.png" alt="tick" />
					</div>
				 </li>
				 <li>
				 	<div className="timeline-content">
						<h3>Recommend changes and see them through</h3>
						<p>Needed solutions are recommended and any help needed in implementing the solutions is provided</p>
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
