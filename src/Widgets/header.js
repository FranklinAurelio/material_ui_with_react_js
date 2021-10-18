import { AppBar, Badge, Grid, IconButton, InputBase, Toolbar } from "@mui/material";
import React from "react";
import { NotificationsNone } from "@mui/icons-material";
import { ChatBubbleOutline } from "@mui/icons-material";
import { PowerSettingsNew
 } from "@mui/icons-material";
export default function Header(){
    return(
        <AppBar position="static">
            <Toolbar>
                <Grid container>
                    <Grid item sm={6} style={{border:'1px solid #fff'}}>
                        <InputBase/>
                    </Grid>
                    <Grid item sm ={6} style={{border:'1px solid #000'}}>
                        <IconButton>
                            <Badge badgeContent = {4} color="secondary">
                                <NotificationsNone/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <Badge badgeContent = {3} color="primary">
                                <ChatBubbleOutline/>
                            </Badge>
                        </IconButton>
                        <IconButton>
                            <PowerSettingsNew/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}