import React, { useEffect, useRef } from 'react'
import {gsap} from "gsap"
import { Image } from 'react-bootstrap'
import animationImage from '/cover-image/coverimage-crop-new-portrait.png'
import './AnimationComponentStyle.css'

function MockupAnimation() {
    const imageRef = useRef(null);
    useEffect(()=>{
        const tl = gsap.timeline();

        tl.to(imageRef.current,{
            duration:2,
            rotation:360,
            scale:1,
            ease:"power2.inOut"
        })

        tl.eventCallback("onComplete",()=>{
            const handleMouseMove = (event)=>{
                const {clientX, clientY} = event;
                const windowWidth = window.innerWidth;
                const windowHeight = window.innerHeight;

                const moveX = (clientX/windowWidth - 0.5) *100;
                const moveY = (clientY/windowHeight - 0.5) * 100;

                gsap.to(imageRef.current,{
                    x:moveX,
                    y:moveY, duration:0.5,
                    ease:"power3.out"
                })
            }
            window.addEventListener('mousemove',handleMouseMove);
            return ()=> window.removeEventListener('mousemove', handleMouseMove);
        })

    },[])
  return (
    <div>
        <Image ref={imageRef} src={animationImage}
        alt='animated' className='custom-image' fluid
        />
    </div>
  )
}

export default MockupAnimation