import Banner from "@/app/components/homepage/banner";
import Feedback from "@/app/components/homepage/feedback";
import GetStartedSection from "@/app/components/homepage/getStartedSection";
import Services from "@/app/components/homepage/services";
import WhatWeDO from "@/app/components/homepage/whatWeDo";
import WhyTecho from "@/app/components/homepage/whyTecho";
import RootLayout from "@/app/layout";
import Image from 'next/image';

const imgSize = 22;

export default function Home() {
    return (
        <RootLayout>

            <main className="">

                <Banner />

                <div className={`bg-white py-12`}>
                    <div className={`layoutWidth m-auto max-[640px]:p-4`}>
                        <p className="uppercase font-bold text-xl pb-2">Techo Ninja: The company that understands your needs!</p>
                        <p className='text-md secondaryColor text-lg'>we leverage our deep technology and industry-specific understanding
                            to facilitate cuttong edge testing services which ensure end-to-end
                            validation of the data, services, applications or software being tested
                            in align with our client's business context.
                        </p>

                        <ul className="flex gap-x-16 pt-6 max-[640px]:flex-col">
                            <li className="flex gap-x-4 ">
                                <Image
                                    src="/images/tickicon.png"
                                    alt="tickicon"
                                    className="dark:invert"
                                    width={imgSize}
                                    height={imgSize}
                                    priority
                                />
                                <span className="text-md">Custom Solutions</span>
                            </li>
                            <li className="flex gap-x-4 max-[640px]:py-2">
                                <Image
                                    src="/images/tickicon.png"
                                    alt="tickicon"
                                    className="dark:invert"
                                    width={imgSize}
                                    height={imgSize}
                                    priority
                                />
                                <span className="text-md">Experienced Team</span>
                            </li>
                            <li className="flex gap-x-4 ">
                                <Image
                                    src="/images/tickicon.png"
                                    alt="tickicon"
                                    className="dark:invert"
                                    width={imgSize}
                                    height={imgSize}
                                    priority
                                />
                                <span className="text-md">24*7 Support</span>
                            </li>
                        </ul>

                    </div>
                </div>

                <WhatWeDO />
                
                <Services />

                <Feedback />

                <WhyTecho />

                <GetStartedSection />

            </main>

        </RootLayout>

    )
}
