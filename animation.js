const transition = {
  duration: 1.4,
  ease: [0.61, 1, 0.88, 1],
}
const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.45,
      staggerChildren: 0.08,
    }
  }
}
const letter = {
  hidden: { opacity: 0, y: 50 , color: '#718'},
  visible: {
    opacity: 1,
    y: 0,
    color: '#e1e1e1'
  }
}

export {letter, sentence, transition}