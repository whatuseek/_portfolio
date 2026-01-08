import React, { useEffect, useRef, useState } from 'react';
import { Typography, Button, Box, useTheme, Skeleton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { PERSONAL_INFO } from '../constants';
import gsap from 'gsap';
import { useAnime } from '../hooks/useAnime';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { animate, hoverScale, pressDown, reset } = useAnime();
  const theme = useTheme();

  const downloadFilename = `Resume_${PERSONAL_INFO.name.replace(/\s+/g, '_')}.pdf`;

  // GSAP animations
  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { duration: 0.7, ease: 'power2.out' },
      });

      tl.from('.gsap-hero-image', {
        opacity: 0,
        scale: 0.96,
        duration: 0.9,
      });

      tl.from(
        '.gsap-headline span',
        { opacity: 0, y: 20, stagger: 0.1 },
        '-=0.5'
      );

      tl.from('.gsap-subtitle', { opacity: 0, y: 15 }, '-=0.4');

      tl.from('.gsap-ctas', { opacity: 0, y: 10 }, '-=0.3');
    }, heroRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (imageRef.current && imageRef.current.complete) {
      setImgLoaded(true);
    }
  }, []);

  useEffect(() => {
    const handleLogoClick = () => {
      if (!imageRef.current) return;

      animate({
        targets: imageRef.current,
        scale: [1, 1.05, 1],
        translateY: [0, -10, 0],
        duration: 900,
        easing: 'easeInOutSine',
      });
    };

    window.addEventListener('logo-clicked', handleLogoClick);
    return () => window.removeEventListener('logo-clicked', handleLogoClick);
  }, [animate]);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    if (hasError) return;
    setHasError(true);
    setImgLoaded(true);

    e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      PERSONAL_INFO.name
    )}&background=88D8C0&color=1A252F&size=512&bold=true`;
  };

  return (
    <div
      ref={heroRef}
      className="relative w-full overflow-hidden bg-transparent transition-colors duration-500"
    >
      <section
        id="hero"
        className="relative z-10 py-12 md:py-24 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 min-h-[60vh]"
      >
        {/* IMAGE */}
        <div className="w-full md:flex-1 flex justify-center items-center order-1 md:order-2">
          <div className="gsap-hero-image">
            <div
              className="
                relative
                w-36 h-36            /* ✅ reduced mobile */
                sm:w-52 sm:h-52      /* ✅ balanced tablet */
                lg:w-72 lg:h-72      /* 🔒 desktop unchanged */
                bg-alice_blue-800 dark:bg-stormy_teal-300
                rounded-full overflow-hidden
                shadow-xl
                ring-4 ring-pearl_aqua-300 dark:ring-stormy_teal-300
              "
            >
              {!imgLoaded && (
                <Skeleton
                  variant="circular"
                  width="100%"
                  height="100%"
                  animation="wave"
                  sx={{ position: 'absolute', inset: 0, zIndex: 3 }}
                />
              )}

              <img
                ref={imageRef}
                src={PERSONAL_INFO.profileImage}
                alt={PERSONAL_INFO.name}
                onLoad={() => setImgLoaded(true)}
                onError={handleImageError}
                className={`w-full h-full object-cover rounded-full transition-opacity duration-500 ${
                  imgLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ position: 'relative', zIndex: 2 }}
                draggable={false}
              />
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="w-full md:flex-[1.5] text-center md:text-left order-2 md:order-1">
          <Typography
            variant="overline"
            className="gsap-headline text-stormy_teal-500 dark:text-pearl_aqua-400 font-bold tracking-widest block mb-4"
            sx={{ fontSize: '0.85rem' }}
          >
            <span>{PERSONAL_INFO.heroOverline}</span>
          </Typography>

          <Typography
            variant="h1"
            className="gsap-headline"
            sx={{
              fontWeight: 900,
              mb: 3,
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '3.8rem', lg: '4.2rem' },
              lineHeight: 1.1,
              letterSpacing: -2,
            }}
          >
            <span>{PERSONAL_INFO.heroTitleLine1}</span>{' '}
            <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400">
              {PERSONAL_INFO.heroTitleHighlight}
            </span>
            <br />
            <span>{PERSONAL_INFO.heroTitleLine2}</span>
            <br />
            <span>{PERSONAL_INFO.heroTitleLine3}</span>
          </Typography>

          <Typography
            variant="h6"
            className="gsap-subtitle"
            sx={{
              mb: 6,
              maxWidth: { xs: '100%', md: '90%' },
              mx: { xs: 'auto', md: 0 },
              lineHeight: 1.7,
              fontSize: '1.1rem',
            }}
          >
            {PERSONAL_INFO.tagline}
          </Typography>

          <Box className="gsap-ctas flex gap-4 justify-center md:justify-start">
            <Button
              variant="contained"
              startIcon={<DownloadIcon />}
              href={PERSONAL_INFO.resumeLink}
              component="a"
              download={downloadFilename}
              onMouseEnter={(e) => hoverScale(e.currentTarget)}
              onMouseLeave={(e) => reset(e.currentTarget)}
              onMouseDown={(e) => pressDown(e.currentTarget)}
              onMouseUp={(e) => hoverScale(e.currentTarget)}
            >
              RESUME
            </Button>

            <Button
              variant="outlined"
              startIcon={<VisibilityIcon />}
              href="#projects"
              onMouseEnter={(e) => hoverScale(e.currentTarget)}
              onMouseLeave={(e) => reset(e.currentTarget)}
              onMouseDown={(e) => pressDown(e.currentTarget)}
              onMouseUp={(e) => hoverScale(e.currentTarget)}
            >
              PROJECTS
            </Button>
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Hero;
