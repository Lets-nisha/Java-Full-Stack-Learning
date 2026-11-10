import './App.css'
import AgeChecker from './components/AgeChecker'
import BackgroundChanger from './components/BackgroundChanger'
import ChangeImage from './components/ChangeImage'
import ChangeText from './components/ChangeText'
import CharacterCounter from './components/CharacterCounter'
import Counter from './components/Counter'
import FontSizeChanger from './components/FontSizeChanger'
import IncDecCounter from './components/IncDecCounter'
import LivePreview from './components/LivePreview'
import Login from './components/Login'
import NameInput from './components/NameInput'
import Password from './components/Password'
import ThemeChanger from './components/ThemeChanger'
import TodoInput from './components/TodoInput'
import ToggleButton from './components/ToggleButton'

function App() {

  return (
    <>
    <Counter /><hr />
    <ChangeText /><hr />
    <Password/><hr />
    <NameInput/><hr />
    <BackgroundChanger/><hr />
    <ToggleButton/><hr />
    <IncDecCounter/><hr />
    <CharacterCounter/><hr />
    <AgeChecker/><hr />
    <ChangeImage/><hr />
    <Login/><hr />
    <FontSizeChanger/><hr />
    <LivePreview/><hr />
    <ThemeChanger/><hr />
    <TodoInput/><hr />
    </>
  )
}

export default App
// git commit -m "add react assignment 2"