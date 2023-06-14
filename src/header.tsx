import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material/";
import { UserAuth } from "./context/AuthContext";
import {
  Button,
  useMediaQuery,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
}

const drawerWidth = 240;

export default function DrawerAppBar(props: Props) {
  const { user, logOut }: any = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error, "logout");
    }
  };
  const navigate = useNavigate();

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  const isMobile = useMediaQuery("(max-width:900px)");
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: "black" }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ marginRight: "20px", display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { sm: "block" } }}
            onClick={() => {
              navigate("/");
            }}
          >
            <span>Hardcore Revolution </span>
          </Typography>
          {isMobile ? null : (
            <>
              <Link style={{ color: "#fff", marginRight: "16px" }} href="/">
                HOME
              </Link>

              {user?.displayName ? (
                <>
                  <Link
                    style={{ color: "#fff", marginRight: "16px" }}
                    href="/signIn"
                  >
                    LOGIN
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    style={{ color: "#fff", marginRight: "16px" }}
                    href="/users"
                    className="Link"
                  >
                    ARCHIVE
                  </Link>
                  <Link
                    style={{ color: "#fff", marginRight: "16px" }}
                    href="/userForm"
                  >
                    FORM
                  </Link>

                  <Link style={{ color: "#fff" }} href="/user-scanner">
                    SCAN
                  </Link>

                  <Button style={{ color: "#fff" }} onClick={handleSignOut}>
                    <LogoutIcon />
                  </Button>
                </>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
      {isMobile && (
        <>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
              anchor="right"
            >
              <Box onClick={handleDrawerToggle} sx={{ marginLeft: "18px" }}>
                <List>
                  <ListItem>
                    <MenuIcon style={{ marginRight: "16px" }} />
                    <span style={{ fontSize: "15px" }}>
                      Hardcore Revolution
                    </span>
                  </ListItem>
                  <Divider
                    style={{ marginBottom: "20px", marginTop: "12px" }}
                  />
                  <ListItem>
                    <Link
                      style={{ color: "black", marginRight: "16px" }}
                      href="/"
                    >
                      HOME
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      style={{ color: "black", marginRight: "16px" }}
                      href="/users"
                    >
                      ARCHIVE
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link
                      style={{ color: "black", marginRight: "16px" }}
                      href="/userForm"
                    >
                      FORM
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Link style={{ color: "black" }} href="/user-scanner">
                      SCAN
                    </Link>
                  </ListItem>
                  <ListItem>
                    <Button style={{ color: "black" }} onClick={handleSignOut}>
                      Logout
                    </Button>
                  </ListItem>
                </List>
              </Box>
            </Drawer>
          </Box>
        </>
      )}
    </Box>
  );
}
