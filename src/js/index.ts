import "../stylesheet/index.css"
import { ButtonStyle } from './button'

const button = new ButtonStyle('button')

const generateCSSCodeButton = document.getElementById('generateCSSCodeButton')
generateCSSCodeButton?.addEventListener('click', () => {
  const generatedCSSCodeArea = document.getElementById('generateCSSCodeArea')

  if (generatedCSSCodeArea) {
    const redValue   = parseInt(button.boxShadowColor.slice(1, 3), 16)
    const greenValue = parseInt(button.boxShadowColor.slice(3, 5), 16)
    const blueValue  = parseInt(button.boxShadowColor.slice(5, 7), 16)
    const cssCode = `.button {
  height: ${button.height};
  width: ${button.width};
  border: ${button.borderStyle} ${button.borderWidth} ${button.backgroundColor};
  border-radius: ${button.borderRadius};
  font-size: ${button.fontSize};
  font-weight: ${button.fontWeight};
  color: ${button.color};
  box-shadow: ${button.boxShadowX} ${button.boxShadowY} ${button.boxShadowBlur} ${button.boxShadowSpread} rgba(${redValue}, ${greenValue}, ${blueValue}, ${button.boxShadowOpacity});
  background-color: ${button.backgroundColor};
}`
    generatedCSSCodeArea.style.display = 'inherit'
    generatedCSSCodeArea.innerText = cssCode
  }
})
