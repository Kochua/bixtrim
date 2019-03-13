import styled from 'styled-components'
import subscribeBg from '../../assets/ft-top-bg.png'
import footerBg from '../../assets/ft-bg.png'

export const FooterWrapper = styled.footer`
  margin: 10rem 0 0 0;
  padding: 0;
  width: 100%;
  background: url(${footerBg}) no-repeat 50% 50%;
  background-size: cover;
  position: relative;
  @media only screen and (max-width: 37.5em) {
    margin: 6rem 0 0 0;
  }
`
export const SubscribeWrapper = styled.div`
  margin: 0 auto;
  padding: 0 10rem 0 12rem;
  width: 90%;
  height: 26.5rem;
  background: url(${subscribeBg}) no-repeat center center;
  background-size: cover;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`
export const SubscribeLeft = styled.div`
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 37.5em) {
    width: 100%;
    align-items: center;
    justify-content: center;
  }
`
export const SubscribeTitle = styled.h3`
  font-size: 2.2rem;
  font-family: bold;
  color: #161b1c;
`
export const Text = styled.p`
  margin: 1rem 0 0 0;
  padding: 0;
  font-size: 1.6rem;
  font-family: regular;
  color: #7f8d8f;
  @media only screen and (max-width: 37.5em) {
    margin: 1rem 0;
  }
`
export const SubscribeRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const FormContainer = styled.form`
  position: relative;
`
export const SubscribeInput = styled.input`
  padding: 0 0 0 2rem;
  line-height: 4.5rem;
  width: 35rem;
  outline: none;
  border-radius: 11px;
  font-family: light;
  font-size: 1.2rem;
  color: #7f95a3;
  background: #fff;
  border: 1px solid transparent;
  box-shadow: 0px 3px 8px 0px rgba(44, 58, 67, 0.11),
    inset 1.06px 1.696px 5px 0px rgba(31, 54, 68, 0.35);
  transition: 0.38s ease-in-out;
`
export const FormBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 12rem;
  height: 4.7rem;
  text-align: center;
  line-height: 4.7rem;
  color: #fff;
  font-family: bold;
  font-size: 1.4rem;
  border: none;
  border-radius: 1.1rem;
  cursor: pointer;
  background-color: #67d3f2;
  transition: 0.38s ease-in-out;
`
//Footer menu

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
  margin-top: 5rem;
`

export const FooterMenuWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8rem;
  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
  }
`
export const List = styled.div`
  flex: 0 0 25%;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: 37.5em) {
    justify-content: center;
    align-items: center;
    margin-bottom: 2rem;
  }
`
export const ListTitle = styled.h3`
  margin-bottom: 2rem;
  padding: 0;
  font-size: 1.2rem;
  font-family: bold;
  color: #fff;
  text-align: left;
`
export const ListItem = styled.a`
  margin: 0 0 1rem 0;
  font-size: 1.2rem;
  font-family: regular;
  color: #a7ceeb;
  display: block;
  text-decoration: none;
  transition: 0.38s ease-in-out;

  &:hover {
    color: #fff;
    transform: translateX(5px);
  }
`
export const IconContainer = styled.a`
  margin: 0 1rem 1rem 0;
  background: #69abd6;
  width: 3.6rem;
  height: 3.6rem;
  border-radius: 50%;
  color: #fff;
  transition: 0.38s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #519ac8;
  }
`
export const Btn = styled.button`
  padding: 1.8rem 2.6rem;
  text-align: center;
  font-size: 1.2rem;
  font-family: bold;
  color: #3069a5;
  background: #fff;
  border-radius: 4rem;
  box-shadow: 0px 5px 15px 0px rgba(34, 78, 103, 0.29);
  cursor: pointer;
  border: 2px solid transparent;
  transition: 0.38s ease-in-out;

  &:hover {
    background: transparent;
    border: 2px solid #fff;
    color: #fff;
  }
`
export const FooterBottom = styled.div`
  width: 100%;
  padding: 0 2.5%;
  border-top: 1px solid #32678f;
  line-height: 6rem;
  height: 6rem;
  background: transparent;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`
export const CopyrightText = styled.span`
  font-size: 1.2rem;
  font-family: bold;
  color: #a7ceeb;
`

//subrcibe modal

export const WrapperModal = styled.div`
  width: 55rem;
`

export const Header = styled.div`
  padding: 0 0 0 2rem;
  width: 100%;
  height: 4.4rem;
  line-height: 4.4rem;
  font-size: 1.5rem;
  color: #fff;
  background: #29a4d9;
`

export const Form = styled.form`
  width: 75%;
  margin: 0 auto;
  padding: 3rem 0 1rem;
  display: flex;
  flex-direction: column;
`
export const FormGroup = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 1.5rem;
`
export const Input = styled.input`
  padding: 1rem 1.5rem;
  width: 100%;
`
export const SubmitBtn = styled.button`
  margin-top: 1rem;
  padding: 0;
  width: 12rem;
  height: 5rem;
  line-height: 5rem;
  color: #fff;
  border-radius: 4px;
  border: none;
  border-bottom: 2px solid #116d94;
  text-align: center;
  cursor: pointer;
  background: #29a4d9;
  font-weight: bold;
  font-size: 1.4rem;
  transition: 0.47s ease-in-out;

  &:hover {
    background: #116d94;
  }
`
