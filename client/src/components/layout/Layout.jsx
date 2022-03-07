import { AppBar, Box, Divider, Toolbar } from "@mui/material";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <Box sx={{ display: "inline-block", width: "100%" }}>
            {/* header */}
            <AppBar
                enableColorOnDark
                display="block"
                color="inherit"
                elevation={0}
            >
                <Toolbar style={{ padding: 0, marginTop: "-5px" }}>
                    <Box style={{ marginTop: "10px" }}></Box>
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
