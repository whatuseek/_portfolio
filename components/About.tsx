import React, { useRef } from "react";
import { Typography, Box, Paper, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { ABOUT_ME_SECTIONS } from "../constants";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import SearchIcon from "@mui/icons-material/Search";
import CodeIcon from "@mui/icons-material/Code";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { useAnime } from "../hooks/useAnime";
import SectionWrapper from "./SectionWrapper";

const ICON_MAP: Record<string, React.ReactNode> = {
  history: <WorkHistoryIcon />,
  search: <SearchIcon />,
  code: <CodeIcon />,
  growth: <TrendingUpIcon />,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" as const },
  },
};

/* ---------------- Story Card (UNCHANGED) ---------------- */

const StoryCard: React.FC<{ section: any; icon: React.ReactNode }> = ({
  section,
  icon,
}) => {
  const theme = useTheme();

  return (
    <motion.div variants={cardVariants}>
      <Paper
        elevation={0}
        sx={{
          p: 4,
          height: {
            xs: 380,
            sm: 360,
            md: 340,
          },
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 1,
          border: 1,
          borderColor: 'divider',
          bgcolor: 'background.paper',
          boxShadow: 'none',
          transition: 'border-color 0.25s ease',
          '&:hover': {
            borderColor: 'primary.main',
          },
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            mb: 2,
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              color: 'primary.main',
              display: 'flex',
              p: 1.5,
              borderRadius: 0.5,
              bgcolor:
                theme.palette.mode === 'dark'
                  ? 'rgba(136, 216, 192, 0.1)'
                  : 'rgba(136, 216, 192, 0.1)',
              '& svg': { fontSize: '1.75rem' },
            }}
          >
            {icon}
          </Box>

          <Typography
            variant="h5"
            sx={{
              fontWeight: 800,
              color: 'text.primary',
              fontSize: '1.25rem',
              letterSpacing: -0.5,
            }}
          >
            {section.title}
          </Typography>
        </Box>

        {/* Scrollable Content */}
        <Box
          sx={{
            overflowY: 'auto',
            pr: 1,
            flexGrow: 1,
            color: 'text.secondary',

            /* Subtle scrollbar */
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(255,255,255,0.15)',
              borderRadius: '4px',
            },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.7,
              fontSize: '1rem',
              fontWeight: 400,
            }}
          >
            {section.text}
          </Typography>
        </Box>
      </Paper>
    </motion.div>
  );
};


/* ---------------- About Section ---------------- */

const About: React.FC = () => {
  return (
    <SectionWrapper id="about">
      {/* Header */}
      <Box sx={{ mb: { xs: 6, md: 10 }, textAlign: "center" }}>
        <Typography
          variant="h3"
          sx={{
            fontWeight: 900,
            letterSpacing: -2,
            mb: 2,
            fontSize: { xs: "2.5rem", md: "3.5rem" },
          }}
        >
          My{" "}
          <span className="text-pearl_aqua-500 dark:text-pearl_aqua-400">
            Story
          </span>
        </Typography>

        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            maxWidth: 650,
            mx: "auto",
            fontSize: "1.1rem",
          }}
        >
          Bridging the gap between operational challenges and software solutions
          through a customer-first development mindset.
        </Typography>
      </Box>

      {/* MOBILE: Horizontal Swipe */}
      <Box
        sx={{
          display: { xs: "flex", md: "none" },
          gap: 2,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          px: 2,
          pb: 1,
          "&::-webkit-scrollbar": { display: "none" },
          scrollbarWidth: "none",
        }}
      >
        {ABOUT_ME_SECTIONS.map((section, index) => (
          <Box
            key={index}
            sx={{
              flex: "0 0 85%",
              scrollSnapAlign: "start",
            }}
          >
            <StoryCard section={section} icon={ICON_MAP[section.icon]} />
          </Box>
        ))}
      </Box>

      {/* DESKTOP: Original Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="hidden md:grid md:grid-cols-2 gap-8"
      >
        {ABOUT_ME_SECTIONS.map((section, index) => (
          <StoryCard
            key={index}
            section={section}
            icon={ICON_MAP[section.icon]}
          />
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default About;
