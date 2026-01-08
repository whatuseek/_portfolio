// import React, { useState } from 'react';
// import {
//   Typography,
//   Card,
//   Button,
//   Chip,
//   Box,
//   IconButton,
// } from '@mui/material';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import LaunchIcon from '@mui/icons-material/Launch';
// import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
// import NavigateNextIcon from '@mui/icons-material/NavigateNext';
// import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import { motion, AnimatePresence } from 'framer-motion';
// import SectionWrapper from './SectionWrapper';
// import { PROJECTS } from '../constants';

// const Projects: React.FC = () => {
//   const isVideoLink = (url?: string) =>
//     !!url &&
//     ['youtube', 'youtu.be', 'loom', 'vimeo', 'drive.google.com'].some(p =>
//       url.includes(p)
//     );

//   return (
//     <SectionWrapper id="projects">
//       <Box sx={{ mb: 4, textAlign: 'center' }}>
//         <Typography variant="h3" fontWeight={900}>
//           Featured <span className="text-pearl_aqua-500">Project</span>
//         </Typography>
//         <Typography
//           variant="body2"
//           sx={{ mt: 1, opacity: 0.8, maxWidth: 560, mx: 'auto' }}
//         >
//           Real solutions built to address actual workflow challenges.
//         </Typography>
//       </Box>

//       <div className="flex flex-col gap-12">
//         {PROJECTS.map((project, idx) => (
//           <ProjectCard
//             key={idx}
//             project={project}
//             isVideo={isVideoLink(project.demoLink)}
//           />
//         ))}
//       </div>
//     </SectionWrapper>
//   );
// };

// const ProjectCard: React.FC<{ project: any; isVideo: boolean }> = ({
//   project,
//   isVideo,
// }) => {
//   const [currentIdx, setCurrentIdx] = useState(0);
//   const [imgError, setImgError] = useState(false);

//   const images = project.images || [];
//   const hasMultipleImages = images.length > 1;

//   return (
//     <Card
//       elevation={0}
//       sx={{
//         width: '100%',
//         border: 1,
//         borderColor: 'divider',
//         borderRadius: 1,
//         bgcolor: 'background.paper',
//         boxShadow: 'none',
//       }}
//     >
//       <Box sx={{ px: 3, py: 4 }}>
//         <Typography variant="overline" color="primary" fontWeight={700}>
//           FEATURED PROJECT
//         </Typography>

//         <Typography variant="h5" fontWeight={900} sx={{ mt: 0.5 }}>
//           {project.title}
//         </Typography>

//         <Typography
//           variant="body2"
//           sx={{ mt: 1, opacity: 0.8, lineHeight: 1.6 }}
//         >
//           {project.description}
//         </Typography>

//         {/* Tech Stack */}
//         <Box mt={3}>
//           <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.6 }}>
//             Tech Stack
//           </Typography>
//           <Box className="flex flex-wrap gap-1.5">
//             {project.techStack.map((t: string, i: number) => (
//               <Chip key={i} label={t} size="small" />
//             ))}
//           </Box>
//         </Box>

//         {/* ===== Carousel Wrapper ===== */}
// <Box mt={4}>
//   {/* Image */}
//   <Box
//     sx={{
//       aspectRatio: '16/9',
//       borderRadius: 1,
//       border: 1,
//       borderColor: 'divider',
//       overflow: 'hidden',
//       bgcolor: '#0f172a',
//     }}
//   >
//     <AnimatePresence mode="wait">
//       {!imgError ? (
//         <motion.img
//           key={currentIdx}
//           src={images[currentIdx]}
//           onError={() => setImgError(true)}
//           drag={hasMultipleImages ? 'x' : false}
//           dragConstraints={{ left: 0, right: 0 }}
//           dragElastic={0.12}
//           onDragEnd={(_, info) => {
//             if (!hasMultipleImages) return;
//             if (info.offset.x < -80) {
//               setCurrentIdx((i) => (i + 1) % images.length);
//             } else if (info.offset.x > 80) {
//               setCurrentIdx(
//                 (i) => (i - 1 + images.length) % images.length
//               );
//             }
//           }}
//           initial={{ opacity: 0, x: 24 }}
//           animate={{ opacity: 1, x: 0 }}
//           exit={{ opacity: 0, x: -24 }}
//           transition={{ duration: 0.25 }}
//           style={{
//             width: '100%',
//             height: '100%',
//             objectFit: 'cover',
//             touchAction: 'pan-y',
//           }}
//           draggable={false}
//         />
//       ) : (
//         <Box
//           sx={{
//             height: '100%',
//             display: 'flex',
//             alignItems: 'center',
//             justifyContent: 'center',
//             opacity: 0.4,
//           }}
//         >
//           <Typography variant="caption">
//             Preview unavailable
//           </Typography>
//         </Box>
//       )}
//     </AnimatePresence>
//   </Box>

//   {/* Pagination + Arrows */}
//   {hasMultipleImages && (
//     <Box
//       sx={{
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'center',
//         gap: 1.5,
//         mt: 1.5,
//       }}
//     >
//       {/* Left Arrow */}
//       <IconButton
//         onClick={() =>
//           setCurrentIdx((i) => (i - 1 + images.length) % images.length)
//         }
//         size="small"
//         sx={{ opacity: 0.6 }}
//       >
//         <NavigateBeforeIcon fontSize="small" />
//       </IconButton>

//       {/* Dots (Tap-to-Jump Enabled) */}
//       <Box sx={{ display: 'flex', gap: 1 }}>
//         {images.map((_: any, i: number) => (
//           <Box
//             key={i}
//             onClick={() => setCurrentIdx(i)}   // ✅ TAP TO JUMP
//             sx={{
//               width: 8,                        // slightly larger tap target
//               height: 8,
//               borderRadius: '50%',
//               cursor: 'pointer',
//               bgcolor:
//                 i === currentIdx
//                   ? 'primary.main'
//                   : 'text.disabled',
//               opacity: i === currentIdx ? 1 : 0.4,
//               transition: 'all 0.2s ease',
//               '&:hover': {
//                 opacity: 0.8,
//               },
//             }}
//           />
//         ))}
//       </Box>

//       {/* Right Arrow */}
//       <IconButton
//         onClick={() =>
//           setCurrentIdx((i) => (i + 1) % images.length)
//         }
//         size="small"
//         sx={{ opacity: 0.6 }}
//       >
//         <NavigateNextIcon fontSize="small" />
//       </IconButton>
//     </Box>
//   )}
// </Box>
// {/* ===== End Carousel Wrapper ===== */}

//         {/* CTA */}
//         <Box
//           sx={{
//             mt: 4,
//             display: 'flex',
//             flexDirection: 'column',
//             gap: 2,
//           }}
//         >
//           <Button
//             variant="contained"
//             fullWidth
//             startIcon={isVideo ? <PlayCircleOutlineIcon /> : <LaunchIcon />}
//             href={project.demoLink}
//             target="_blank"
//             sx={{ whiteSpace: 'nowrap' }}
//           >
//             {isVideo ? 'Watch Demo' : 'Live Preview'}
//           </Button>

//           <Button
//             variant="outlined"
//             fullWidth
//             startIcon={<GitHubIcon />}
//             href={project.githubLink}
//             target="_blank"
//             sx={{ whiteSpace: 'nowrap' }}
//           >
//             Source Code
//           </Button>
//         </Box>
//       </Box>
//     </Card>
//   );
// };

// export default Projects;

import React, { useState } from "react";
import {
  Typography,
  Card,
  Button,
  Chip,
  Box,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { motion, AnimatePresence } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { PROJECTS } from "../constants";

const Projects: React.FC = () => {
  const isVideoLink = (url?: string) =>
    !!url &&
    ["youtube", "youtu.be", "loom", "vimeo", "drive.google.com","screenpal",".mp4",
    ".webm",
    ".ogg",].some((p) =>
      url.includes(p)
    );

  return (
    <SectionWrapper id="projects">
      {/* Section Header */}
      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h3" fontWeight={900}>
          Featured <span className="text-pearl_aqua-500">Project</span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ mt: 1, opacity: 0.8, maxWidth: 560, mx: "auto" }}
        >
          Real solutions built to address actual workflow challenges.
        </Typography>
      </Box>

      <div className="flex flex-col gap-12">
        {PROJECTS.map((project, idx) => (
          <ProjectCard
            key={idx}
            project={project}
            isVideo={isVideoLink(project.demoLink)}
          />
        ))}
      </div>
    </SectionWrapper>
  );
};

const ProjectCard: React.FC<{ project: any; isVideo: boolean }> = ({
  project,
  isVideo,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [imgError, setImgError] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const images = project.images || [];
  const hasMultipleImages = images.length > 1;

  return (
    <Card
      elevation={0}
      sx={{
        border: 1,
        borderColor: "divider",
        borderRadius: 1,
        bgcolor: "background.paper",
      }}
    >
      <Box sx={{ px: 3, py: 4 }}>
        {/* Header */}
        <Typography variant="overline" color="primary" fontWeight={700}>
          FEATURED PROJECT
        </Typography>

        <Typography variant="h5" fontWeight={900} sx={{ mt: 0.5 }}>
          {project.title}
        </Typography>

        {/* ✅ Overview + Read more */}
        <Box sx={{ mt: 1 }}>
          <Typography
            variant="body2"
            sx={{ opacity: 0.85, lineHeight: 1.6 }}
          >
            A learning-based internal tool designed to simplify issue tracking,
            improve visibility, and reduce manual follow-ups for support teams.
            {!expanded && (
              <Box
                component="span"
                onClick={() => setExpanded(true)}
                sx={{
                  ml: 0.5,
                  cursor: "pointer",
                  color: "primary.main",
                  fontWeight: 600,
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Read more
              </Box>
            )}
          </Typography>

          {expanded && (
            <>
              <Typography
                variant="body2"
                sx={{
                  mt: 1,
                  opacity: 0.75,
                  lineHeight: 1.7,
                }}
              >
                {project.description}
              </Typography>

              <Box
                onClick={() => setExpanded(false)}
                sx={{
                  mt: 0.75,
                  cursor: "pointer",
                  color: "primary.main",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  display: "inline-block",
                  "&:hover": { textDecoration: "underline" },
                }}
              >
                Read less
              </Box>
            </>
          )}
        </Box>

        {/* Tech Stack */}
        <Box mt={3}>
          <Typography variant="subtitle2" sx={{ mb: 1, opacity: 0.6 }}>
            Tech Stack
          </Typography>
          <Box className="flex flex-wrap gap-1.5">
            {project.techStack.map((t: string, i: number) => (
              <Chip key={i} label={t} size="small" />
            ))}
          </Box>
        </Box>

        {/* ===== Carousel ===== */}
        <Box mt={4}>
          <Box
            sx={{
              aspectRatio: "16/9",
              borderRadius: 1,
              border: 1,
              borderColor: "divider",
              overflow: "hidden",
              bgcolor: "#0f172a",
            }}
          >
            <AnimatePresence mode="wait">
              {!imgError ? (
                <motion.img
                  key={currentIdx}
                  src={images[currentIdx]}
                  onError={() => setImgError(true)}
                  drag={hasMultipleImages ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.12}
                  onDragEnd={(_, info) => {
                    if (!hasMultipleImages) return;
                    if (info.offset.x < -80) {
                      setCurrentIdx((i) => (i + 1) % images.length);
                    } else if (info.offset.x > 80) {
                      setCurrentIdx(
                        (i) => (i - 1 + images.length) % images.length
                      );
                    }
                  }}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.25 }}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  draggable={false}
                />
              ) : (
                <Box
                  sx={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: 0.4,
                  }}
                >
                  <Typography variant="caption">
                    Preview unavailable
                  </Typography>
                </Box>
              )}
            </AnimatePresence>
          </Box>

          {/* Pagination */}
          {hasMultipleImages && (
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1.5,
                mt: 1.5,
              }}
            >
              <IconButton
                onClick={() =>
                  setCurrentIdx((i) => (i - 1 + images.length) % images.length)
                }
                size="small"
                sx={{ opacity: 0.6 }}
              >
                <NavigateBeforeIcon fontSize="small" />
              </IconButton>

              <Box sx={{ display: "flex", gap: 1 }}>
                {images.map((_: any, i: number) => (
                  <Box
                    key={i}
                    onClick={() => setCurrentIdx(i)}
                    sx={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      cursor: "pointer",
                      bgcolor:
                        i === currentIdx
                          ? "primary.main"
                          : "text.disabled",
                      opacity: i === currentIdx ? 1 : 0.4,
                    }}
                  />
                ))}
              </Box>

              <IconButton
                onClick={() =>
                  setCurrentIdx((i) => (i + 1) % images.length)
                }
                size="small"
                sx={{ opacity: 0.6 }}
              >
                <NavigateNextIcon fontSize="small" />
              </IconButton>
            </Box>
          )}
        </Box>

        {/* CTA */}
        <Box sx={{ mt: 4, display: "flex", flexDirection: "column", gap: 2 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={
              isVideo ? <PlayCircleOutlineIcon /> : <LaunchIcon />
            }
            href={project.demoLink}
            target="_blank"
          >
            {isVideo ? "Watch" : "Preview"}
          </Button>

          <Button
            variant="outlined"
            fullWidth
            startIcon={<GitHubIcon />}
            href={project.githubLink}
            target="_blank"
          >
            Code
          </Button>
        </Box>
      </Box>
    </Card>
  );
};

export default Projects;
