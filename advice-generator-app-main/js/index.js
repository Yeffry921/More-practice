const roll = document.querySelector('.advice-icon-button')
const adviceId = document.querySelector('.advice-id')
const adviceContent = document.querySelector('.advice-content')

const getAdvice = async () => {
  const response = await fetch('https://api.adviceslip.com/advice')
  return await response.json()
}

const generateAdvice = async () => {
  const { slip } = await getAdvice()

  
  adviceId.textContent = slip.id
  adviceContent.textContent = slip.advice
}

roll.addEventListener('click', generateAdvice)