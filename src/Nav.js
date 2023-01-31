import React from 'react'
import { Box, ButtonGroup } from '@mui/material'
import NavItem from './NavItem'

const Nav = () => {
  const array = ['Home', 'Contact', 'About']
  return (
    <Box display={'flex'} justifyContent='space-between'>
      <ButtonGroup
        variant='contained'
        aria-label='outlined primary button group'
      >
        {array.map((v, i) => {
          return <NavItem text={v} />
        })}
      </ButtonGroup>
    </Box>
  )
}

export default Nav
