import styled from 'styled-components'
import HeaderBackground from '../../assets/her.png'
import En from '../../assets/flags/united-kingdom (2).png'
import VideoBg from '../../assets/hero-video-thumb.png'
import pointIcon from '../../assets/point-icon.png'
import { Link } from 'react-scroll'

export const Wrapper = styled.section`
  margin: 0;
  padding-top: 2rem;
  position: relative;
  min-width: 100%;
  min-height: 110vh;
  background: url(${HeaderBackground}) no-repeat center center;
  background-size: cover;
  overflow: hidden;
  @media only screen and (max-width: 56.25em) {
    margin-bottom: 5rem;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  padding: 0;
  width: 90%;
  min-width: 120rem @media only screen and (max-width: 56.25em) {
    width: 94%;
  }
`

//HEADER
export const HeaderTop = styled.div`
  margin: 0;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  transition: 0.47s ease-in-out;
  background: ${({ bg }) => bg && 'rgba(82, 175, 216,.98)'};
  box-shadow: ${({ bg }) => bg && '0px 2px 7px rgba(0,0,0,.38)'};
  padding: ${({ bg }) => bg && '1rem'};
  @media only screen and (max-width: 37.5em) {
    display: none;
  }
`

export const LogoContainer = styled.a`
  flex-grow: 1;
`

export const Logo = styled.img``

export const Nav = styled.nav`
  display: flex;
  flex-grow: 1;
  align-items: center;
  position: relative;
  justify-content: space-between;
`
export const NavItem = styled(Link)`
  position: relative;
  padding: 1.1rem 1.5rem;
  font-size: 1.4rem;
  color: #fff;
  background: transparent;
  border-radius: 2.2rem;
  font-family: bold;
  text-decoration: none;
  transition: 0.38s ease-in-out;
  display: flex;
  cursor: pointer;
  &:hover {
    background: #428ebd;
  }
`
export const BtnWrapper = styled.div`
  flex-grow: 1;
  cursor: pointer;
  margin-left: 1rem;
  @media only screen and (max-width: 90em) {
    margin-left: 4rem;
  }
`
export const Btn = styled.a`
  background: #fff;
  color: #4c9fcd;
  border: 2px solid transparent;
  padding: 0 3rem;
  text-align: center;
  font-size: 1.4rem;
  font-family: bold;
  line-height: 4.5rem;
  border-radius: 2.3rem;
  display: inline-block;
  text-decoration: none;
  outline: none;
  transition: 0.38s ease-in-out;

  &:hover {
    background: transparent;
    color: #fff;
    border: 2px solid #fff;
  }
`
export const MenuMini = styled.div`
  position: absolute;
  z-index: 9999 !important;
  top: 4rem;
  right: 0;
  padding: 1.5rem 0;
  box-shadow: 0px 1px 20px 1px rgba(6, 48, 87, 0.6);
  overflow: hidden;
  width: 17rem;
  border-radius: 1.1rem;
  background: #fff;
  overflow: hidden;
  transition: 0.38s ease-in-out;
  display: flex;
  flex-direction: column;
  opacity: ${({ isOpen }) => (isOpen ? '100' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
`
export const MenuMiniItem = styled(Link)`
  margin: 0;
  padding: 0 0 0 15px;
  width: 100%;
  line-height: 40px;
  background: transparent;
  color: #428ebd;
  font-size: 12px;
  font-family: regular;
  text-decoration: none;
  transition: 0.38s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #428ebd;
    border-left: 2px solid #25668f;
    color: #fff;
  }
`
export const MenuMiniItemHref = styled.a`
  margin: 0;
  padding: 0 0 0 15px;
  width: 100%;
  line-height: 40px;
  background: transparent;
  color: #428ebd;
  font-size: 12px;
  font-family: regular;
  text-decoration: none;
  transition: 0.38s ease-in-out;
  cursor: pointer;
  &:hover {
    background: #428ebd;
    border-left: 2px solid #25668f;
    color: #fff;
  }
`
export const FlagContainer = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  color: #fff;
  cursor: pointer;
`

export const Flag = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  background: url(${En}) no-repeat;
  margin-right: 1rem;
`

export const InsideFlagList = styled.div`
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 0.3rem;
  position: absolute;
  width: 11rem;
  text-align: center;
  transition: all 0.4s;
  z-index: 10;
  background: #fff;
  box-shadow: 0px 1px 1.5rem 0px rgba(6, 48, 87, 0.8);
  border-radius: 4px;
  transition: all 0.35s ease-in-out;
  opacity: 0;
  visibility: hidden;
`

export const InsideFlag = styled.div`
  font-family: regular;
  font-size: 1.3rem;
  transition: 0.38s ease-in-out;
  padding: 0.5rem 0.7rem;
  color: #4c9fcd;
  cursor: pointer;
  &:hover {
    background: #4598cc;
    color: #fff;
  }
  display: flex;
  align-items: center;
`
export const FlagsWrapper = styled.div`
  position: relative;
  transition: all 0.6s ease-in-out;

  &:hover ${InsideFlagList} {
    opacity: 1;
    visibility: visible;
  }
`

//HEADER CONTENT
export const MainWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
  }
  @media only screen and (max-width: 37.5em) {
    margin-top: 3rem;
  }
`
export const ContentWrapper = styled.div`
  margin-top: 5rem;
  flex: 0 0 60%;
  @media only screen and (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`
export const PrimaryHeading = styled.h1`
  margin: 0;
  padding: 0;
  width: 100%;
  font-size: 3.6rem;
  font-family: bold;
  color: #fff;
  @media only screen and (max-width: 56.25em) {
    padding: 0 3rem;
  }
`
export const SecondaryHeading = styled.h2`
  margin: 3rem 0 0 0;
  width: 100%;
  font-size: 1.4rem;
  font-family: regular;
  color: #fff;
`
export const VideoWrapper = styled.div`
  margin: 5rem 0 0 0;
  padding: 0;
  width: 100%;
  display: flex;
  @media only screen and (max-width: 56.25em) {
    justify-content: center;
  }
  @media only screen and (max-width: 37.5em) {
    flex-direction: column;
    align-items: center;
    margin: 3rem 0 0 0;
  }
`

export const VideoContainer = styled.div`
  position: relative;
  float: left;
  width: 35.7rem;
  height: 8rem;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: 0.38s ease-in-out;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover::before {
    background: rgba(48, 105, 165, 0.74);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 83px;
    background: url(${VideoBg}) no-repeat center;
    z-index: -2;
    background-size: cover;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 8.3rem;
    background: rgba(48, 105, 165, 0.47);
    transition: 0.38s ease-in-out;
    z-index: -1;
  }

  @media only screen and (max-width: 37.5em) {
    width: 90%;
    margin-bottom: 2rem;
  }
`
export const VideoText = styled.div`
  font-size: 1.4rem;
  color: #fff;
  font-family: light;
  display: flex;
  flex-direction: column;
  margin-left: 1rem;
`
export const VideoLogo = styled.div`
  width: 57px;
  height: 54px;
  background: url(${({ img }) => img}) no-repeat;
  opacity: 0.74;
  transition: 0.38s ease-in-out;
`
export const PaperWrapper = styled.a`
  margin: 0 0 0 2rem;
  border-radius: 4px;
  background: transparent;
  border: 1px solid #fff;
  height: 8rem;
  text-decoration: unset;
  transition: 0.38s ease-in-out;
  overflow: hidden;
  @media only screen and (max-width: 37.5em) {
    width: 80%;
    margin: 1rem 0;
  }
`
export const PapperTop = styled.span`
  margin: 0;
  padding: 2rem;
  display: block;
  background: #fff;
  color: #4c9fcd;
  font-size: 1.4rem;
  font-family: bold;
  transition: 0.38s ease-in-out;
`
export const PapperBottom = styled.span`
  padding: 4px 0 0 0;
  font-size: 1rem;
  color: #fff;
  border-top: 1px solid transparent;
  text-align: center;
  display: block;
  transition: 0.38s ease-in-out;
`
export const RaitingsWrapper = styled.div`
  width: 100%;
  margin: 5rem 0px 0px;
  padding: 0px;
  display: flex;
  @media only screen and (max-width: 56.25em) {
    justify-content: center;
  }
`
export const RaitingContainer = styled.a`
  margin: 0 1rem 0 0;
  padding: 0;
  width: 17rem;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #4791be;
  color: #fff;
  text-align: center;
  text-decoration: none;
  font-size: 1.2rem;
  outline: none;
  opacity: 0.56;
  transition: 0.38s ease-in-out;
  overflow: hidden;
  &:hover {
    opacity: 1;
  }
`
export const RaitingTop = styled.span`
  margin: 0;
  padding: 1.5rem 0;
  width: 100%;
  height: 5rem;
  display: block;
  vertical-align: middle;
  background: #428ebd;
  transition: 0.38s ease-in-out;
`
export const RaitingLogo = styled.img`
  margin: 0 auto;
  display: block;
`
export const RaitingBottom = styled.div`
  width: 100%;
  padding: 1rem 0;
`
export const RaitingNumber = styled.strong`
  margin: 0 10px 0 0;
  font-size: 1.4rem;
  font-family: bold;
`
export const SocialsWrapper = styled.div`
  margin: 3rem auto 0 auto;
  padding: 0;
  width: 100%;
  transition: 0.38s ease-in-out;
  display: flex;
`
export const SocialItem = styled.a`
  margin: 0.5rem;
  width: 3.3rem;
  height: 3.3rem;
  text-align: center;
  line-height: 3.3rem;
  background: #51abd5;
  text-decoration: none;
  border-radius: 50%;
  border: 2px solid #51abd5;
  color: #fff;
  font-size: 1.6rem;
  transition: 0.38s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: #51abd5;
    background: #fff;
    border: 2px solid #51abd5;
  }
`
//SALES TIMER
export const SalesTimerWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  padding: 2rem;
  position: relative;
  border-radius: 11px;
  vertical-align: top;
  background: #fff;
  box-shadow: 0px 1px 17px 0px rgba(20, 72, 120, 0.38);
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 56.25em) {
    width: 75%;
  }
  @media only screen and (max-width: 37.5em) {
    width: 96%;
  }
`
export const TimerHeading = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.8rem;
  font-family: bold;
  color: #428ebd;
  width: 100%;
  margin-bottom: 1rem;
`
export const TimerUnitsContainer = styled.div`
  font-family: bold;
  color: #326ba0;
  font-size: 2.6rem;
  display: flex;
  align-items: center;
  text-shadow: 0px 1px 3px rgba(36, 2, 61, 0.1);
`
export const Unit = styled.span`
  font-size: 8rem;
  padding: 0 0.7rem;
`
export const ProgressBarOutter = styled.div`
  margin: 6rem 0 1rem 0;
  padding: 0;
  width: calc(100% - 3rem);
  height: 1.6rem;
  background: #ebe6e6;
  border-radius: 8px;
`
const aboveProgress = '2 340 000 BXM'

export const ProgressInnver = styled.div`
  position: relative;
  width: 75%;
  height: 1.6rem;
  background: #4795c5;
  border-radius: 8px;
  box-shadow: 0px 0px 11px 0px rgba(38, 109, 157, 0.74);
  &::before {
    content: '';
    position: absolute;
    top: -2.1rem;
    right: 0;
    width: 1.5rem;
    height: 2.1rem;
    background: url(${pointIcon}) no-repeat;
  }
  &::after {
    content: '${aboveProgress}';
    position: absolute;
    top: -4.3rem;
    right: -3.6rem;
    font-size: 12px;
    color: #2365a3;
    font-family: light;
  }
`
export const MoneyCollectWrapper = styled.div`
  width: 90%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
`
export const MoneyCollect = styled.span`
  font-size: 1.2rem;
  font-family: light;
  color: #2365a3;
`
export const TimerBtn = styled.a`
  margin: 4rem auto;
  padding: 0;
  display: block;
  text-decoration: none;
  border-radius: 2.3rem;
  background-image: -moz-linear-gradient(
    90deg,
    rgb(35, 101, 163) 0%,
    rgb(81, 169, 211) 100%
  );
  background-image: -webkit-linear-gradient(
    90deg,
    rgb(35, 101, 163) 0%,
    rgb(81, 169, 211) 100%
  );
  background-image: -ms-linear-gradient(
    90deg,
    rgb(35, 101, 163) 0%,
    rgb(81, 169, 211) 100%
  );
  box-shadow: 0px 4px 11px 0px rgba(37, 102, 143, 0.38);
  width: 19rem;
  height: 4.5rem;
  text-align: center;
  line-height: 4.5rem
  color: #fff;
  font-size: 1.4rem;
  font-family: bold;
  transition: 0.38s ease-in-out;

  &:hover {
    background-image: -moz-linear-gradient(
      90deg,
      rgb(81, 169, 211) 0%,
      rgb(81, 169, 211) 100%
    );
    background-image: -webkit-linear-gradient(
      90deg,
      rgb(81, 169, 211) 0%,
      rgb(81, 169, 211) 100%
    );
    background-image: -ms-linear-gradient(
      90deg,
      rgb(81, 169, 211) 0%,
      rgb(81, 169, 211) 100%
    );
  }
`
export const TextBottom = styled.div`
  width: 100%;
  display: block;
  font-size: 12px;
  font-family: light;
  color: #2365a3;
`
//MOBILE NAV

export const MobileWrapper = styled.div`
  position: fixed;
  padding: 10px 15px 10px 10px;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(82, 175, 216, 0.98);
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.38);
  z-index: 999 !important;
  overflow: hidden;
  display: none;
  @media only screen and (max-width: 37.5em) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`
export const MobileContent = styled.div`
  position: fixed;
  padding: 80px 0;
  top: ${({ isActive }) => (isActive ? '0' : '-100vh')};
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #fff;
  overflow: hidden;
  z-index: 998 !important;
  transition: 0.38s ease-in-out;
  display: flex;
`
export const Side = styled.div`
  margin: 0;
  padding: 0 0 0 20px;
  width: 50%;
  border-right: ${({ border }) => border && '1px solid #c9c9c9'};
`
export const MobileLink = styled.div`
  margin: 0;
  padding: 7px;
  width: 100%;
  display: block;
  font-size: 14px;
  font-family: bold;
  color: #55b0d8;
  background: transparent;
  text-decoration: none;
  transition: 0.38s ease-in-out;
`
export const MobileLang = styled.div`
  display: inline-block;
  margin: 10px;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid #c9c9c9;
  border-radius: 4px;
  color: #6a7778;
  transition: 0.38s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70%;
`
