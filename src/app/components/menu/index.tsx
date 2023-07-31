
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { menuData } from './constant';
import style from './index.module.scss';

export default function Menu(props: any) {
    const { category } = props;
    const [data, setMenuData] = useState([]);

    useEffect(() => {
        setMenuData(menuData[category])
    }, [category]);

    const getSubMenu = (subMenu: any) => {
        return subMenu.map((options: any, index: any)=>{
            return (
                <li className='text-lg pb-2' key={`${subMenu.label}_${index}`}>
                    <Link className={style.link} href={options.link}>{options.label}</Link>
                </li>
            )
        });
    };

    return (
        <div className={style.menuContainer}>
            <div className={`${style.content} relative flex px-8 py-6 gap-16 rounded`}>
                {
                    data.map((menu: any, index: any) => {
                        return (
                            <div key={`${menu.label}_${index}`} className='categoryGroup text-white whitespace-nowrap'>
                                <h1 className={`${style.title} font-bold text-xl`}>{menu.label}</h1>
                                <ul className='mt-4'>{getSubMenu(menu.data)}</ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
