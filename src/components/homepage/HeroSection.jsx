import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/hero.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        objectFit: "cover",
        minHeight: "100vh",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, rgba(255,255,255,0.6), rgba(255,255,255,0.9))",
        }}
      ></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          position: "relative",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileInView={{
            scale: [1, 1.02, 1],
            transition: { repeat: Infinity, duration: 3 },
          }}
          style={{
            fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
            color: "#1D4ED8",
            marginBottom: "1rem",
            fontWeight: "700",
          }}
        >
          Empowering Global Journeys
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "#374151",
            marginBottom: "2rem",
            lineHeight: "1.6",
          }}
        >
          Flyrunz Travel Consult helps students, professionals, and entrepreneurs access global opportunities through education, vocational training, and career mobility programs.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "1rem",
          }}
        >
          <a href="#inquiry"><MotionButton bg="#1D4ED8" text="#FFFFFF" label="Find Your Path" /></a>
          <a href="#programs"><MotionButton bg="#F59E0B" text="#FFFFFF" label="Explore Programs" /></a>
          <a href="#contact"><MotionOutlineButton border="#1D4ED8" label="Talk to an Advisor" /></a>
        </motion.div>
      </motion.div>
    </div>
  );
};

// Motion-enhanced button
const MotionButton = ({ bg, text, label }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
    whileTap={{ scale: 0.95 }}
    style={buttonStyle(bg, text)}
    aria-label={label}
  >
    {label}
  </motion.button>
);

// Motion-enhanced outline button
const MotionOutlineButton = ({ border, label }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
    whileTap={{ scale: 0.95 }}
    style={outlineButtonStyle(border)}
    aria-label={label}
  >
    {label}
  </motion.button>
);

// Button styles
const buttonStyle = (bgColor, textColor) => ({
  backgroundColor: bgColor,
  color: textColor,
  padding: "12px 24px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  transition: "background-color 0.3s",
  fontSize: "clamp(0.9rem, 2vw, 1rem)",
});

const outlineButtonStyle = (borderColor) => ({
  backgroundColor: "transparent",
  color: borderColor,
  padding: "12px 24px",
  borderRadius: "8px",
  border: `2px solid ${borderColor}`,
  cursor: "pointer",
  transition: "all 0.3s",
  fontSize: "clamp(0.9rem, 2vw, 1rem)",
});

export default HeroSection;
