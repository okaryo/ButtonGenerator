interface propertyStaus {
  status: boolean,
  value: string | number
}

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

  hoverBorderColor: propertyStaus
  hoverColor: propertyStaus
  hoverBoxShadowX: propertyStaus
  hoverBoxShadowY: propertyStaus
  hoverBoxShadowBlur: propertyStaus
  hoverBoxShadowSpread: propertyStaus
  hoverBoxShadowColor: propertyStaus
  hoverBoxShadowOpacity: propertyStaus
  hoverBackgroundColor: propertyStaus

  constructor(targetId: string) {
    this.targetButtonElement = document.getElementById(targetId)

    this.height           = '21px'
    this.width            = '54px'
    this.borderRadius     = '2px'
    this.borderWidth      = '1px'
    this.borderStyle      = 'outset'
    this.borderColor      = '#767676'
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

    this.hoverBorderColor = {
      status: false,
      value: '#767676'
    }
    this.hoverColor = {
      status: false,
      value: '#000000'
    }
    this.hoverBoxShadowX = {
      status: false,
      value: '0px'
    }
    this.hoverBoxShadowY = {
      status: false,
      value: '0px'
    }
    this.hoverBoxShadowBlur = {
      status: false,
      value: '0px'
    }
    this.hoverBoxShadowSpread = {
      status: false,
      value: '0px'
    }
    this.hoverBoxShadowColor = {
      status: false,
      value: '#ffffff'
    }
    this.hoverBoxShadowOpacity = {
      status: false,
      value: 0.75
    }
    this.hoverBackgroundColor = {
      status: false,
      value: '#efefef'
    }

    this.initializeButtonParameter()

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

    this.setHoverEventListener()
    this.setHoverBorderColorEventListener()
    this.setHoverColorEventListener()
    this.setHoverBoxShadowXEventListener()
    this.setHoverBoxShadowYEventListener()
    this.setHoverBoxShadowBlurEventListener()
    this.setHoverBoxShadowSpreadEventListener()
    this.setHoverBoxShadowColorEventListener()
    this.setHoverBoxShadowOpacityEventListener()
    this.setHoverBackgroundColorEventListener()
  }

  initializeButtonParameter() {
    if (!this.targetButtonElement) return

    const buttonStyle = this.targetButtonElement.style

    buttonStyle.height = this.height
    buttonStyle.width = this.width
    buttonStyle.borderRadius = this.borderRadius
    buttonStyle.borderWidth = this.borderWidth
    buttonStyle.borderStyle = this.borderStyle
    buttonStyle.borderColor = this.borderColor
    buttonStyle.fontSize = this.fontSize
    buttonStyle.fontWeight = String(this.fontWeight)
    buttonStyle.color = this.color
    buttonStyle.boxShadow = '0px 0px 0px 0px rgba(255, 255, 255, 0.75)'
    buttonStyle.backgroundColor = this.backgroundColor
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

  setHoverEventListener() {
    this.targetButtonElement?.addEventListener('mouseover', (e) => {
      const targetButton = e.target as HTMLElement
      targetButton.style.borderColor = this.hoverBorderColor.status ? this.hoverBorderColor.value as string : this.borderColor
      targetButton.style.color = this.hoverColor.status ? this.hoverColor.value as string : this.color
      targetButton.style.backgroundColor = this.hoverBackgroundColor.status ? this.hoverBackgroundColor.value as string : this.backgroundColor

      let boxShadowProperty = ''

      boxShadowProperty += this.hoverBoxShadowX.status ? `${this.hoverBoxShadowX.value as string} ` : `${this.boxShadowX} `
      boxShadowProperty += this.hoverBoxShadowY.status ? `${this.hoverBoxShadowY.value as string} ` : `${this.boxShadowY} `
      boxShadowProperty += this.hoverBoxShadowBlur.status ? `${this.hoverBoxShadowBlur.value as string} ` : `${this.boxShadowBlur} `
      boxShadowProperty += this.hoverBoxShadowSpread.status ? `${this.hoverBoxShadowSpread.value as string} ` : `${this.boxShadowSpread} `

      const boxShadowColorRed = this.hoverBoxShadowColor.status ? parseInt((this.hoverBoxShadowColor.value as string).slice(1, 3), 16) : parseInt(this.boxShadowColor.slice(1, 3), 16)
      const boxShadowColorGreen = this.hoverBoxShadowColor.status ? parseInt((this.hoverBoxShadowColor.value as string).slice(3, 5), 16) : parseInt(this.boxShadowColor.slice(3, 5), 16)
      const boxShadowColorBlue = this.hoverBoxShadowColor.status ? parseInt((this.hoverBoxShadowColor.value as string).slice(5, 7), 16) : parseInt(this.boxShadowColor.slice(5, 7), 16)
      const boxShadowOpacity = this.hoverBoxShadowOpacity.status ? this.hoverBoxShadowOpacity.value : this.boxShadowOpacity

      boxShadowProperty += `rgba(${boxShadowColorRed}, ${boxShadowColorGreen}, ${boxShadowColorBlue}, ${boxShadowOpacity})`

      targetButton.style.boxShadow = boxShadowProperty
    })
    this.targetButtonElement?.addEventListener('mouseleave', (e) => {
      const targetButton = e.target as HTMLElement

      const redValue   = parseInt(this.boxShadowColor.slice(1, 3), 16)
      const greenValue = parseInt(this.boxShadowColor.slice(3, 5), 16)
      const blueValue  = parseInt(this.boxShadowColor.slice(5, 7), 16)

      targetButton.style.borderColor = this.borderColor
      targetButton.style.color = this.color
      targetButton.style.boxShadow = `${this.boxShadowX} ${this.boxShadowY} ${this.boxShadowBlur} ${this.boxShadowSpread} rgba(${redValue}, ${greenValue}, ${blueValue}, ${this.boxShadowOpacity})`
      targetButton.style.backgroundColor = this.backgroundColor
    })
  }

  setHoverBorderColorEventListener() {
    const borderColorHoverCheckBox = document.getElementById('borderColorHoverCheckBox')
    const borderColorHoverPicker = document.getElementById('borderColorHoverPicker')
    const borderColorHoverDisplayValue = document.getElementById('borderColorHoverDisplayValue')

    if (!(borderColorHoverCheckBox && borderColorHoverPicker && borderColorHoverDisplayValue)) return

    borderColorHoverPicker.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      this.hoverBorderColor.value = target.value
      borderColorHoverDisplayValue.innerText = target.value
    })

    borderColorHoverCheckBox.addEventListener('change', (e) => {
      const targetCheckbox = e.target as HTMLInputElement

      if (targetCheckbox.checked) {
        this.hoverBorderColor.status = true
      } else {
        this.hoverBorderColor.status = false
      }
    })
  }

  setHoverColorEventListener() {
    const colorHoverCheckBox = document.getElementById('colorHoverCheckBox')
    const colorHoverPicker = document.getElementById('colorHoverPicker')
    const colorHoverDisplayValue = document.getElementById('colorHoverDisplayValue')

    if (!(colorHoverCheckBox && colorHoverPicker && colorHoverDisplayValue)) return

    colorHoverPicker.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      this.hoverColor.value = target.value
      colorHoverDisplayValue.innerText = target.value
    })

    colorHoverCheckBox.addEventListener('change', (e) => {
      const targetCheckbox = e.target as HTMLInputElement

      if (targetCheckbox.checked) {
        this.hoverColor.status = true
      } else {
        this.hoverColor.status = false
      }
    })
  }

  setHoverBoxShadowXEventListener() {
    const boxShadowXHoverCheckBox = document.getElementById('boxShadowXHoverCheckBox')
    const boxShadowXHoverRange = document.getElementById('boxShadowXHoverRange')
    const boxShadowXHoverDisplayValue = document.getElementById('boxShadowXHoverDisplayValue')

    if (!(boxShadowXHoverCheckBox && boxShadowXHoverRange && boxShadowXHoverDisplayValue)) return

    boxShadowXHoverRange.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      this.hoverBoxShadowX.value = target.value + 'px'
      boxShadowXHoverDisplayValue.innerText = target.value + 'px'
    })

    boxShadowXHoverCheckBox.addEventListener('change', (e) => {
      const targetCheckbox = e.target as HTMLInputElement

      if (targetCheckbox.checked) {
        this.hoverBoxShadowX.status = true
      } else {
        this.hoverBoxShadowX.status = false
      }
    })
  }

  setHoverBoxShadowYEventListener() {
    const boxShadowYHoverCheckBox = document.getElementById('boxShadowYHoverCheckBox')
    const boxShadowYHoverRange = document.getElementById('boxShadowYHoverRange')
    const boxShadowYHoverDisplayValue = document.getElementById('boxShadowYHoverDisplayValue')

    if (!(boxShadowYHoverCheckBox && boxShadowYHoverRange && boxShadowYHoverDisplayValue)) return

    boxShadowYHoverRange.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      this.hoverBoxShadowY.value = target.value + 'px'
      boxShadowYHoverDisplayValue.innerText = target.value + 'px'
    })

    boxShadowYHoverCheckBox.addEventListener('change', (e) => {
      const targetCheckbox = e.target as HTMLInputElement

      if (targetCheckbox.checked) {
        this.hoverBoxShadowY.status = true
      } else {
        this.hoverBoxShadowY.status = false
      }
    })
  }

  setHoverBoxShadowBlurEventListener() {
    const boxShadowBlurHoverCheckBox = document.getElementById('boxShadowBlurHoverCheckBox')
    const boxShadowBlurHoverRange = document.getElementById('boxShadowBlurHoverRange')
    const boxShadowBlurHoverDisplayValue = document.getElementById('boxShadowBlurHoverDisplayValue')

    if (!(boxShadowBlurHoverCheckBox && boxShadowBlurHoverRange && boxShadowBlurHoverDisplayValue)) return

    boxShadowBlurHoverRange.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      this.hoverBoxShadowBlur.value = target.value + 'px'
      boxShadowBlurHoverDisplayValue.innerText = target.value + 'px'
    })

    boxShadowBlurHoverCheckBox.addEventListener('change', (e) => {
      const targetCheckbox = e.target as HTMLInputElement

      if (targetCheckbox.checked) {
        this.hoverBoxShadowBlur.status = true
      } else {
        this.hoverBoxShadowBlur.status = false
      }
    })
  }

  setHoverBoxShadowSpreadEventListener() {
    const boxShadowSpreadHoverCheckBox = document.getElementById('boxShadowSpreadHoverCheckBox')
    const boxShadowSpreadHoverRange = document.getElementById('boxShadowSpreadHoverRange')
    const boxShadowSpreadHoverDisplayValue = document.getElementById('boxShadowSpreadHoverDisplayValue')

    if (!(boxShadowSpreadHoverCheckBox && boxShadowSpreadHoverRange && boxShadowSpreadHoverDisplayValue)) return

    boxShadowSpreadHoverRange.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      this.hoverBoxShadowSpread.value = target.value + 'px'
      boxShadowSpreadHoverDisplayValue.innerText = target.value + 'px'
    })

    boxShadowSpreadHoverCheckBox.addEventListener('change', (e) => {
      const targetCheckbox = e.target as HTMLInputElement

      if (targetCheckbox.checked) {
        this.hoverBoxShadowSpread.status = true
      } else {
        this.hoverBoxShadowSpread.status = false
      }
    })
  }

  setHoverBoxShadowColorEventListener() {
    const boxShadowColorHoverCheckBox = document.getElementById('boxShadowColorHoverCheckBox')
    const boxShadowColorHoverPicker = document.getElementById('boxShadowColorHoverPicker')
    const boxShadowColorHoverDisplayValue = document.getElementById('boxShadowColorHoverDisplayValue')

    if (!(boxShadowColorHoverCheckBox && boxShadowColorHoverPicker && boxShadowColorHoverDisplayValue)) return

    boxShadowColorHoverPicker.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      this.hoverBoxShadowColor.value = target.value
      boxShadowColorHoverDisplayValue.innerText = target.value
    })

    boxShadowColorHoverCheckBox.addEventListener('change', (e) => {
      const targetCheckbox = e.target as HTMLInputElement

      if (targetCheckbox.checked) {
        this.hoverBoxShadowColor.status = true
      } else {
        this.hoverBoxShadowColor.status = false
      }
    })
  }

  setHoverBoxShadowOpacityEventListener() {
    const boxShadowOpacityHoverCheckBox = document.getElementById('boxShadowOpacityHoverCheckBox')
    const boxShadowOpacityHoverRange = document.getElementById('boxShadowOpacityHoverRange')
    const boxShadowOpacityHoverDisplayValue = document.getElementById('boxShadowOpacityHoverDisplayValue')

    if (!(boxShadowOpacityHoverCheckBox && boxShadowOpacityHoverRange && boxShadowOpacityHoverDisplayValue)) return

    boxShadowOpacityHoverRange.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      this.hoverBoxShadowOpacity.value = target.value
      boxShadowOpacityHoverDisplayValue.innerText = target.value
    })

    boxShadowOpacityHoverCheckBox.addEventListener('change', (e) => {
      const targetCheckbox = e.target as HTMLInputElement

      if (targetCheckbox.checked) {
        this.hoverBoxShadowOpacity.status = true
      } else {
        this.hoverBoxShadowOpacity.status = false
      }
    })
  }

  setHoverBackgroundColorEventListener() {
    const backgroundColorHoverCheckBox = document.getElementById('backgroundColorHoverCheckBox')
    const backgroundColorHoverPicker = document.getElementById('backgroundColorHoverPicker')
    const backgroundColorHoverDisplayValue = document.getElementById('backgroundColorHoverDisplayValue')

    if (!(backgroundColorHoverCheckBox && backgroundColorHoverPicker && backgroundColorHoverDisplayValue)) return

    backgroundColorHoverPicker.addEventListener('input', (e) => {
      const target = e.target as HTMLInputElement

      this.hoverBackgroundColor.value = target.value
      backgroundColorHoverDisplayValue.innerText = target.value
    })

    backgroundColorHoverCheckBox.addEventListener('change', (e) => {
      const targetCheckbox = e.target as HTMLInputElement

      if (targetCheckbox.checked) {
        this.hoverBackgroundColor.status = true
      } else {
        this.hoverBackgroundColor.status = false
      }
    })
  }
}
