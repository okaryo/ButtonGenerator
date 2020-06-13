import "../stylesheet/index.css"
import { ButtonStyle } from './button'

const button = new ButtonStyle('button')

const generateCSSCodeButton = document.getElementById('generateCSSCodeButton')
const randomStyleClassForGenerateCodeButton = [
  'randomStyleClass1',
  'randomStyleClass2',
  'randomStyleClass3',
  'randomStyleClass4',
  'randomStyleClass5',
]
const randomNumber = Math.floor(Math.random() * 5)
generateCSSCodeButton?.classList.add(randomStyleClassForGenerateCodeButton[randomNumber])

generateCSSCodeButton?.addEventListener('click', () => {
  const generatedCSSCodeArea = document.getElementById('generateCSSCodeArea')
  const generatedCSSCode = document.querySelector('#generateCSSCodeArea pre') as HTMLElement

  if (generatedCSSCodeArea && generatedCSSCode) {
    const redValue   = parseInt(button.boxShadowColor.slice(1, 3), 16)
    const greenValue = parseInt(button.boxShadowColor.slice(3, 5), 16)
    const blueValue  = parseInt(button.boxShadowColor.slice(5, 7), 16)
    const cssCode = `.button {
  height: ${button.height};
  width: ${button.width};
  border: ${button.borderStyle} ${button.borderWidth} ${button.borderColor};
  border-radius: ${button.borderRadius};
  font-size: ${button.fontSize};
  font-weight: ${button.fontWeight};
  color: ${button.color};
  box-shadow: ${button.boxShadowX} ${button.boxShadowY} ${button.boxShadowBlur} ${button.boxShadowSpread} rgba(${redValue}, ${greenValue}, ${blueValue}, ${button.boxShadowOpacity});
  background-color: ${button.backgroundColor};
}`

    generatedCSSCodeArea.style.display = 'inherit'
    generatedCSSCode.innerText = cssCode

    const copyCSSCodeTab = document.getElementById('copyCSSCode')
    copyCSSCodeTab?.addEventListener('click', () => {
      const copyCodeForm = document.createElement('textarea')
      copyCodeForm.textContent = cssCode
      generatedCSSCodeArea.appendChild(copyCodeForm)
      copyCodeForm.select()
      document.execCommand('copy')
      generatedCSSCodeArea.removeChild(copyCodeForm)
    })
  }
})
