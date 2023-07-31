import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>

<div className="banner">
  <img src="/images/framesetup.png"/>
  <div className="banner-header">
    <h2 className="h1">Industry</h2>
    <div className="breadcrumb1">
      <a href="index.html">
        <img src="/images/Homeicon.png" alt="home"/></a>
      <img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/>
      <span> Industry</span>
    </div>
  </div>
</div>
<div className="main functional-testing industry">
    <div className="page-title">
      <div className="container">
        <h2 style= {{marginLeft:'29px'}}>Techo Ninja help you become more competitive within your domain because of industry
          knowledge</h2>
      </div>
    </div>
    <div className="custom-cover">
      <div className="container">
        <ul className="list-unstyled industry-listing">
          <li>
            <div className="row encover">
              <div className="wow fadeInUp div-col col-md-6 content" data-wow-delay="0.4s">
                <h5>Healthcare</h5>
                <p>We at TechoNinja know from experience that building a healthcare application for patients and doctors
                  alike is no small feat. Destroying the app with bugs and crashes is not an option since lives can
                  easily be affected if any vital hospital/health applications stop working as intended on both sides!
                  When testing either a personal or professional hospital/health app, we ensure that our clients gain
                  immense value by taking advantage of thorough testing throughout the development process to provide
                  robust solutions that thoroughly exceed every customer's expectations.</p>
                <p>The importance of software testing and quality assurance is of high value in a software development
                  cycle. Both of the processes refines the whole process and ensure superior quality to the product.</p>

              </div>
              <div className="div-col col-md-6">
                <img src="/images/healthcare.jpg" alt=""/>
              </div>
            </div>
          </li>
          <li>
            <div className="row encover">
              <div className="div-col col-md-6">
                <img src="/images/ecommerce.jpg" alt=""/>
              </div>
              <div className="wow fadeInUp div-col col-md-6 content" data-wow-delay="0.4s">
                <h5>ECommerce</h5>
                <p>At TechoNinja, we provide cutting-edge e-com platform testing services that assess the quality, identify strengths and weaknesses, and offer improved solutions for your e-commerce business. Our e-commerce testing services help you track everything that's happening on your platform, either on mobile or a website, so that you can concentrate on what you do best - growing your business with little downtime. We work with you to identify areas for improvement that maximize value while reducing cost!</p>
                <p>Testing ECommerce sites to ensure they are accessible and responsive is beneficial in multiple ways.
                  Using the ability, innovativeness, demonstrable skill and proficiency of our handy group, Ensure compatibility
                  on multiple platforms, browsers, and mobile devices, Verify there aren't any content, design,
                  functionality, or compliance issues, We perform programming testing by differentiating
                  test situations and structures.</p>
              </div>
            </div>
          </li>
          <li>
            <div className="row encover">
              <div className="wow fadeInUp col-md-6 div-col content" data-wow-delay="0.4s">
                <h5>E-Learning</h5>
                <p>Software testing and QA are two facets that are integral to the e-learning platform development process. Testing ensures learner experience, which means there is no space for error in this process. UpDoer offers effective QA services to ensure your interactive learning applications, LMS, and content management system remain of the highest quality.</p>
                <p>Testing eLearning courses to ensure they are accessible and responsive is beneficial in multiple ways, Address all problems identified before making the platform available for learners, 
Ensure compatibility on multiple platforms, browsers, and mobile devices, Verify there aren't any content, design, functionality, or compliance issues, Helps you fix any text, visuals, or navigational element before launch.</p>
              </div>
              <div className="div-col col-md-6">
                <img src="/images/e-learning.jpg" alt=""/>
              </div>
            </div>
          </li>
          <li>
            <div className="row encover">
              <div className="div-col col-md-6">
                <img src="/images/mobile-app-industry.jpg" alt=""/>
              </div>
              <div className="wow fadeInUp div-col col-md-6 content" data-wow-delay="0.4s">
                <h5>Mobile Industry</h5>
                <p>TechoNinja has the most innovative test automation tools and skilled experts to ensure your application is ideally tested as a certified mobile app testing organization. We are one of India's best Mobile app Testing companies that offer full-cycle testing from the planning to the post-launch phase.</p>
                <p>While getting your mobile app tested sounds like a hassle, it certainly has its advantages like, 
The ability to automate test cases by using the mobile capabilities supporting framework, Ensures that there are many test forms available, focusing on mobile needs such as reliability, deployment, and interruptions, 
Conducting usability testing from the perspective of a mobile user, 
Repair any issue that may result in the degradation of your mobile application prior to launch!</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>


    <div className="row connect-section mx-0">
		<div className="col-md-12 col-sm-12 col-xs-12"> 
			<h2> Connect to discuss your project </h2> 
			<a href="free-pilot-test.php" className='themeBtn'>request free consultation</a>
		</div> 
	</div>

  </div>
      </RootLayout>
  )
}
