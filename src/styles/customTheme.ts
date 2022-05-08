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
       main:"#323232",
       primary:"#b29f92",
       primaryFocus:"#4351fa",
       secondary:"#ffffff",
       placeHoldColor:"#a0affd"
    },

});