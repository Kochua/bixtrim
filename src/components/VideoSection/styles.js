import styled from 'styled-components'

export const SectionWrapper = styled.section`
  margin: 50px auto;
  padding: 0;
  width: 100%;
`
export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
`
export const HeadingWrapper = styled.div`
  display: flex;
  align-items: center;
`
export const Heading = styled.h2`
  margin: 0;
  padding: 2rem 0;
  font-size: 2.9rem;
  font-family: light;
  color: #2c3738;
`
export const ContentWrapper = styled.div`
  display: flex;
  margin-top: 2.5rem;
  padding: 0 2rem;
  @media only screen and (max-width: 56.25em) {
    flex-direction: column;
    padding: 0;
  }
`
export const LeftSide = styled.div`
  flex: 0 0 45%;
  display: flex;
  justify-content: flext-start;
  flex-wrap: wrap;
  align-items: center;
  @media only screen and (max-width: 56.25em) {
    flex: 1;
    justify-content: center;
  }
`
export const VideosContainer = styled.div`
  margin: 0 3rem 3rem 0;
  width: 17rem;
  height: 10rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1rem;
  font-family: light;
  color: #fff;
  border-radius: 7px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 3.536px 3.536px 27px 0px rgba(48, 132, 184, 0.47);
  transition: 0.38s ease-in-out;
  background: url(${({ img }) => img}) no-repeat center;
  background-size: cover;
  padding: 1rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: -moz-linear-gradient(
      135deg,
      rgb(48, 105, 165) 0%,
      rgb(103, 211, 242) 100%
    );
    background-image: -webkit-linear-gradient(
      135deg,
      rgb(48, 105, 165) 0%,
      rgb(103, 211, 242) 100%
    );
    background-image: -ms-linear-gradient(
      135deg,
      rgb(48, 105, 165) 0%,
      rgb(103, 211, 242) 100%
    );
    z-index: 10;
    opacity: 0.8;
    transition: 0.38s ease-in-out;
  }

  &:hover::before {
    opacity: 0.4;
  }
`

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 2rem;
  padding-bottom: 5rem;
  @media only screen and (max-width: 56.25em) {
    padding: 3rem 7rem;
  }
  @media only screen and (max-width: 37.5em) {
    display: none;
  }
`

export const VideoPlayerIcon = styled.div`
  position: absolute;
  top: calc(50% - 32px);
  left: 50%;
  transform: translateX(-50%);
  width: 7rem;
  height: 7rem;
  border-radius: 50%;
  background: #fff;
  text-align: center;
  cursor: pointer;
  vertical-align: middle;
  transition: 0.38s ease-in-out;

  &::after {
    content: '';
    position: absolute;
    width: 92px;
    height: 92px;
    top: calc(50% - 46px);
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.56);
    border-radius: 50%;
    transition: 0.38s ease-in-out;
  }

  &::before {
    content: '';
    position: absolute;
    width: 106px;
    height: 106px;
    top: calc(50% - 53px);
    left: 50%;
    transform: translateX(-50%);
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.38);
    border-radius: 50%;
    transition: 0.38s ease-in-out;
  }
`

export const BigVideoContainer = styled.div`
  width: 95%;
  height: 25rem;
  background: url(${({ img }) => img});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  border-radius: 11px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.3s;
  position: relative;

  &:hover::before {
    background: rgba(54, 73, 77, 0.11);
  }
  &:hover ${VideoPlayerIcon}:after {
    width: 10rem;
    height: 10rem;
    top: calc(50% - 53px);
    border: 1px solid rgba(255, 255, 255, 0.74);
  }
  &:hover ${VideoPlayerIcon}:before {
    width: 13rem;
    height: 13rem;
    top: calc(50% - 68px);
    border: 1px solid rgba(255, 255, 255, 0.74);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(54, 73, 77, 0.38);
    transition: 0.38s ease-in-out;
  }
`
