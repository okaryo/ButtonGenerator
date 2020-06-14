import "../stylesheet/index.css"
import { Button } from './button'

const button = new Button('button')

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
    const boxShadowRedValue   = parseInt(button.boxShadowColor.slice(1, 3), 16)
    const boxShadowGreenValue = parseInt(button.boxShadowColor.slice(3, 5), 16)
    const boxShadowBlueValue  = parseInt(button.boxShadowColor.slice(5, 7), 16)
    const hoverBoxShadowRedValue    = parseInt((button.hoverBoxShadowColor.value as string).slice(1, 3), 16)
    const hoverBoxShadowGreenValue  = parseInt((button.hoverBoxShadowColor.value as string).slice(3, 5), 16)
    const hoverBoxShadowBlueValue   = parseInt((button.hoverBoxShadowColor.value as string).slice(5, 7), 16)
    const activeBoxShadowRedValue   = parseInt((button.activeBoxShadowColor.value as string).slice(1, 3), 16)
    const activeBoxShadowGreenValue = parseInt((button.activeBoxShadowColor.value as string).slice(3, 5), 16)
    const activeBoxShadowBlueValue  = parseInt((button.activeBoxShadowColor.value as string).slice(5, 7), 16)

    const cssCode = `.button {
  height: ${button.height};
  width: ${button.width};
  border: ${button.borderStyle} ${button.borderWidth} ${button.borderColor};
  border-radius: ${button.borderRadius};
  font-size: ${button.fontSize};
  font-weight: ${button.fontWeight};
  color: ${button.color};
  box-shadow: ${button.boxShadowX} ${button.boxShadowY} ${button.boxShadowBlur} ${button.boxShadowSpread} rgba(${boxShadowRedValue}, ${boxShadowGreenValue}, ${boxShadowBlueValue}, ${button.boxShadowOpacity});
  background-color: ${button.backgroundColor};
}

.button:hover {
  border-color: ${button.hoverBorderColor.value};
  color: ${button.hoverColor.value};
  box-shadow: ${button.hoverBoxShadowX.value} ${button.hoverBoxShadowY.value} ${button.hoverBoxShadowBlur.value} ${button.hoverBoxShadowSpread.value} rgba(${hoverBoxShadowRedValue}, ${hoverBoxShadowGreenValue}, ${hoverBoxShadowBlueValue}, ${button.hoverBoxShadowOpacity.value});
  background-color: ${button.hoverBackgroundColor.value};
}

.button:active {
  border-color: ${button.activeBorderColor.value};
  color: ${button.activeColor.value};
  box-shadow: ${button.activeBoxShadowX.value} ${button.activeBoxShadowY.value} ${button.activeBoxShadowBlur.value} ${button.activeBoxShadowSpread.value} rgba(${activeBoxShadowRedValue}, ${activeBoxShadowGreenValue}, ${activeBoxShadowBlueValue}, ${button.activeBoxShadowOpacity.value});
  background-color: ${button.activeBackgroundColor.value};
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
