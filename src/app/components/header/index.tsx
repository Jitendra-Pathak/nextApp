import Image from 'next/image';
import { useState } from 'react';
import Menu from '../menu';
import { ClickAwayCallback } from '../outsideClickHandler';
import style from './header.module.scss';

const imgSize = 20;
const contactNumber = '+91 9582151365';

function StripHeader() {
  return (
    <div className={style.infoHeader}>
      <div className={`layoutWidth ${style.content}`}>
        <span className='text-sm' ><a href="mailto:info@techoninja.com"> Email us</a></span>
        <div className={`flex gap-x-1`}>
          <Image
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
          />
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

      <StripHeader />

      <div className={`bg-white ${style.primaryHeader} py-2`}>
        <div className={`layoutWidth ${style.content}`}>
          <Image
            src="/images/logo.png"
            alt="TecoNinja"
            className="dark:invert cursor-pointer"
            width={200}
            height={55}
            priority
          />

          <div className={'relative'}>
            <ul className={`flex text-sm gap-x-5 max-[640px]:hidden`}>
              <li className={`cursor-pointer`}>Home</li>
              <li className={`cursor-pointer flex items-center`} onClick={()=> showMenuHandler("Solutions")}>Solutions 
              <img style={{maxHeight:'15px'}} src="/images/down-arrow.png"/></li>
              <li className={`cursor-pointer`}>Industries</li>
              <li className={`cursor-pointer`}onClick={()=> showMenuHandler("DiscoverUs")}>Discover us</li>
              <li className={`cursor-pointer`}>Blog</li>
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
                <span className='text-xs'>Hotline</span>
                <span className='text-sm'>{contactNumber}</span>
              </div>

            </div>
            <div className={`${style.btnContainer} pl-4`}>
              <button className={`${style.freePilotBtn} text-sm font-bold`}>Free pilot test</button>
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
