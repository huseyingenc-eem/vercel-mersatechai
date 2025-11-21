"use client";

import React, { useRef } from 'react';
import { useGsapFadeIn, useGsapTextReveal, useGsapClipReveal, useGsapScale } from '@/hooks/use-gsap-animation';

type AnimationType = 'fadeIn' | 'reveal' | 'clipReveal' | 'scale';

interface AnimationWrapperProps {
  children: React.ReactElement;
  animationType?: AnimationType;
  animationOptions?: any;
}

export function AnimationWrapper({
  children,
  animationType,
  animationOptions = {},
}: AnimationWrapperProps) {
  const elementRef = useRef(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const fadeInRef = useGsapFadeIn({ ...animationOptions });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const textRevealRef = useGsapTextReveal({ ...animationOptions });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const clipRevealRef = useGsapClipReveal({ ...animationOptions });
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const scaleRef = useGsapScale({ ...animationOptions });

  let ref: React.RefObject<any>;
  switch (animationType) {
    case 'fadeIn':
      ref = fadeInRef;
      break;
    case 'reveal':
      ref = textRevealRef;
      break;
    case 'clipReveal':
      ref = clipRevealRef;
      break;
    case 'scale':
      ref = scaleRef;
      break;
    default:
      ref = elementRef;
      break;
  }

  return React.cloneElement(children, { ref });
}
