import React from 'react';
import { Typography, Box } from '@mui/material';
import { PERSONAL_INFO, FOOTER_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        position: 'relative',
        py: { xs: 3.5, sm: 4.5 },   // ✅ reduced, mobile-first
        textAlign: 'center', 
        bgcolor: 'background.paper',
        borderTop: 1, 
        borderColor: 'divider',
        overflow: 'hidden'
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          variant="body2"
          className="text-stormy_teal-300 dark:text-slate-400"
          fontWeight={500}
        >
          © {FOOTER_INFO.year} {PERSONAL_INFO.name}. {FOOTER_INFO.notice}
        </Typography>

        <Typography
          variant="caption"
          className="text-pearl_aqua-500 dark:text-slate-500"
          sx={{ mt: 1, display: 'block', opacity: 0.8 }}
        >
          {FOOTER_INFO.caption}
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
