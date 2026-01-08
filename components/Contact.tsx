import React, { useRef } from 'react';
import { Typography, Box, Paper } from '@mui/material';
import SectionWrapper from './SectionWrapper';
import { CONTACT_LINKS, CONTACT_INFO } from '../constants';
import { useAnime } from '../hooks/useAnime';

const ContactItem: React.FC<{ link: any }> = ({ link }) => {
  const itemRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const { hoverScale, pressDown, reset } = useAnime();

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline text-inherit"
      style={{ flex: '1 1 0', minWidth: 0 }}
      onMouseEnter={() => {
        hoverScale(itemRef.current, 1.03);
        hoverScale(iconRef.current, 1.15);
      }}
      onMouseLeave={() => {
        reset(itemRef.current);
        reset(iconRef.current);
      }}
      onMouseDown={() => pressDown(itemRef.current)}
      onMouseUp={() => hoverScale(itemRef.current, 1.03)}
    >
      <Paper
        ref={itemRef}
        elevation={0}
        sx={{
          height: '100%',
          py: { xs: 3, md: 3.5 },     // ✅ breathing comes from vertical space
          px: { xs: 1.5, md: 2 },
          borderRadius: 1,
          border: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          boxShadow: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'border-color 0.25s ease',
          '&:hover': {
            borderColor: 'primary.main',
          },
        }}
      >
        <Box
          ref={iconRef}
          sx={{
            color: 'primary.main',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
              fontSize: { xs: 26, md: 30 }, // ✅ slightly more emphasis
            },
          }}
        >
          {link.icon}
        </Box>
      </Paper>
    </a>
  );
};


const Contact: React.FC = () => {
  return (
    <SectionWrapper id="contact" className="pt-4 pb-16">
      <Typography
        variant="h4"
        component="h2"
        sx={{
          fontWeight: 800,
          mb: 1,
          textAlign: 'center',
          letterSpacing: -1,
        }}
      >
        Get In{' '}
        <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400">
          Touch
        </span>
      </Typography>

      <Typography
        variant="body1"
        sx={{
          mb: 5,
          textAlign: 'center',
          color: 'text.secondary',
          px: 2,
          maxWidth: 600,
          mx: 'auto',
          fontSize: { xs: '0.9rem', md: '1rem' },
        }}
      >
        {CONTACT_INFO.subtitle}
      </Typography>

      {/* Contact Cards – single row, no overflow */}
      <Box
        sx={{
          maxWidth: 900,                  // ✅ same as app rhythm
          mx: 'auto',
          px: 2,
          display: 'flex',
          gap: { xs: 1, md: 2 },
          overflow: 'hidden',             // safety guard
        }}
      >
        {CONTACT_LINKS.map((link, index) => (
          <ContactItem key={index} link={link} />
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default Contact;
