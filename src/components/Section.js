import React from 'react'
import styled from 'styled-components'
import Fade from 'react-reveal/Fade';

function Section({ title, description, backgroundImg, leftBtnText, rightBtnText }) {
  return (
    <Wrap bgImage= { backgroundImg }>
      {/* bottom : begian animation the ItemText from bottom to top*/}
      <Fade bottom> 
          <ItemText>
              <h1>{ title }</h1>
              <p>{ description }</p>
          </ItemText>
      </Fade>
        <Buttons>
          <Fade bottom>
            <ButtonGroub>
              <LeftBoutton>
                { leftBtnText }
              </LeftBoutton>
              {
                rightBtnText && <RightBoutton>
                { rightBtnText }
                </RightBoutton>
              }
            </ButtonGroub>
            <DownArrow src="./images/down-arrow.svg" />
          </Fade>
        </Buttons>
          
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-szie: cover;
  background-position: center;
  background-repeat : no-repeat;
  background-image: ${props => `url("/images/${props.bgImage}")`};
  display: flex;
  object-fit: cover;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

const ItemText = styled.div`
padding-top: 15vh;
text-align: center;
`

const ButtonGroub = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px)
  {
    flex-direction: column;
  }
`

const LeftBoutton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px
`

const RightBoutton = styled(LeftBoutton)`
  background: white;
  color: black;
  opacity: 0.65;
`
const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  overflow-x: hiddne;
`
const Buttons = styled.div`
  text-align: center;
`