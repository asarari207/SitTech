import React from 'react'
import URL from '../Imgs/hero.jpg'
import Style from '../Style/MainHero.module.css'


export default function MainHero() {
    return (
        <div className={Style.MainHero} style={{ backgroundImage: `url(${URL})` }}>
            <div className={Style.shadow}>
                <div className={Style.container}>
                    <div className={Style.content}>
                        We build high-performance
                        technology. <span>With Impact.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
