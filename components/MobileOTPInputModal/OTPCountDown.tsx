import type { FC } from 'react'

import { useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'

interface OTPCountDownProps {
  onCountDownCompleted?: VoidFunction
}

const OTPCountDown: FC<OTPCountDownProps> = ({ onCountDownCompleted }) => {
  const countDownTimerRef = useRef<NodeJS.Timer>()

  const [counter, setCounter] = useState(10)

  useEffect(() => {
    if (counter === 0) {
      onCountDownCompleted?.()

      return
    }

    countDownTimerRef.current = setInterval(() => setCounter(counter - 1), 1000)

    return () => clearInterval(countDownTimerRef.current)
  }, [counter, onCountDownCompleted])

  return <OTPCountDownTimer>00:{renderCounterToString()}</OTPCountDownTimer>

  function renderCounterToString() {
    if (counter > 9) {
      return counter
    }

    return `0${counter}`
  }
}

export default OTPCountDown

const OTPCountDownTimer = styled.span`
  color: #999;
`
