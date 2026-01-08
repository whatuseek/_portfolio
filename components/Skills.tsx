// import React from 'react';
// import { Typography, Paper, Box } from '@mui/material';
// import { motion } from 'framer-motion';
// import SectionWrapper from './SectionWrapper';
// import { SKILLS } from '../constants';

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.08 },
//   },
// };

// const cardVariants = {
//   hidden: { opacity: 0, y: 14 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.4, ease: 'easeOut' as const },
//   },
// };

// const Skills: React.FC = () => {
//   return (
//     <SectionWrapper id="skills" className="pt-2 pb-6">
//       {/* Header */}
//       <Box sx={{ mb: 4, textAlign: 'center' }}>
//         <Typography
//           variant="h3"
//           sx={{
//             fontWeight: 900,
//             letterSpacing: -1,
//             fontSize: { xs: '2rem', md: '2.6rem' },
//           }}
//         >
//           Toolbox &{' '}
//           <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400">
//             Skills
//           </span>
//         </Typography>

//         <Typography
//           variant="body2"
//           sx={{
//             mt: 1,
//             opacity: 0.6,
//             fontStyle: 'italic',
//             maxWidth: 620,
//             mx: 'auto',
//           }}
//         >
//           Percentages indicate frequency of use in real projects.
//         </Typography>
//       </Box>

//       {/* Cards */}
//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//         className="grid grid-cols-1 md:grid-cols-3 gap-8"
//       >
//         {SKILLS.map((category, index) => (
//           <motion.div key={index} variants={cardVariants}>
//             <Paper
//               elevation={0}
//               sx={{
//                 p: 3, // 🔴 reduced from 5
//                 borderRadius: 1,
//                 border: 1,
//                 borderColor: 'divider',
//                 bgcolor: 'background.paper',
//                 height: '100%',
//                 boxShadow: 'none',
//               }}
//             >
//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   fontWeight: 800,
//                   mb: 3,
//                   color: 'primary.main',
//                   display: 'flex',
//                   alignItems: 'center',
//                   gap: 2,
//                 }}
//               >
//                 <span className="w-6 h-1 bg-pearl_aqua-500 rounded-full" />
//                 {category.title}
//               </Typography>

//               <div className="space-y-4">
//                 {category.skills.map((skill, idx) => (
//                   <div key={idx}>
//                     {/* Skill Row */}
//                     <div className="flex justify-between items-center mb-1.5">
//                       <Box
//                         sx={{
//                           display: 'flex',
//                           alignItems: 'center',
//                           gap: 1.25,
//                         }}
//                       >
//                         {skill.icon && (
//                           <Box
//                             sx={{
//                               color: 'primary.main',
//                               display: 'flex',
//                               opacity: 0.75,
//                             }}
//                           >
//                             {skill.icon}
//                           </Box>
//                         )}
//                         <Typography
//                           variant="body2"
//                           sx={{ fontWeight: 600 }}
//                         >
//                           {skill.name}
//                         </Typography>
//                       </Box>

//                       {/* Percentage – visually quieter */}
//                       <Typography
//                         variant="caption"
//                         sx={{
//                           fontWeight: 600,
//                           opacity: 0.6,
//                         }}
//                       >
//                         {skill.level}%
//                       </Typography>
//                     </div>

//                     {/* Progress Bar – thinner */}
//                     <div className="h-1.5 w-full bg-alice_blue-700 dark:bg-stormy_teal-300 rounded-full overflow-hidden">
//                       <motion.div
//                         initial={{ width: 0 }}
//                         whileInView={{ width: `${skill.level}%` }}
//                         viewport={{ once: true }}
//                         transition={{
//                           duration: 0.7,
//                           delay: 0.1 + idx * 0.05,
//                           ease: 'easeOut',
//                         }}
//                         className="h-full bg-pearl_aqua-400 rounded-full origin-left"
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </Paper>
//           </motion.div>
//         ))}
//       </motion.div>
//     </SectionWrapper>
//   );
// };

// export default Skills;



import React from 'react';
import {
  Typography,
  Paper,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { motion } from 'framer-motion';
import SectionWrapper from './SectionWrapper';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <SectionWrapper id="skills" className="pt-2 pb-6">
      {/* Header */}
      <Box sx={{ mb: 4, textAlign: 'center' }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            letterSpacing: -1,
            fontSize: { xs: '2rem', md: '2.6rem' },
          }}
        >
          Toolbox &{' '}
          <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400">
            Skills
          </span>
        </Typography>

        <Typography
          variant="body2"
          sx={{
            mt: 1,
            opacity: 0.6,
            fontStyle: 'italic',
            maxWidth: 620,
            mx: 'auto',
          }}
        >
          Percentages indicate frequency of use in real projects.
        </Typography>
      </Box>

      {/* Accordion by Category */}
      <Box sx={{ maxWidth: 900, mx: 'auto' }}>
        {SKILLS.map((category, index) => (
          <Accordion
            key={index}
            defaultExpanded={isDesktop} // 👈 expanded on desktop
            disableGutters
            elevation={0}
            sx={{
              mb: 2,
              border: 1,
              borderColor: 'divider',
              borderRadius: 1,
              bgcolor: 'background.paper',
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 800,
                  color: 'primary.main',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                }}
              >
                <span className="w-6 h-1 bg-pearl_aqua-500 rounded-full" />
                {category.title}
              </Typography>
            </AccordionSummary>

            <AccordionDetails>
              <div className="space-y-4">
                {category.skills.map((skill, idx) => (
                  <div key={idx}>
                    {/* Skill Row */}
                    <div className="flex justify-between items-center mb-1.5">
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 1.25,
                        }}
                      >
                        {skill.icon && (
                          <Box
                            sx={{
                              color: 'primary.main',
                              display: 'flex',
                              opacity: 0.75,
                            }}
                          >
                            {skill.icon}
                          </Box>
                        )}
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: 600 }}
                        >
                          {skill.name}
                        </Typography>
                      </Box>

                      <Typography
                        variant="caption"
                        sx={{ fontWeight: 600, opacity: 0.6 }}
                      >
                        {skill.level}%
                      </Typography>
                    </div>

                    {/* Progress Bar */}
                    <div className="h-1.5 w-full bg-alice_blue-700 dark:bg-stormy_teal-300 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.7,
                          delay: 0.05 + idx * 0.04,
                          ease: 'easeOut',
                        }}
                        className="h-full bg-pearl_aqua-400 rounded-full origin-left"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </SectionWrapper>
  );
};

export default Skills;
