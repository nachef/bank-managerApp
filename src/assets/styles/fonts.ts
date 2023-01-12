import { createGlobalStyle } from "styled-components";

import InterBlack from "../fonts/Inter-Black.ttf";
import InterBold from "../fonts/Inter-Bold.ttf";
import InterLight from "../fonts/Inter-Light.ttf";
import InterMedium from "../fonts/Inter-Medium.ttf";
import InterRegular from "../fonts/Inter-Regular.ttf";
import InterSemiBold from "../fonts/Inter-SemiBold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Inter Black';
        src: url(${InterBlack}) format('truetype');
    }

    @font-face {
        font-family: 'Inter Bold';
        src: url(${InterBold}) format('truetype');
    }
    
   @font-face {
      font-family: 'Inter Light';
      src: url(${InterLight}) format('truetype');
    }
        
    @font-face {
      font-family: 'Inter Medium';
      src: url(${InterMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Inter Regular';
      src: url(${InterRegular}) format('truetype');
     }

    @font-face {
        font-family: 'Inter SemiBold';
        src: url(${InterSemiBold}) format('truetype');
    }
`;
