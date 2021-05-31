import Navbar from './Navbar'
import Footer from './Footer'
import {useState} from 'react'

const Layout = ({children}) => {
  const [themeSelected, setTheme] = useState("theme--light")
  const props = children.props
  return (
    <>
    <div className={themeSelected} style={{marginTop:'-2rem'}}>
      <div className='themes'>
      <Navbar {...props} setTheme={setTheme} themeSelected={themeSelected}/>
      {children}
      <Footer />
      </div>
    </div>
    </>
  )
}

export default Layout
