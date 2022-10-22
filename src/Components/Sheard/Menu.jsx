import React,{Fragment,useState} from 'react'
import Style from '../Style/Menu.module.css'

export default function Menu({view,setview}) {
    const handleClick = () =>{
        setview(!view)
    }

    return (
        <Fragment>
        <div className={Style.menu}>
            <div className={Style.container}>
                <div>
                    <h1>Sticky-Tech</h1>
                </div>
                <div className={Style.left}>
               
                    <p>MENU</p>
                    <div className={Style.hamburger} onClick={handleClick}>
                        <div className={Style.static}></div>
                        <div className={Style.active}></div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    )
}
