import { useContext } from "react"
import { Drawer, Typography, Box, List, ListItem, ListItemIcon, ListItemText, Divider  } from "@mui/material"


import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined'
import MailOutlinedOutlinedIcon from '@mui/icons-material/MailOutlineOutlined'

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

import { UIContext } from "../../context/ui"

export const Sidebar = () => {


    const {sidemenuOpen, closeSideMenu } = useContext( UIContext)

  return (
    <Drawer
      anchor="left"
      open={ sidemenuOpen }
      onClose={ closeSideMenu }
    >

        <Box sx={{ width: 250 }}>

        <Box sx={{ padding: '5px 10px' }}>
            <Typography variant="h4">Menú</Typography>
        </Box>

        <List>
            {
                menuItems.map( (text, index) => (
                    <ListItem button key={ text }>
                        <ListItemIcon>
                            { index % 2 ? <InboxOutlinedIcon/> : <MailOutlinedOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={ text  }/>
                    </ListItem>
                ))
            }
        </List>
          <Divider />
          <List>
            {
                menuItems.map( (text, index) => (
                    <ListItem button key={ text }>
                        <ListItemIcon>
                            { index % 2 ? <InboxOutlinedIcon/> : <MailOutlinedOutlinedIcon />}
                        </ListItemIcon>
                        <ListItemText primary={ text  }/>
                    </ListItem>
                ))
            }
        </List>

        </Box>

    </Drawer>
  )
}
