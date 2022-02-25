import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    components:{
          
        Menu:{
            baseStyle:{
                list: {
                    bgColor:"primary"
                    
                },
                item:{
                    bgColor:"primary",
                    _focus: {
                        bg: "primaryFocus",
                      },
                      _active: {
                        bg:   "primaryFocus",
                      },
                      _expanded: {
                        bg: "primaryFocus",
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