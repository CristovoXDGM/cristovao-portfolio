import {extendTheme} from "@chakra-ui/react";

export const theme = extendTheme({
    components:{
          
        Menu:{
            baseStyle:{
                list: {
                  bgColor:"placeHoldColor",
                    
                },
                item:{
                    
                  bgColor:"placeHoldColor",
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
       main:"#001524",
       primary:"#15616D",
       primaryFocus:"#208C9C",
       secondary:"#FFECD1",
       placeHoldColor:"#FF7D00"
    },

});