
// import React from 'react';
// import { Typography, Box } from '@mui/material';
// import { motion, Variants } from 'framer-motion';
// import SectionWrapper from './SectionWrapper';
// import { EXPERIENCE } from '../constants';

// const containerVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants: Variants = {
//   hidden: { 
//     opacity: 0, 
//     y: 12
//   },
//   visible: { 
//     opacity: 1, 
//     y: 0, 
//     transition: { 
//       duration: 0.6, 
//       ease: [0.215, 0.61, 0.355, 1.0] as [number, number, number, number]
//     } 
//   }
// };

// const lineVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: { 
//     opacity: 1, 
//     transition: { duration: 1, ease: "easeOut" } 
//   }
// };

// const dotVariants: Variants = {
//   hidden: { opacity: 0 },
//   visible: { 
//     opacity: 1, 
//     transition: { duration: 0.4, delay: 0.1 } 
//   }
// };

// const Experience: React.FC = () => {
//   return (
//     <SectionWrapper 
//       id="experience"
//       className="pt-2 pb-8"
//       delay={0.1}
//     >
//       <Typography variant="h4" component="h2" sx={{ fontWeight: 700, mb: 4, textAlign: 'center', color: 'text.primary' }}>
//         My <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400">Journey</span>
//       </Typography>

//       <motion.div 
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true, margin: "-100px" }}
//         className="relative ml-4 md:ml-auto md:mr-auto max-w-2xl space-y-12"
//       >
//         <motion.div 
//           variants={lineVariants}
//           className="absolute left-0 top-0 bottom-0 border-l-2 border-pearl_aqua-300 dark:border-stormy_teal-300"
//           style={{ transformOrigin: 'top' }}
//         />

//         {EXPERIENCE.map((item, index) => (
//           <motion.div 
//             key={index} 
//             variants={itemVariants} 
//             className="relative pl-8 md:pl-10"
//           >
//             <motion.div 
//               variants={dotVariants}
//               className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-pearl_aqua-500 border-4 border-alice_blue-900 dark:border-stormy_teal-500 z-10"
//             />
            
//             <Box>
//               <Typography 
//                 variant="subtitle2" 
//                 className="text-pearl_aqua-500 dark:text-pearl_aqua-400 uppercase tracking-wider font-bold mb-1"
//               >
//                 {item.period}
//               </Typography>
              
//               <Typography variant="h5" component="h3" fontWeight={700} color="text.primary">
//                 {item.role}
//               </Typography>
              
//               <Typography variant="h6" fontWeight={500} color="text.secondary" gutterBottom>
//                 {item.company}
//               </Typography>
              
//               <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
//                 {item.description}
//               </Typography>
//             </Box>
//           </motion.div>
//         ))}
//       </motion.div>
//     </SectionWrapper>
//   );
// };

// export default Experience;


// import React, { useState } from 'react';
// import {
//   Typography,
//   Box,
//   IconButton,
//   Collapse,
// } from '@mui/material';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import SectionWrapper from './SectionWrapper';
// import { EXPERIENCE } from '../constants';

// const LINE_LEFT = 16; // 🔒 single source of truth

// const Experience: React.FC = () => {
//   return (
//     <SectionWrapper id="experience">
//       {/* Header */}
//       <Box sx={{ mb: 6, textAlign: 'center' }}>
//         <Typography variant="h3" sx={{ fontWeight: 900 }}>
//           My{' '}
//           <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400">
//             Journey
//           </span>
//         </Typography>
//       </Box>

//       {/* Timeline Wrapper */}
//       <Box
//         sx={{
//           position: 'relative',
//           maxWidth: 760,
//           mx: 'auto',
//         }}
//       >
//         {/* Vertical Line */}
//         <Box
//           sx={{
//             position: 'absolute',
//             top: 0,
//             bottom: 0,
//             left: LINE_LEFT,
//             width: 2,
//             bgcolor: 'divider',
//           }}
//         />

//         {EXPERIENCE.map((item, index) => (
//           <TimelineItem key={index} item={item} />
//         ))}
//       </Box>
//     </SectionWrapper>
//   );
// };

// const TimelineItem: React.FC<{ item: any }> = ({ item }) => {
//   const [open, setOpen] = useState(false);

//   return (
//     <Box sx={{ position: 'relative', pb: 6 }}>
//       {/* Dot */}
//       <Box
//         sx={{
//           position: 'absolute',
//           left: LINE_LEFT,
//           top: 6,
//           width: 8,
//           height: 8,
//           borderRadius: '50%',
//           bgcolor: 'primary.main',
//           transform: 'translateX(-50%)',
//         }}
//       />

//       {/* Content */}
//       <Box sx={{ ml: 5 }}>
//         <Typography
//           variant="caption"
//           sx={{ color: 'primary.main', fontWeight: 600 }}
//         >
//           {item.period}
//         </Typography>

//         <Box
//           onClick={() => setOpen((p) => !p)}
//           sx={{
//             mt: 0.5,
//             display: 'flex',
//             justifyContent: 'space-between',
//             cursor: 'pointer',
//             gap: 2,
//           }}
//         >
//           <Box>
//             <Typography variant="h6" fontWeight={800}>
//               {item.role}
//             </Typography>
//             <Typography variant="body2" sx={{ opacity: 0.7 }}>
//               {item.company}
//             </Typography>
//           </Box>

//           <IconButton
//             size="small"
//             sx={{
//               opacity: 0.5,
//               transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
//               transition: 'transform 0.2s ease',
//             }}
//           >
//             <ExpandMoreIcon fontSize="small" />
//           </IconButton>
//         </Box>

//         <Collapse in={open}>
//           <Typography
//             variant="body2"
//             sx={{
//               mt: 1.5,
//               lineHeight: 1.7,
//               opacity: 0.85,
//               maxWidth: 680,
//             }}
//           >
//             {item.description}
//           </Typography>
//         </Collapse>
//       </Box>
//     </Box>
//   );
// };

// export default Experience;

import React, { useState } from 'react';
import {
  Typography,
  Box,
  IconButton,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SectionWrapper from './SectionWrapper';
import { EXPERIENCE } from '../constants';

const LINE_LEFT = 16;     // rail x-position
const LINE_WIDTH = 2;    // rail thickness
const DOT_SIZE = 8;      // dot diameter

const Experience: React.FC = () => {
  return (
    <SectionWrapper id="experience">
      {/* Header */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography variant="h3" sx={{ fontWeight: 900 }}>
          My{' '}
          <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400">
            Journey
          </span>
        </Typography>
      </Box>

      {/* Timeline Wrapper */}
      <Box
        sx={{
          position: 'relative',
          maxWidth: 760,
          mx: 'auto',
        }}
      >
        {/* Vertical Line */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: LINE_LEFT,
            width: LINE_WIDTH,
            bgcolor: 'divider',
          }}
        />

        {EXPERIENCE.map((item, index) => (
          <TimelineItem key={index} item={item} />
        ))}
      </Box>
    </SectionWrapper>
  );
};

const TimelineItem: React.FC<{ item: any }> = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <Box sx={{ position: 'relative', pb: 6 }}>
      {/* ✅ PERFECTLY CENTERED DOT */}
      <Box
        sx={{
          position: 'absolute',
          left: LINE_LEFT + LINE_WIDTH / 2, // 🔑 optical centering fix
          top: 6,
          width: DOT_SIZE,
          height: DOT_SIZE,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Content (unchanged) */}
      <Box sx={{ ml: 5 }}>
        <Typography
          variant="caption"
          sx={{ color: 'primary.main', fontWeight: 600 }}
        >
          {item.period}
        </Typography>

        <Box
          onClick={() => setOpen((p) => !p)}
          sx={{
            mt: 0.5,
            display: 'flex',
            justifyContent: 'space-between',
            cursor: 'pointer',
            gap: 2,
          }}
        >
          <Box>
            <Typography variant="h6" fontWeight={800}>
              {item.role}
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              {item.company}
            </Typography>
          </Box>

          <IconButton
            size="small"
            sx={{
              opacity: 0.5,
              transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 0.2s ease',
            }}
          >
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
        </Box>

        <Collapse in={open}>
          <Typography
            variant="body2"
            sx={{
              mt: 1.5,
              lineHeight: 1.7,
              opacity: 0.85,
              maxWidth: 680,
            }}
          >
            {item.description}
          </Typography>
        </Collapse>
      </Box>
    </Box>
  );
};

export default Experience;

