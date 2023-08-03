import Link from 'next/link';
import style from './getStartedSection.module.scss';

export default function GetStartedSection() {
    return (
        <div className={`${style.getStartedSection}`}>
            <div className={`layoutWidth flex m-auto justify-between items-center py-4 max-[640px]:flex-col max-[640px]:text-center max-[640px]:py-12 max-[640px]:px-8 `}>
                <div className="text-white">
                    <p className="text-md font-bold max-[640px]:text-xl max-[640px]:pb-4 text-white m-0">Choose the best testing services for your business!</p>
                    <p className="text-xs max-[640px]:text-lg text-white m-0">Techo ninja understands your testing requirements and boosts your business with customized testing solutions.</p>
                </div>
                <button className={`text-xs font-bold px-4 py-2 rounded bg-white max-[640px]:mt-4 zoomBtn ${style.headerLink}`}>
                    <Link className={`${style.headerLink}`} href='/contactUs'>Get Started Now</Link>
                </button>
            </div>
        </div>
    )
}
