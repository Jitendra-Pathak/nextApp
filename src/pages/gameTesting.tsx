import RootLayout from '@/app/layout'
import '../app/style001.css';
import '../app/background.css';

export default function Home() {
  return (
    <RootLayout>
		<div className="banner">
		<img src="/images/Gametestingbanner.png"/>
		<div className="banner-header">
			<h2 className="h1">Game Testing</h2>
			<div className="breadcrumb1">
				<a href="index.html">
					<img src="/images/Homeicon.png" alt="home"/></a>
				
				<img className= "arrowIcon" src="/images/arrow.png" alt="arrow"/>
				<span> Game Testing</span>
			</div>
		</div>
	</div>
	<div className="main functional-testing">
		<div className="new-cover">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-lg-12">
						<div className="new-content">
							<h3>Main features of Game Testing services as offered by Techo Ninja are:</h3>
							
							<img src="/images/gametesting-info.png" alt="info"/>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="custom-cover functional-testing-contant">
			<div className="container">
				<div className="wow fadeInUp qa-cover" data-wow-delay="0.4s">


					<h4>Our <strong> Game Testing </strong>Services:</h4>

					<ul className="d-flex flex-wrap cm-ul hover-listing">
						<li>
							<div className="li-cover">
								<h3>Usability Testing</h3>
								<p>We test the game from user's prospective and provide feedback that how easy it is to play for real user.</p>
							</div>
						</li>
						<li className="active">
							<div className="li-cover">
								<h3>Load Testing</h3>
								<p>Subjecting the gameplay to expected real-life load for a long duration to ensure the
									game does not fail in the real world</p>
							</div>
						</li>
						<li>
							<div className="li-cover">
								<h3>Functional Testing</h3>
								<p>Provides full-cycle testing activities, which include conceptualization of test cases, development of detailed test scenarios, and implementation of high-quality tests</p>
							</div>
						</li>
						<li>
							<div className="li-cover">
								<h3>Compatibility Testing</h3>
								<p>Perform Testing on all the supported devices and configurations for game</p>
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
			<img src="/images/game-tester.jpg" alt="Image" className="fit-image"/>

			<div className="section-contant-new">
				<p><strong>Testing customized to your needs</strong>We modulate our testing strategy only once we know
					the in & outs of your game and what kind of testing it required</p>
				<p><strong>Special focus on UX</strong>We are not focusing on your game for the functionality and
					compatibility but also focus on the user experience ensure the game remains easy to play, enjoyable and
					interesting for the players</p>
				<p><strong>Meticulous attention to Detail</strong>Not only do we test for maximum coverage, we provided
					all possible information that may be needed in the bugs reporting for eg. application Logs, crash logs, system behaviour on
					different configurations</p>
			</div>

		</div>

		<div className="timeline-section">
			<div className="container">
				<div className="section-title text-center py-5">
					<h2>How the <strong>Game Testing</strong> Works</h2>
					<p style={{marginLeft:'20px'}}>
						A thorough Game Testing ensures that you have better results and user experience after release
						and below are the generic steps that need to be followed:
					</p>
				</div>
				<ul className="pb-5 text-center">
					<li>
						<div className="timeline-content">
							<h3>Functional Testing</h3>
							<p>Testing all the functional scenario of the game and make sure they work as expected</p>
						</div>
						<div className="timeline-icon">
							<img src="/images/tl-tick.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
							<h3>Ad Hoc Testing</h3>
							<p>We perform Ad Hoc testing to ensure nothing breaks while doing some random scenarios</p>
						</div>
						<div className="timeline-icon">
							<img src="/images/tl-test-tube.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
							<h3>Testing according to user</h3>
							<p>Testing game with multiplayer on different devices with different configurations making sure that the game
								works well in the real-world</p>
						</div>
						<div className="timeline-icon">
							<img src="/images/tl-edit.png" alt="tick" />
						</div>
					</li>
					<li>
						<div className="timeline-content">
							<h3>Performance and Security Testing</h3>
							<p>Different types of performance testing and security testing to ensure the game works even
								in a stressed environment and is safe to use</p>
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
