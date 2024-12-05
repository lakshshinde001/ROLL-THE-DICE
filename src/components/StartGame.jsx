import React from 'react'

import Dice from '../assets/dices1.png'
import { Button } from '../styled/Button'

const StartGame = () => {
  return (
    <div className='mx-2-[1180px] h-screen flex mx-auto items-center'>
        <div>
            <img src={Dice} alt='Dice Image' />
        </div>
        <div className=''>
            <h1 className='text-7xl whitespace-nowrap '>DICE GAME</h1>
            <Button className='mt-5'>
                Play Now
            </Button>
        </div>
    </div>
  )
}

export default StartGame