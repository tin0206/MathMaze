"use client"

import { useNotification } from '@/store/useNotification'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'

export default function PopUpNoti() {
    const { notification, setNotification } = useNotification()
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (notification) {
            setShow(true)
            const timer = setTimeout(() => {
                setShow(false)
                setTimeout(() => setNotification(null), 1000)
            }, 6000)
            return () => clearTimeout(timer)
        }
    }, [notification])

    if (!notification) return null

    return (
        <div className={`fixed flex justify-between items-start bottom-5 right-5 rounded-[15px] p-[10px] md:p-[20px] w-[280px] md:w-[350px] h-[100px] md:h-[200px] bg-white border border-[#FF9500] text-[#FF9500] z-20
        transform transition-transform duration-500 ease-in-out
        ${show ? 'translate-x-0' : 'translate-x-[310px] md:translate-x-[380px]'}
        `}>
            <div className='flex-1'>
                <h3 className='font-bold'>{notification?.title}</h3>
                <p>{notification?.message}</p>
            </div>
            <Button variant={"outline"} className="size-[25px] md:size-[30px] border-[#FF9500] text-[#FF9500] hover:bg-[rgba(255,149,0,0.1)] rounded-[10px] cursor-pointer"
                onClick={() => {
                    setShow(false)
                    setTimeout(() => setNotification(null), 500)
                }}
            >
                X
            </Button>
        </div>
    )
}
