import styled from 'styled-components'

import ProductBg from '../../assets/products-icons.png'

export const SectionWrapper = styled.section`
  margin-bottom: 4rem;
  padding: 8rem 0;
  width: 100%;
  position: relative;
  transition: 0.38s ease-in-out;
  overflow: hidden;
  background-image: -moz-linear-gradient(
    78deg,
    rgb(48, 105, 165) 0%,
    rgb(103, 211, 242) 100%
  );
  background-image: -webkit-linear-gradient(
    78deg,
    rgb(48, 105, 165) 0%,
    rgb(103, 211, 242) 100%
  );
  background-image: -ms-linear-gradient(
    78deg,
    rgb(48, 105, 165) 0%,
    rgb(103, 211, 242) 100%
  );
  box-shadow: 3.536px 3.536px 27px 0px rgba(48, 132, 184, 0.47);
  transition: 0.38s ease-in-out;

  @media only screen and (max-width: 37.5em) {
    padding: 4rem 0;
  }
`
export const Container = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  padding-right: 3rem;

  @media only screen and (max-width: 37.5em) {
    width: 98%;
    padding-right: 0;
  }
`
export const ProductTextWrapper = styled.div`
  flex: 0 0 50%;
  transition: 0.38s ease-in-out;
  overflow: hidden;
  margin-bottom: 15rem;

  @media only screen and (max-width: 56.25em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
  }
`

export const PrimaryHeading = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 3rem;
  color: #f9f9f9;
  font-family: light;
`
export const Line = styled.div`
  margin: 3rem 0;
  width: 4rem;
  height: 2px;
  background: #fff;
`
export const MobileProductChooser = styled.div`
  display: none;
  @media only screen and (max-width: 56.25em) {
    display: flex;
    justify-content: center;
  }
`
export const MobileProductItem = styled.div`
  margin: 0 5px;
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  border: 1px solid #fff;
  color: #fff;
  transition: 0.38s ease-in-out;
  background-image: -webkit-linear-gradient(${({ bg }) => bg});
`
export const ContentContainer = styled.div`
  overflow: hidden;
  @media only screen and (max-width: 56.25em) {
    width: 85%;
    margin: 6rem auto 0 auto;
    text-align: center;
  }
`
export const ContentItem = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
`
export const SecondaryHeading = styled.h3`
  margin: 0 0 2rem 0;
  padding: 0;
  font-size: 1.8rem;
  font-family: bold;
  color: #fff;
`

export const ContentText = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  line-height: 2.2rem;
  font-size: 1.2rem;
  font-family: light;
  color: #fff;
  overflow: hidden;
`

//RIght side

export const ProductChooserContainer = styled.div`
  flex: 1;
  width: 100%;
  transition: 0.38s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 56.25em) {
    display: none;
  }
`
export const ProductChooserItem = styled.div`
  position: absolute;
  width: 18rem;
  height: 18rem;
  text-align: center;
  background: #fff;
  border-radius: 11px;
  cursor: pointer;
  transition: 0.38s ease-in-out;

  top: 50%;
  left: 60%;
  transform: translate(${({ x }) => x || '-50'}%, ${({ y }) => y || '-50'}%)
    rotate(45deg);
  z-index: 5;

  &:hover {
    background-image: linear-gradient(${({ bgImage }) => bgImage});
  }
`
export const ProductInner = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transform: rotate(-45deg) translateY(-10px);
`

export const ProductImg = styled.div`
  width: 6.4rem;
  height: 6.4rem;
  background: url(${ProductBg}) ${({ nums }) => nums};
  text-align: center;
  transition: 0.38s ease-in-out;
  margin-bottom: 1rem;
`

export const ProductTitle = styled.h4`
  width: 100%;
  text-align: center;
  font-size: 1.2rem;
  font-family: regular;
  color: #161b1c;
  transition: 0.38s ease-in-out;
`

export const PlayButton = styled.div`
  position: relative;
  width: 35.7rem;
  height: 8rem;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  -webkit-transition: 0.38s ease-in-out;
  transition: 0.38s ease-in-out;
  background-image: url(${({ bg }) => bg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(48, 105, 165, 0.47);
    -webkit-transition: 0.38s ease-in-out;
    transition: 0.38s ease-in-out;
  }

  &:hover:before {
    background: rgba(48, 105, 165, 0.74);
  }
`
export const VideoLogo = styled.div`
  width: 57px;
  height: 57px;
  background: url(${({ img }) => img}) no-repeat;
  opacity: 0.74;
  transition: 0.38s ease-in-out;
`
