/**
 * Shared Framer Motion variants for consistent animations across the app.
 */

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -12 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
}

export const slideDown = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const slideInRight = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
}

export const slideInLeft = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0 },
}

export const scaleIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
}

/** Stagger container: use with staggerChildren in transition */
export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

/** Stagger container with faster delay for lists */
export const staggerContainerFast = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

/** Item to use inside stagger containers */
export const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export const staggerItemFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

/** Default transition for most elements */
export const defaultTransition = {
  type: 'tween',
  duration: 0.4,
  ease: [0.25, 0.46, 0.45, 0.94],
}

export const springTransition = {
  type: 'spring',
  stiffness: 300,
  damping: 30,
}

export const smoothTransition = {
  type: 'tween',
  duration: 0.5,
  ease: [0.22, 1, 0.36, 1],
}
