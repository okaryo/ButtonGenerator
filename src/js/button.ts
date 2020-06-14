export class Button {
  targetButtonElement: HTMLElement | null
  height: string
  width: string
  borderRadius: string
  borderWidth: string
  borderStyle: string
  borderColor: string
  fontSize: string
  fontWeight: number
  color: string
  boxShadowX: string
  boxShadowY: string
  boxShadowBlur: string
  boxShadowSpread: string
  boxShadowColor: string
  boxShadowOpacity: number
  backgroundColor: string

  constructor(targetId: string) {
    this.targetButtonElement = document.getElementById(targetId)
    this.height           = '21px'
    this.width            = '54px'
    this.borderRadius     = '2px'
    this.borderWidth      = '2px'
    this.borderStyle      = 'outset'
    this.borderColor      = '#000000'
    this.fontSize         = '13px'
    this.fontWeight       = 400
    this.color            = '#000000'
    this.boxShadowX       = '0px'
    this.boxShadowY       = '0px'
    this.boxShadowBlur    = '0px'
    this.boxShadowSpread  = '0px'
    this.boxShadowColor   = '#ffffff'
    this.boxShadowOpacity = 0.75
    this.backgroundColor  = '#efefef'

    this.setHeightEventListener()
    this.setWidthEventListener()
    this.setBorderRadiusEventListener()
    this.setBorderWidthEventListener()
    this.setBorderStyleEventListener()
    this.setBorderColorEventListener()
    this.setFontSizeEventListener()
    this.setFontWeightEventListener()
    this.setColorEventListener()
    this.setBoxShadowXEventListener()
    this.setBoxShadowYEventListener()
    this.setBoxShadowBlurEventListener()
    this.setBoxShadowSpreadEventListener()
    this.setBoxShadowOpacityEventListener()
    this.setBoxShadowColorEventListener()
    this.setBackgroundColorEventListener()
  }

  setHeightEventListener() {
    const heightRange: HTMLElement | null = document.getElementById('heightRange')

    heightRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement
      const heightDisplayValue = document.getElementById('heightDisplayValue')

      if (this.targetButtonElement && heightDisplayValue) {
        this.height = target.value + 'px'
        this.targetButtonElement.style.height = this.height
        heightDisplayValue.innerText = this.height
      }
    })
  }

  setWidthEventListener() {
    const widthRange: HTMLElement | null = document.getElementById('widthRange')

    widthRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement
      const widthDisplayValue = document.getElementById('widthDisplayValue')

      if (this.targetButtonElement && widthDisplayValue) {
        this.width = target.value + 'px'
        this.targetButtonElement.style.width = this.width
        widthDisplayValue.innerText = this.width
      }
    })
  }

  setEventListener() {
    const widthRange: HTMLElement | null = document.getElementById('widthRange')

    widthRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement
      const widthDisplayValue = document.getElementById('widthDisplayValue')

      if (this.targetButtonElement && widthDisplayValue) {
        this.width = target.value + 'px'
        this.targetButtonElement.style.width = this.width
        widthDisplayValue.innerText = this.width
      }
    })
  }

  setBorderRadiusEventListener() {
    const borderRadiusRange: HTMLElement | null = document.getElementById('borderRadiusRange')
    const borderRadiusDisplayValue = document.getElementById('borderRadiusDisplayValue')

    borderRadiusRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && borderRadiusDisplayValue) {
        this.borderRadius = target.value + 'px'
        this.targetButtonElement.style.borderRadius = this.borderRadius
        borderRadiusDisplayValue.innerText = this.borderRadius
      }
    })
  }

  setBorderWidthEventListener() {
    const borderWidthRange: HTMLElement | null = document.getElementById('borderWidthRange')
    const borderWidthDisplayValue = document.getElementById('borderWidthDisplayValue')

    borderWidthRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && borderWidthDisplayValue) {
        this.borderWidth = target.value + 'px'
        this.targetButtonElement.style.borderWidth = this.borderWidth
        borderWidthDisplayValue.innerText = this.borderWidth
      }
    })
  }

  setBorderStyleEventListener() {
    const borderStyleRange: HTMLElement | null = document.getElementById('borderStyleRange')
    const borderStyleDisplayValue = document.getElementById('borderStyleDisplayValue')

    borderStyleRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && borderStyleDisplayValue) {
        const borderStyleValues: Array<string> = ['none', 'hidden', 'solid', 'double', 'groove', 'ridge', 'inset', 'outset', 'dashed', 'dotted']

        this.borderStyle = borderStyleValues[Number(target.value)]
        this.targetButtonElement.style.borderStyle = this.borderStyle
        borderStyleDisplayValue.innerText = this.borderStyle
      }
    })
  }

  setBorderColorEventListener() {
    const borderColorPicker: HTMLElement | null = document.getElementById('borderColorPicker')
    const borderColorDisplayValue = document.getElementById('borderColorDisplayValue')

    borderColorPicker?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && borderColorDisplayValue) {
        this.borderColor = target.value
        this.targetButtonElement.style.borderColor = this.borderColor
        borderColorDisplayValue.innerText = this.borderColor
      }
    })
  }

  setFontSizeEventListener() {
    const fontSizeRange: HTMLElement | null = document.getElementById('fontSizeRange')
    const fontSizeDisplayValue = document.getElementById('fontSizeDisplayValue')

    fontSizeRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && fontSizeDisplayValue) {
        this.fontSize = target.value + 'px'
        this.targetButtonElement.style.fontSize = this.fontSize
        fontSizeDisplayValue.innerText = this.fontSize
      }
    })
  }

  setFontWeightEventListener() {
    const fontWeightRange: HTMLElement | null = document.getElementById('fontWeightRange')
    const fontWeightDisplayValue = document.getElementById('fontWeightDisplayValue')

    fontWeightRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && fontWeightDisplayValue) {
        this.fontWeight = Number(target.value)
        this.targetButtonElement.style.fontWeight = String(this.fontWeight)
        fontWeightDisplayValue.innerText = String(this.fontWeight)
      }
    })
  }

  setColorEventListener() {
    const colorPicker: HTMLElement | null = document.getElementById('colorPicker')
    const colorDisplayValue = document.getElementById('colorDisplayValue')

    colorPicker?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && colorDisplayValue) {
        this.color = target.value
        this.targetButtonElement.style.color = this.color
        colorDisplayValue.innerText = this.color
      }
    })
  }

  setBoxShadowXEventListener() {
    const boxShadowXRange: HTMLElement | null = document.getElementById('boxShadowXRange')
    const boxShadowXDisplayValue = document.getElementById('boxShadowXDisplayValue')

    boxShadowXRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && boxShadowXDisplayValue) {
        const redValue   = parseInt(this.boxShadowColor.slice(1, 3), 16)
        const greenValue = parseInt(this.boxShadowColor.slice(3, 5), 16)
        const blueValue  = parseInt(this.boxShadowColor.slice(5, 7), 16)

        this.boxShadowX = target.value + 'px'
        this.targetButtonElement.style.boxShadow = `${this.boxShadowX} ${this.boxShadowY} ${this.boxShadowBlur} ${this.boxShadowSpread} rgba(${redValue}, ${greenValue}, ${blueValue}, ${this.boxShadowOpacity})`
        boxShadowXDisplayValue.innerText = this.boxShadowX
      }
    })
  }

  setBoxShadowYEventListener() {
    const boxShadowYRange: HTMLElement | null = document.getElementById('boxShadowYRange')
    const boxShadowYDisplayValue = document.getElementById('boxShadowYDisplayValue')

    boxShadowYRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && boxShadowYDisplayValue) {
        const redValue   = parseInt(this.boxShadowColor.slice(1, 3), 16)
        const greenValue = parseInt(this.boxShadowColor.slice(3, 5), 16)
        const blueValue  = parseInt(this.boxShadowColor.slice(5, 7), 16)

        this.boxShadowY = target.value + 'px'
        this.targetButtonElement.style.boxShadow = `${this.boxShadowX} ${this.boxShadowY} ${this.boxShadowBlur} ${this.boxShadowSpread} rgba(${redValue}, ${greenValue}, ${blueValue}, ${this.boxShadowOpacity})`
        boxShadowYDisplayValue.innerText = this.boxShadowY
      }
    })
  }

  setBoxShadowBlurEventListener() {
    const boxShadowBlurRange: HTMLElement | null = document.getElementById('boxShadowBlurRange')
    const boxShadowBlurDisplayValue = document.getElementById('boxShadowBlurDisplayValue')

    boxShadowBlurRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && boxShadowBlurDisplayValue) {
        const redValue   = parseInt(this.boxShadowColor.slice(1, 3), 16)
        const greenValue = parseInt(this.boxShadowColor.slice(3, 5), 16)
        const blueValue  = parseInt(this.boxShadowColor.slice(5, 7), 16)

        this.boxShadowBlur = target.value + 'px'
        this.targetButtonElement.style.boxShadow = `${this.boxShadowX} ${this.boxShadowY} ${this.boxShadowBlur} ${this.boxShadowSpread} rgba(${redValue}, ${greenValue}, ${blueValue}, ${this.boxShadowOpacity})`
        boxShadowBlurDisplayValue.innerText = this.boxShadowBlur
      }
    })
  }

  setBoxShadowSpreadEventListener() {
    const boxShadowSpreadRange: HTMLElement | null = document.getElementById('boxShadowSpreadRange')
    const boxShadowSpreadDisplayValue = document.getElementById('boxShadowSpreadDisplayValue')

    boxShadowSpreadRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && boxShadowSpreadDisplayValue) {
        const redValue   = parseInt(this.boxShadowColor.slice(1, 3), 16)
        const greenValue = parseInt(this.boxShadowColor.slice(3, 5), 16)
        const blueValue  = parseInt(this.boxShadowColor.slice(5, 7), 16)

        this.boxShadowSpread = target.value + 'px'
        this.targetButtonElement.style.boxShadow = `${this.boxShadowX} ${this.boxShadowY} ${this.boxShadowBlur} ${this.boxShadowSpread} rgba(${redValue}, ${greenValue}, ${blueValue}, ${this.boxShadowOpacity})`
        boxShadowSpreadDisplayValue.innerText = this.boxShadowSpread
      }
    })
  }

  setBoxShadowColorEventListener() {
    const boxShadowColorPicker: HTMLElement | null = document.getElementById('boxShadowColorPicker')
    const boxShadowColorDisplayValue = document.getElementById('boxShadowColorDisplayValue')

    boxShadowColorPicker?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && boxShadowColorDisplayValue) {
        console.log('ok')
        const redValue   = parseInt(this.boxShadowColor.slice(1, 3), 16)
        const greenValue = parseInt(this.boxShadowColor.slice(3, 5), 16)
        const blueValue  = parseInt(this.boxShadowColor.slice(5, 7), 16)

        this.boxShadowColor = target.value
        this.targetButtonElement.style.boxShadow = `${this.boxShadowX} ${this.boxShadowY} ${this.boxShadowBlur} ${this.boxShadowSpread} rgba(${redValue}, ${greenValue}, ${blueValue}, ${this.boxShadowOpacity})`
        boxShadowColorDisplayValue.innerText = this.boxShadowColor
      }
    })
  }

  setBoxShadowOpacityEventListener() {
    const boxShadowOpacityRange: HTMLElement | null = document.getElementById('boxShadowOpacityRange')
    const boxShadowOpacityDisplayValue = document.getElementById('boxShadowOpacityDisplayValue')

    boxShadowOpacityRange?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && boxShadowOpacityDisplayValue) {
        const redValue   = parseInt(this.boxShadowColor.slice(1, 3), 16)
        const greenValue = parseInt(this.boxShadowColor.slice(3, 5), 16)
        const blueValue  = parseInt(this.boxShadowColor.slice(5, 7), 16)

        this.boxShadowOpacity = Number(target.value)
        this.targetButtonElement.style.boxShadow = `${this.boxShadowX} ${this.boxShadowY} ${this.boxShadowBlur} ${this.boxShadowSpread} rgba(${redValue}, ${greenValue}, ${blueValue}, ${this.boxShadowOpacity})`
        boxShadowOpacityDisplayValue.innerText = String(this.boxShadowOpacity)
      }
    })
  }

  setBackgroundColorEventListener() {
    const backgroundColorPicker: HTMLElement | null = document.getElementById('backgroundColorPicker')
    const backgroundColorDisplayValue = document.getElementById('backgroundColorDisplayValue')

    backgroundColorPicker?.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      if (this.targetButtonElement && backgroundColorDisplayValue) {
        this.backgroundColor = target.value
        this.targetButtonElement.style.backgroundColor = this.backgroundColor
        backgroundColorDisplayValue.innerText = this.backgroundColor
      }
    })
  }
}
