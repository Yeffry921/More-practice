const billInput = document.querySelector('.bill')
const tipPercent = document.querySelectorAll('.tim__num')
const customTip = document.querySelector('.tip__custom')
const form = document.querySelector('.calculator__input')
const tipWrapper = document.querySelector('.tip__wrapper')
const tipCount = document.querySelector('.tip__count')
const tipAmount = document.querySelector('.tip__amount-person')
const tipTotal = document.querySelector('.tip__total-person')
const reset = document.querySelector('.reset')

const isNumeric = (num) => {
  return !isNaN(parseFloat(num)) && isFinite(num);
}

const showGreen = (element) => {
  element.classList.remove('incorrect')
  element.classList.add('correct')
}

const showRed = (element) => {
  element.classList.remove('correct')
  element.classList.add('incorrect')
}

// User inputs the bill $ - Nothing happens

// User clicks on one of the tips % - Nothing happens

// User enters the number of people - calculation happens

// Only when 
// 1- There is a bill
// 2- There is a percent
// 3- There is a number of people does calculation happen

const inputs = {
  bill: 0,
  tipPercent: 0,
  numberOfPeople: 0,
}

const setError = (element) => {
  element.classList.remove('correct')
  element.classList.add('incorrect')
}

const setCorrect = (element) => {
  element.classList.remove('incorrect')
  element.classList.add('correct')
}

const setBill = (event) => {
  if(isNumeric(event.target.value)) {

    setCorrect(event.target)

    inputs.bill = Number(event.target.value)

    getTipAmount(inputs)
  } else {
    setError(event.target)
  }
}

const setTip = (event) => {
  event.preventDefault()
  if(event.target.classList.contains('tip__num')) {
    customTip.value = ''

    const tipAmount = event.target.getAttribute('data-tip')

    inputs.tipPercent = tipAmount

    getTipAmount(inputs)

    Array.from(tipWrapper.children).forEach((select) => {
      select.classList.remove('active')
    })
    event.target.classList.add('active')
  }

  if(event.target.classList.contains('tip__custom')) {
    const tipAmount = Number(event.target.value)
    if(isNumeric(tipAmount)) {
      setCorrect(event.target)

      inputs.tipPercent = tipAmount

      getTipAmount(inputs)
    } else {
      setError(event.target)
    }
  }
}

const setCount = (event) => {
  if(isNumeric(event.target.value)) {
    setCorrect(event.target)

    inputs.numberOfPeople = Number(event.target.value)

    getTipAmount(inputs)
  } else {
    setError(event.target)
  }
}

const getTipAmount = (data) => {
  
  const percent = Number(data.tipPercent) / 100
  const tipCalc = (data.bill * percent) / data.numberOfPeople
  const tipTotalPerson = (data.bill + tipCalc) / data.numberOfPeople

  if(isNumeric(tipCalc) && isNumeric(tipTotalPerson)) {
    tipAmount.textContent = `$${tipCalc}`
    tipTotal.textContent = `$${tipTotalPerson}`
  }
}

const resetData = (data) => {
  data.bill = 0
  data.tipPercent = 0
  data.numberOfPeople = 0

  form.reset()
}

window.onload = resetData(inputs)

billInput.addEventListener('input', setBill)

tipWrapper.addEventListener('click', setTip)

tipCount.addEventListener('input', setCount)

customTip.addEventListener('input', setTip)

reset.addEventListener('click', resetData)

// custom cannot be over %1000
// number of people can only be between 1-9
// Tip amount output has be to shortened to lower number value


