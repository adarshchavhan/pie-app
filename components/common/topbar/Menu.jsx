'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './topbar.module.scss'
import Link from 'next/link';
import {usePathname} from 'next/navigation'

const Menu = ({data}) => {
  const menuRef = useRef(null);
  const pathname = usePathname();
  
  const [menu, setMenu] = useState({
    fixed: false,
    top: 1000
  });
  const [open, setOpen] = useState({
    val: false,
    links: []
  });

  const handleOpen = (links) => {
    setOpen({
      val: true, links: links? links : open.links
    });
  }

  const handleClose = (links) => {
    setOpen({
      val: false, links: links? links : []
    });
  }

  useEffect(()=>{
    if(menuRef.current){
      const rect = menuRef.current.getBoundingClientRect();
      setMenu({ 
        ...menu, 
        top: rect.top
      });
    }
  },[])

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      setMenu({
        ...menu, 
        fixed: window.scrollY > menu.top ? true:false
      });
    })
  },[menu.top])

  return (
    <div ref={menuRef} className={`${styles.menu} ${menu.fixed ? styles.fixed:''}`}>
      <div className={styles.div}>
        <div className={styles.menuItems}>
          {data.map((item, i) => item.links ? (
                        <button 
                            className={styles.item} 
                            key={i}
                            onMouseEnter={()=> handleOpen(item.links)}
                            onMouseLeave={()=> handleClose(item.links)}
                        >
                            {item.text} 
                            <span>▼</span>
                        </button>
                ) : (
                    <Link className={`${styles.item} ${pathname===item.url ? styles.active:''}`} href={item.url} key={i}>{item.text}</Link>
                ))}
        </div>
        
        {open.val && <div 
          className={styles.dropdown}
          onMouseEnter={()=> handleOpen()}
          onMouseLeave={()=> handleClose()}
          >
            {open.links && open.links.map((item, i)=> <Link href={item.url} onClick={()=> handleClose()} key={i}>{item.text}</Link>)}
          </div>}
      </div>
    </div>
  )
}

export default Menu