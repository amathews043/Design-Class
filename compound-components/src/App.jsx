// import Menu from "./menu/Menu"

// function App() {

//   return (
//     <>
//       <Button size="lg" className="green" style={{ color: "blue", }} onClick={() => alert('hi there') }> &#9968; this is the button </Button>
//     </>
//   )
// }

// export default App

import Menu from "./menu/Menu"
import MenuButton from "./menu/MenuButton"
import MenuDropdown from "./menu/MenuDropdown"

function App() {

  return (
    <>
      <Menu>
        <MenuButton buttonText={'Sport'}/>
        <MenuDropdown items={["Tennis", "Racquetball", "Pickleball", "Squah"]}/>
      </Menu>
    </>
  )
}

export default App

