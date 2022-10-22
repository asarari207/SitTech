import React from 'react'
import Style from '../Style/Hero.module.css'
import URL from '../Imgs/hero.jpg'

export default function Hero() {
  return (
    <div>
        <div className={Style.container}>
            <div className={Style.Left}>
                test
            </div>


            <div className={Style.Right} style={{backgroundImage:`url(${URL})`}}>

            </div>
        </div>
    </div>
  )
}
