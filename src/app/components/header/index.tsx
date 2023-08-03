import Image from 'next/image';
import { useState } from 'react';
import Menu from '../menu';
import { ClickAwayCallback } from '../outsideClickHandler';
import style from './header.module.scss';
import Link from 'next/link';
import Head from 'next/head';

const imgSize = 20;
const contactNumber = '+91 9582151365';

function StripHeader() {
  return (
    <div className={style.infoHeader}>
      <div className={`layoutWidth ${style.content}`}>
        <span className='text-sm' >
          <a className='text-white noUnderline' href="mailto:info@techoninja.com"> Email us</a>
        </span>
        <div className={`flex gap-x-1`}>
          {/* <Image
            src="/images/twitter.png"
            alt="Twitter"
            className="dark:invert cursor-pointer"
            width={imgSize}
            height={imgSize}
            priority
          />
          <Image
            src="/images/facebook.png"
            alt="Facebook"
            className="dark:invert cursor-pointer"
            width={imgSize}
            height={imgSize}
            priority
          /> */}
          <Image
            src="/images/Linkedin.png"
            alt="LinkedIn"
            className="dark:invert cursor-pointer"
            width={imgSize}
            height={imgSize}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const [menuCategory, setMenuCategory] = useState('');

  const showMenuHandler = (category: string) => {
    setShowMenu(true);
    setMenuCategory(category);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className={style.headerContainer}>
      <Head>
        <title>Techo Ninja | Leading Software Quality Engineering and Outsourcing Company in India</title>
        <meta property="og:title" content="Techo Ninja | Leading Software Quality Engineering and Outsourcing Company in India" key="Techo Ninja | Leading Software Quality Engineering and Outsourcing Company in India" />
      </Head>

      <StripHeader />

      <div className={`bg-white ${style.primaryHeader} py-2`}>
        <div className={`layoutWidth ${style.content}`}>
          <a href='/'>
          <Image
            src="/images/logo.png"
            alt="TecoNinja"
            className="dark:invert cursor-pointer"
            width={200}
            height={55}
            priority
          />
          </a>

          <div className={'relative  mt-2.5'}>
            <ul className={`flex text-sm gap-x-5 max-[640px]:hidden`}>
              <li className={`cursor-pointer`}>
                <Link className={style.headerLink} href='/'>Home</Link>
              </li>
              <li className={`cursor-pointer flex items-center headerLink`} onClick={()=> showMenuHandler("Solutions")}>
                <span>Solutions</span> 
                <img style={{maxHeight:'15px'}} src="/images/down-arrow.png" />
              </li>
              <li className={`cursor-pointer`}>
                <Link className={style.headerLink} href='/industry'>Industries</Link>
              </li>
              <li className={`cursor-pointer flex items-center headerLink`}onClick={()=> showMenuHandler("DiscoverUs")}>
                <span>Discover us</span> 
                <img style={{maxHeight:'15px'}} src="/images/down-arrow.png" />
              </li>
              {/* <li className={`cursor-pointer`}>Blog</li> */}
            </ul>
          </div>          

          <div className={`${style.rightMenu} flex items-center`}>

            <div className={`flex gap-x-2 pr-4`}>
              <Image
                src="/images/hotlineicon.png"
                alt="TecoNinja"
                className="dark:invert cursor-pointer"
                width={40}
                height={40}
                priority
              />
              <div className='flex flex-col'>
                <span className='text-xs headerLink'>Hotline</span>
                <span className='text-sm headerLink'>{contactNumber}</span>
              </div>

            </div>
            <div className={`${style.btnContainer} pl-4`}>
              <button className={`${style.freePilotBtn} text-sm font-bold themeBtn`}>
                <Link className='text-white' href='/freePilotTest'>Free pilot test</Link></button>
            </div>


          </div>

          <ClickAwayCallback as='div' closeIt={closeMenu}>
            <>
              {showMenu ? <Menu category={menuCategory} /> : ''}
            </>
          </ClickAwayCallback>
        
        </div>
      </div>
    </div>
  )
}
