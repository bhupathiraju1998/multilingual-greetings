import {useState} from 'react'
import './App.css'
import {BgContainer, ImgStyle} from './styledComponents'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
const App = () => {
  const [selectedButton, setSelectedButton] = useState('English')
  const handleButton = v => {
    setSelectedButton(v)
  }

  const renderAllProducts = selectedButtonValue => {
    switch (selectedButtonValue) {
      case 'English':
        return (
          <ImgStyle
            src={languageGreetingsList[0].imageUrl}
            alt={languageGreetingsList[0].imageAltText}
          />
        )
      case 'Telugu':
        return (
          <ImgStyle
            src={languageGreetingsList[2].imageUrl}
            alt={languageGreetingsList[2].imageAltText}
          />
        )
      case 'Tamil':
        return (
          <ImgStyle
            src={languageGreetingsList[1].imageUrl}
            alt={languageGreetingsList[1].imageAltText}
          />
        )
      default:
        return null
    }
  }

  return (
    <BgContainer>
      <h1>Multilingual Greetings</h1>

      <ul>
        {languageGreetingsList.map(eachButton => (
          <li key={eachButton.id}>
            <button
              type="button"
              onClick={() => handleButton(eachButton.buttonText)}
            >
              {eachButton.buttonText}
            </button>
          </li>
        ))}
      </ul>
      {renderAllProducts(selectedButton)}
    </BgContainer>
  )
}

export default App
