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
       main:"#EFD6AC",
       primary:"#183A37",
       primaryFocus:"#1E4945",
       secondary:"#04151F",
       placeHoldColor:"#171718"
    },

});