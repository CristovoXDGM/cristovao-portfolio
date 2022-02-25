import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    components:{
          
        Menu:{
            baseStyle:{
                list: {
                  bgGradient:"linear(to-r,placeHoldColor,primary)",
                    
                },
                item:{
                    
                    bgGradient:"linear(to-r,placeHoldColor,primary)",
                    _focus: {
                        bg: "placeHoldColor",
                      },
                      _active: {
                        bg:   "placeHoldColor",
                      },
                      _expanded: {
                        bg: "placeHoldColor",
                      },
                      _disabled: {
                        opacity: 0.4,
                        cursor: "not-allowed",
                      },
                }
            } 
        }
    },
    colors:{
       main:"#010300",
       primary:"#334526",
       primaryFocus:"#526E3E",
       secondary:"#FFFFFF",
       placeHoldColor:"#49A805"
    },

});