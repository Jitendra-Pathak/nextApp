import RootLayout from '@/app/layout'
import '../app/stylea2a4.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		 <div className="banner">
    <img src="/images/approach-us.png"/>
    <div className="banner-header">
      <h2 className="h1">Our Approach</h2>
      <div className="breadcrumb1">
        <a href="index.html">
          <img src="/images/Homeicon.png" alt="home"/></a>
        <img className='arrowIcon' src="/images/arrow.png" alt="arrow"/>
        <span> Our Approach</span>
      </div>
    </div>
  </div>

  <div className="main">
    <div className="ouality-cover">
      <div className="container">
        <div className="row">
          <div className="col-12 left-cover text-center mb-4">
            <h2>BENEFITS WE DELIVER</h2>
            <p>At TechoNinja, we're passionate about software testing. We aim to give clients software testing solutions
              that will help them to minimize the risk of being left behind because of technical issues with their
              product or service. Our tailored solutions has given many businesses high-end functionality without
              sacrificing things such as quality assurance which has allowed us to deliver an end product that's able to
              meet all industry standards.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="how-we-start">
      <div className="container">
        <div className="row">
          <div className="col-12 left-cover text-center mb-4">
            <h2>HOW WE WORK</h2>
            <p>TechoNinja is a full-stack software testing company that provides robust, scalable and commercially
              viable solutions to test the complex business processes. We are a young, fast-growing company with a team
              of experienced QA engineers.</p>
            <p>Our unique testing methodologies help the clients to deliver the most secure and robust products/services
              at a minimum cost</p>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-md-7">
          <div className="new-content">
            <img src="/images/inforequested.png" alt="info"/>
          </div>
        </div>
          <div className="col-md-5">
            <img className="work-art" src="images/how-we-work.jpg" alt=""/>
          </div>
        </div>
      </div>
    </div>
    <div className="engagement-section">
      <div className="container">
        <div className="row">
          <div className="col-12 left-cover text-center mb-4">
            <h2>ENGAGEMENT MODELS</h2>
          </div>
        </div>
        <div className="row row-inline green-block-all">
          <div className="col-md-4 col-sm-6 col-xs-12 green-block-item">
            <div className="green-block-inside js-green-block-hover">
              <h3 className="green-block-title title-h3 t-uppercase">FIXED PRICE MODEL</h3>
              <div className="green-block-main">
                <ul className="list-arrow">
                  <li>Project is rather small, up to 100 work-hours.</li>
                  <li>Project requirements and scope the of work are clear.</li>
                  <li>Project is not expected to be often and considerably altered.</li>
                  <li>Customer wants to establish the project budget in advance.</li>
                </ul>
              </div>
              <div className="green-block-hover js-hover">
                <div className="arrow-up">
                  <div className="arrow-down-inside"></div>
                </div>
                <div className="green-block-subtitle">When to use?</div>
                <div className="green-block-content">
                  <div className="green-block-text">Fixed Cost model relieves our clients of the risks of unexpected
                    complications during the project that may require more effort and resources. The price will remain
                    the same anyway, it includes some risk remedy.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 green-block-item">
            <div className="green-block-inside js-green-block-hover">
              <h3 className="green-block-title title-h3 t-uppercase">TIME &amp; MATERIALS MODEL</h3>
              <div className="green-block-main">
                <ul className="list-arrow">
                  <li>Hard or impossible to determine the project cost at the beginning</li>
                  <li>Project scope and requirements are undefined</li>
                  <li>Project requirements often change; </li>
                  <li>Client prefers to plan and manage all the works at the project</li>
                </ul>
              </div>
              <div className="green-block-hover js-hover">
                <div className="arrow-up">
                  <div className="arrow-down-inside"></div>
                </div>
                <div className="green-block-subtitle">When to use?</div>
                <div className="green-block-content">
                  <div className="green-block-text">Time & Materials model is very transparent and allows the clients to
                    manage the project, define the scope of work and schedule, and save money.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 green-block-item">
            <div className="green-block-inside js-green-block-hover">
              <h3 className="green-block-title title-h3 t-uppercase">DEDICATED TEAM MODEL</h3>
              <div className="green-block-main">
                <ul className="list-arrow">
                  <li>Project is long-term. </li>
                  <li>Requirements and scope of work are undefined.</li>
                  <li>Project is an agile software development.</li>
                  <li>Client wishes to manage the hired team as his home one.</li>
                </ul>
              </div>
              <div className="green-block-hover js-hover">
                <div className="arrow-up">
                  <div className="arrow-down-inside"></div>
                </div>
                <div className="green-block-subtitle">When to use?</div>
                <div className="green-block-content">
                  <div className="green-block-text">Dedicated team model is considered to be the most convenient and
                    cost-saving model for long-term projects. Our clients like it because of predictable expenses and
                    flexibility of the scope of work.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


    <div className="engagement-section engagement-section-mobile" style={{display:'none'}}>
      <div className="container">
        <h2 className="text-center">ENGAGEMENT MODELS</h2>
        <div className="row row-inline green-block-all">
          <div className="col-md-4 col-sm-6 col-xs-12 green-block-item">
            <div className="green-block-inside js-green-block-hover">
              <h3 className="green-block-title title-h3 t-uppercase">FIXED PRICE MODEL</h3>
              <div className="green-block-main">
                <ul className="list-arrow">
                  <li>Project is rather small, up to 100 work-hours.</li>
                  <li>Project requirements and scope the of work are clear.</li>
                  <li>Project is not expected to be often and considerably altered.</li>
                  <li>Customer wants to establish the project budget in advance.</li>
                </ul>
              </div>
              <div className="green-block-hover js-hover">
                <div className="arrow-up">
                  <div className="arrow-down-inside"></div>
                </div>
                <div className="green-block-subtitle">When to use?</div>
                <div className="green-block-content">
                  <div className="green-block-text">Fixed Cost model relieves our clients of the risks of unexpected
                    complications during the project that may require more effort and resources. The price will remain
                    the same anyway, it includes some risk remedy.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 green-block-item">
            <div className="green-block-inside js-green-block-hover">
              <h3 className="green-block-title title-h3 t-uppercase">TIME &amp; MATERIALS MODEL</h3>
              <div className="green-block-main">
                <ul className="list-arrow">
                  <li>Hard or impossible to determine the project cost at the beginning</li>
                  <li>Project scope and requirements are undefined</li>
                  <li>Project requirements often change; </li>
                  <li>Client prefers to plan and manage all the works at the project</li>
                </ul>
              </div>
              <div className="green-block-hover js-hover">
                <div className="arrow-up">
                  <div className="arrow-down-inside"></div>
                </div>
                <div className="green-block-subtitle">When to use?</div>
                <div className="green-block-content">
                  <div className="green-block-text">Time & Materials model is very transparent and allows the clients to
                    manage the project, define the scope of work and schedule, and save money.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-12 green-block-item">
            <div className="green-block-inside js-green-block-hover">
              <h3 className="green-block-title title-h3 t-uppercase">DEDICATED TEAM MODEL</h3>
              <div className="green-block-main">
                <ul className="list-arrow">
                  <li>Project is long-term. </li>
                  <li>Requirements and scope of work are undefined.</li>
                  <li>Project is an agile software development.</li>
                  <li>Client wishes to manage the hired team as his home one.</li>
                </ul>
              </div>
              <div className="green-block-hover js-hover">
                <div className="arrow-up">
                  <div className="arrow-down-inside"></div>
                </div>
                <div className="green-block-subtitle">When to use?</div>
                <div className="green-block-content">
                  <div className="green-block-text">Dedicated team model is considered to be the most convenient and
                    cost-saving model for long-term projects. Our clients like it because of predictable expenses and
                    flexibility of the scope of work.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
