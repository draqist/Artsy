import { Global } from '@emotion/react'

const Fonts = () => (
  <Global
    styles={
      `
        @font-face {
          font-family: 'Draq';
          font-weight: 700;
          font-style: normal;
          font-display: swap;
          src: url('./public/MarkPro-Heavy.e2c6ce4009c23ed34b4861cb4151990f.woff') format('woff')
        }
      `
    }
  />
)
export default Fonts