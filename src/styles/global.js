import { injectGlobal } from 'styled-components'
// import MarkGeoLightEot from "./fonts/MarkGEO-Light.eot";
// import MarkGeoLightWoff from './fonts/MarkGEO-Light.woff'
// import MarkGeoLightTtf from './fonts/MarkGEO-Light.ttf'
// import MarkGeoLightSvg from './fonts/MarkGEO-Light.svg'

// import MarkGeoRegularEot from "./fonts/MarkGEO-Regular.eot";
// import MarkGeoRegularWoff from './fonts/MarkGEO-Regular.woff'
// import MarkGeoRegularTtf from './fonts/MarkGEO-Regular.ttf'
// import MarkGeoRegularSvg from './fonts/MarkGEO-Regular.svg'

// import MarkGeoSemiBoldEot from "./fonts/MarkGEO-SemiBold.eot";
// import MarkGeoSemiBoldWoff from './fonts/MarkGEO-SemiBold.woff'
// import MarkGeoSemiBoldTtf from './fonts/MarkGEO-SemiBold.ttf'
// import MarkGeoSemiBoldSvg from './fonts/MarkGEO-SemiBold.svg'

injectGlobal`
    @font-face {
        font-family: 'light';
        src: url(./fonts/MarkGEO-Light.eot);
        src: local('☺'), url(./fonts/MarkGEO-Light.woff) format('woff'), url(./fonts/MarkGEO-Light.ttf) format('truetype'), url(./fonts/MarkGEO-Light.svg) format('svg');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'regular';
        src: url(./fonts/MarkGEO-Regular.eot);
        src: local('☺'), url(./fonts/MarkGEO-Regular.woff) format('woff'), url(./fonts/MarkGEO-Regular.ttf) format('truetype'), url(./fonts/MarkGEO-Regular.svg) format('svg');
        font-weight: normal;
        font-style: normal;
    }
    @font-face {
        font-family: 'bold';
        src: url(./fonts/MarkGEO-SemiBold.eot);
        src: local('☺'), url(./fonts/MarkGEO-SemiBold.woff) format('woff'), url(./fonts/MarkGEO-SemiBold.ttf) format('truetype'), url(./fonts/MarkGEO-SemiBold.svg) format('svg');
        font-weight: normal;
        font-style: normal;
    }

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    button:focus {outline:0;}

    html {
        font-size: 62.5%;

        @media only screen and (max-width: 75em) { 
            font-size: 56.25%; 
        }
        @media only screen and (max-width: 56.25em) {  
            font-size: 50%; 
        }

    }

    body {
        position: relative;
        font-family: regular, bold, light, sans-serif;
        color: #161b1c;
        font-size: 12px;
    }

    strong {
        font-family: bold;
        color: #161b1c;
    }

    .slick-prev:before,
    .slick-next:before {
        color: #67d3f2 !important;
        font-size: 2rem !important;
    }

    .fixed-sticky {
        position: fixed;
        padding: 1rem 3rem 1rem 1rem;
        top: 0;
        left: 0;
        width: 100% !important;
        background: rgba(82, 175, 216,.98);
        box-shadow: 0px 2px 7px rgba(0,0,0,.38);
        z-index: 999 !important;
        opacity: 90%;
    }


    .fixed-sticky-social {
        position: fixed;
        top: 50% !important;
        transform: translateY(-50%) !important;
        left: 1rem !important;
        width: 4rem !important;
        z-index:999 !important;
        width: auto !important;

        @media only screen and (max-width: 56.25em) {
            display:none;
        }
    }
    .fixed-sticky-social > * {
        flex-direction:column;
        opacity: 80%;
    }


    ::-webkit-scrollbar {
        cursor:pointer;
    }
    ::-webkit-scrollbar { width: 10px; }
    ::-webkit-scrollbar-track { background: #90E0F7; border-radius: 1px; }
    ::-webkit-scrollbar-thumb { background: #4189BC; border-radius: 1px; }
`
