
import React, { useState, useEffect, useRef } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Box } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ConstructionIcon from '@mui/icons-material/Construction';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import LayersIcon from '@mui/icons-material/Layers';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { useThemeContext } from '../utils/themeContext';
import { PERSONAL_INFO } from '../constants';
import { useAnime } from '../hooks/useAnime';

const NAV_ITEMS = [
  { label: 'About', href: '#about', id: 'about', icon: <InfoOutlinedIcon fontSize="small" /> },
  { label: 'Skills', href: '#skills', id: 'skills', icon: <ConstructionIcon fontSize="small" /> },
  { label: 'Projects', href: '#projects', id: 'projects', icon: <LayersIcon fontSize="small" /> },
  { label: 'Experience', href: '#experience', id: 'experience', icon: <WorkOutlineIcon fontSize="small" /> },
  { label: 'Contact', href: '#contact', id: 'contact', icon: <EmailOutlinedIcon fontSize="small" /> },
];

const Header: React.FC = () => {
  const { mode, toggleTheme } = useThemeContext();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const themeToggleRef = useRef<HTMLButtonElement>(null);
  const { animate, pressDown, hoverScale, reset } = useAnime();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const handleNavClick = (e: any, targetId: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const onThemeToggleTap = () => {
    toggleTheme();
    animate({
      targets: themeToggleRef.current,
      scale: [1, 1.1, 1],
      duration: 300,
      easing: 'easeOutQuad'
    });
  };

  const nameParts = PERSONAL_INFO.name.split(' ');

  return (
    <>
      <AppBar 
        position="fixed" 
        color="default" 
        elevation={0}
        sx={{ 
          bgcolor: mode === 'dark' ? 'rgba(26, 37, 47, 0.85)' : 'rgba(240, 248, 255, 0.85)',
          backdropFilter: 'blur(12px)',
          border: mode === 'dark' ? 'none' : undefined,
          boxShadow: mode === 'dark' 
            ? '0 4px 20px -5px rgba(0, 0, 0, 0.8)' 
            : '0 4px 20px -5px rgba(0, 0, 0, 0.3)',
          zIndex: 1600, 
        }}
      >
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <Toolbar 
            disableGutters
            sx={{ 
              justifyContent: 'space-between', 
              minHeight: 64,
              height: 64,
            }}
          >
            {/* Left: Logo */}
            <Typography 
              variant="h6" 
              component="a"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMenuOpen(false);
                window.dispatchEvent(new CustomEvent('logo-clicked'));
              }}
              sx={{ 
                fontWeight: 800, 
                color: 'text.primary', 
                textDecoration: 'none',
                letterSpacing: -1,
                display: 'flex',
                alignItems: 'baseline',
                cursor: 'pointer',
                flexShrink: 0
              }}
            >
              {nameParts[0]}
              {nameParts[1] && (
                <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400 ml-1.5">{nameParts[1]}</span>
              )}
              <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400">.</span>
            </Typography>

            {/* Center: Desktop Navigation */}
            <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 4, alignItems: 'center' }}>
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="text-base lg:text-lg font-semibold text-stormy_teal-300 dark:text-alice_blue-800 hover:text-pearl_aqua-500 dark:hover:text-pearl_aqua-400 transition-colors no-underline"
                >
                  {item.label}
                </a>
              ))}
            </Box>

            {/* Right: Actions */}
            <Box display="flex" alignItems="center" gap={1} sx={{ flexShrink: 0 }}>
              <IconButton 
                ref={themeToggleRef}
                onClick={onThemeToggleTap}
                onMouseEnter={(e) => hoverScale(e.currentTarget, 1.1)}
                onMouseLeave={(e) => reset(e.currentTarget)}
                sx={{ width: 40, height: 40 }}
              >
                {mode === 'dark' ? (
                  <LightModeIcon sx={{ fontSize: 20, color: '#88D8C0' }} />
                ) : (
                  <DarkModeIcon sx={{ fontSize: 20, color: '#64748b' }} />
                )}
              </IconButton>

              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton 
                  onClick={() => setIsMenuOpen(!isMenuOpen)} 
                  onMouseDown={(e) => pressDown(e.currentTarget)}
                  sx={{ width: 40, height: 40, color: 'text.primary' }}
                >
                  <div className="w-5 h-4 relative flex flex-col justify-between items-end">
                    <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
                    <span className={`w-3/4 h-0.5 bg-current rounded-full transition-all duration-200 ${isMenuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                    <span className={`w-full h-0.5 bg-current rounded-full transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
                  </div>
                </IconButton>
              </Box>
            </Box>
          </Toolbar>
        </div>
      </AppBar>

      {/* Backdrop */}
      <div 
        className={`fixed inset-0 top-[64px] z-[1400] bg-black/10 backdrop-blur-[2px] md:hidden transition-opacity duration-200 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
        onClick={() => setIsMenuOpen(false)} 
      />

      {/* Mobile Menu Panel - Tailwind Roll-Down Animation */}
      <div 
        className={`fixed top-[64px] left-0 right-0 z-[1500] md:hidden transition-all duration-200 ease-out transform ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`}
      >
        <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="bg-alice_blue-900 dark:bg-stormy_teal-500 shadow-2xl rounded-b-lg border-x border-b border-pearl_aqua-300/20 dark:border-stormy_teal-300/30 overflow-hidden">
            <nav className="flex flex-col py-6 px-4 gap-1">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className="flex items-center gap-4 px-5 py-4 rounded-md text-xl font-bold text-stormy_teal-500 dark:text-alice_blue-900 hover:bg-pearl_aqua-500/10 dark:hover:bg-pearl_aqua-400/10 transition-colors no-underline group"
                >
                  <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </span>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>

      <Box sx={{ height: 64 }} />
    </>
  );
};

export default Header;
