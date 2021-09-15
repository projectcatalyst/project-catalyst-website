import styled, { keyframes } from 'styled-components'

const pulsate = keyframes`
  0% {
    top: 0px;
    width: 100px;
    height: 100px;
  }

  50% {
    top: 0px;
    width: 115px;
    height: 115px;
  }

  100% {
    top: 0px;
    width: 100px;
    height: 100px;
  }
`

const PulsingCircle = styled.div`
  position: relative;
  animation: 1.4s ${pulsate} linear infinite;
  background-color: ${({ theme }) => theme.colors.red60};
  border-radius: 100px;
`

export default PulsingCircle