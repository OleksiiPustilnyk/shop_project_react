import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Container } from '@mui/material'
import Logo from 'components/Logo/Logo'
import Menu from 'components/Menu/Menu'
import CartHeader from 'components/CartHeader/CartHeader'

import './Header.scss'

type Props = {}

const Header = (props: Props) => {
    // const appBar = true // для 2 способу
    return (
        <AppBar
            position="static"
            className="app-bar"
            // sx={{ backgroundColor: 'green' }} // 1 спосіб змінити колір header
            // style={{ backgroundColor: appBar ? 'green' : 'purple' }} // 2 спосіб змінити колір header (можна задавати змінну)
        >
            <Container>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Logo />
                    <Menu />
                    <CartHeader />
                </Toolbar>
            </Container>
        </AppBar>
    )
}
export default Header
