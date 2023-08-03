import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
   <RootLayout>
 <div className="banner">
        <img src="/images/aboutus.png"/>
        <div className="banner-header">
            <h2 className="h1">About</h2>
            <div className="breadcrumb1">
                <a href="/">
                    <img src="/images/Homeicon.png" alt="home"/></a>
                    <span style={{fontFamily:'webdings', color:'#1d2625'}}>4</span>
                {/* <img className='arrowIcon' src="/images/arrow.png" alt="arrow"/> */}
                <span> About</span>
            </div>
        </div>
    </div>

    <div className="main">
        <section className="bg-white">
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-12 text-center">
                        <div className="title">
                            <h2><strong>About Techo Ninja</strong></h2>
                            <span className="th-header-divider"></span>
                        </div>
                        <div className="content">
                            <h4 style={{textAlign: 'left', color: '#6C757D', fontSize:'16px'}} >Techo Ninja is an multi-national software testing company that has been in operation
                                since 2022. Since then, the company has gained a reputation for delivering trusted
                                solutions to clients across the globe. We work closely with your team which enables us
                                to provide access to both technical testing and software quality assurance allowing you
                                to gain a better understanding of how to improve your deliverables!</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="abt-sec-2 px-3">
            <div className="row">
                <div className="col-md-6 p-3 p-lg-5 order-1 order-md-0">
                    <div className="title below-line">
                        <h2>Who we are</h2>
                    </div>
                    <div className="content">
                        <p style={{marginLeft:'20px'}}>Techo Ninja has served the needs of clients from across the
                            world—helping us build a reputation as a provider of quality software testing solutions.
                            We've been a part of our customer's success and we want to continue doing that as we
                            continuously innovate our testing process as well as our approach towards testing. Techo
                            Ninja
                            is also the right place for those who are willing to take their career and skills
                            to the next level and people who want to be a part of a company that provides value and
                            quality to their customers.</p>
                    </div>
                </div>
                <div className="col-md-6 back-attachment"
                    style={{background: "url('/images/top-view-coworkers.jpg')no-repeat center center;background-size: cover"}}>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 back-attachment"
                    style={{background: "url('/images/stats.jpg')no-repeat center center;background-size: cover;"}}>
                </div>
                <div className="col-md-6 p-3 p-lg-5">
                    <div className="title below-line">
                        <h2>Our Aim</h2>
                    </div>
                    <div className="content">
                        <p style={{marginLeft:'20px'}}>We at Techo Ninja ensure our customer's different needs are met whether they be personal or
                            business ones. We provide high-quality testing services to our clients with the sincerity
                            and care that each client deserves. Best of all, we never sacrifice quality over
                            effectiveness when it comes time to deal with our client's projects. With our help, you can
                            boost your client's satisfaction by ensuring that their different needs are addressed in
                            every scenario through the creation of innovative testing solutions in addition to the
                            development of laser-focused projects in both terms of quality and in timely delivery.</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="pt-5 pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 text-center mb-5">
                        <div className="title">
                           
                        
                    </div>
                </div>
            </div>
    </div>
    </section>
   
    </div>

   </RootLayout>
  )
}
