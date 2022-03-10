import { AppBar, Box, Divider, Toolbar, Tabs, Tab, Button } from "@mui/material";
import { Outlet } from "react-router-dom";
import HeadsetIcon from '@mui/icons-material/Headset';
import TokenIcon from '@mui/icons-material/Token';

const Layout = () => {
    return (
        <Box sx={{ display: "inline-block", width: "100%", borderBottom: 1, borderColor: 'divider' }}>
            {/* header */}
            <AppBar
            sx ={{background:'#06390'}}
                // enableColorOnDark
                // display="block"
                // color="inherit"
                // elevation={0}
            >
                <Toolbar>
                    <Box style={{ marginTop: "20px" }}>
                    <Tabs textColor="inherit">
                      <Tab icon={<HeadsetIcon />} iconPosition="start" label="STREAMING" />
                      <Tab icon={<TokenIcon />} iconPosition="start" label="NFT" />
                    </Tabs>
                    <Button sx={{marginLeft: "auto"}} variant="contained">Login</Button>
                    <Button variant="contained">Register</Button>   
                    </Box>
                </Toolbar>
                <Divider sx={{ mt: 0.25, mb: 0.25, marginTop: "-7px" }} />
            </AppBar>

            {/* main content */}
            <Box
                style={{
                    marginLeft: "20px",
                    marginTop: "100px",
                }}
            >
                <Outlet />
            </Box>
        </Box>
    );
};

export default Layout;
