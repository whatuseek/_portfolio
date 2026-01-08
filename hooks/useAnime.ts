import { useCallback, useMemo } from 'react';
import anime from 'animejs';

export const useAnime = () => {
  const prefersReducedMotion = useMemo(
    () => window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  );

  const animate = useCallback(
    // Fix: Use any type as AnimeParams is not exported from the resolved animejs module
    (params: any) => {
      if (prefersReducedMotion) return;
      // Fix: Cast anime to any as it's not correctly identified as a callable function in this environment
      return (anime as any)(params);
    },
    [prefersReducedMotion]
  );

  const hoverScale = useCallback(
    (target: HTMLElement | null, scale = 1.02) => {
      if (!target) return;
      animate({
        targets: target,
        scale: scale,
        duration: 200,
        easing: 'easeOutQuad',
      });
    },
    [animate]
  );

  const pressDown = useCallback(
    (target: HTMLElement | null) => {
      if (!target) return;
      animate({
        targets: target,
        scale: 0.98,
        duration: 150,
        easing: 'easeOutQuad',
      });
    },
    [animate]
  );

  const elevate = useCallback(
    (target: HTMLElement | null) => {
      if (!target) return;
      animate({
        targets: target,
        translateY: -2, // Strategy A: Very subtle lift
        duration: 250,
        easing: 'easeOutQuad',
      });
    },
    [animate]
  );

  const reset = useCallback(
    (target: HTMLElement | null) => {
      if (!target) return;
      animate({
        targets: target,
        scale: 1,
        translateY: 0,
        rotate: 0,
        duration: 200,
        easing: 'easeOutQuad',
      });
    },
    [animate]
  );

  return { animate, hoverScale, pressDown, elevate, reset };
};
