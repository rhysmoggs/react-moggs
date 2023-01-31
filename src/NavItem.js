import { Button } from '@mui/material'

function NavItem({ text }) {
  const buttonStyles = {
    background: 'red',
  }

  return (
    <Button
      variant='contained'
      onClick={() => window.alert(`you clicked ${text}`)}
    >
      {text}
    </Button>
  )
}

export default NavItem
