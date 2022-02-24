import { BoxProps, Box, AbsoluteCenterProps, AbsoluteCenter } from '@chakra-ui/react';
import {motion} from "framer-motion"

export const boxAnimatedVariant  = {
    hidden: { x: 40, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type:"spring",
        delayChildren: 0.5,
        staggerChildren: 0.2
      }
      
    }
  };


export const AbsoluteCenterAnimated = motion<AbsoluteCenterProps>(AbsoluteCenter);  
export const BoxAnimated= motion<BoxProps>(Box);