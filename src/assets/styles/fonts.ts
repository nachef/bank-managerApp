import { createGlobalStyle } from "styled-components";

import InterBlack from "../fonts/Inter-Black.ttf";
import InterBold from "../fonts/Inter-Bold.ttf";
import InterLight from "../fonts/Inter-Light.ttf";
import InterMedium from "../fonts/Inter-Medium.ttf";
import InterRegular from "../fonts/Inter-Regular.ttf";
import InterSemiBold from "../fonts/Inter-SemiBold.ttf";

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins Black';
        src: url(${InterBlack}) format('truetype');
    }

    @font-face {
        font-family: 'Poppins Bold';
        src: url(${InterBold}) format('truetype');
    }
    
   @font-face {
      font-family: 'Poppins Light';
      src: url(${InterLight}) format('truetype');
    }
        
    @font-face {
      font-family: 'Poppins Medium';
      src: url(${InterMedium}) format('truetype');
    }

    @font-face {
      font-family: 'Poppins Regular';
      src: url(${InterRegular}) format('truetype');
     }

    @font-face {
        font-family: 'Poppins SemiBold';
        src: url(${InterSemiBold}) format('truetype');
    }
`;
