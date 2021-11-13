import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PaymentIcon from "@mui/icons-material/Payment";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from '@mui/icons-material/Logout';
import ReviewsIcon from '@mui/icons-material/Reviews';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import { NavLink } from "react-router-dom";
import { Image, Navbar } from "react-bootstrap";
import "./Dashboard.css";
import Pay from "../Pay/Pay";
import useAuth from "../../../hooks/useAuth";
import logo from '../../../images/logo.png';
import MyOrders from '../MyOrders/MyOrders';
import Review from "../Review/Review";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        ...(open && {
            transition: theme.transitions.create("margin", {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    })
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
    transition: theme.transitions.create(["margin", "width"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
}));

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { user, admin, logOut } = useAuth();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const navLinkText = {
        marginLeft: '8px',
        fontSize: '20px',
        fontWeight: 900,
        color: 'black'
    }

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box >
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar className="bg-success layout-top">
                    <>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: "none" }) }}
                        >
                            <MenuIcon />
                            
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            <img style={{ width: '75%' }} src={logo} alt="" />
                        </Typography>
                    </>
                    <Typography variant="h6" noWrap component="div">
                        <Navbar.Text className="text-info_lol text-light fw-bold">

                        </Navbar.Text>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    "& .MuiDrawer-paper": {
                        width: drawerWidth,
                        boxSizing: "border-box",
                    },
                }}
                variant="persistent"
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === "ltr" ? (
                            <ChevronLeftIcon />
                        ) : (
                            <ChevronRightIcon />
                        )}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>



                    <NavLink style={{ textDecoration: "none", color: "black", marginLeft: "5px", }} to="/home">
                        <ListItem button>
                            <ListItemIcon>
                                <HomeIcon color="success" />
                                <span style={navLinkText}>Home</span>
                            </ListItemIcon>
                        </ListItem>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none", color: "black", marginLeft: "5px", }} to={`${url}/myOrders`}>
                        <ListItem button>
                            <ListItemIcon>
                                <DeliveryDiningIcon color="success" />
                                <span style={navLinkText}>My Orders</span>
                            </ListItemIcon>
                        </ListItem>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none", color: "black", marginLeft: "5px", }} to={`${url}/review`}>
                        <ListItem button>
                            <ListItemIcon>
                                <ReviewsIcon color="success" />
                                <span style={navLinkText}>Give a Review</span>
                            </ListItemIcon>
                        </ListItem>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none", color: "black", marginLeft: "5px", }} to={`${url}/pay`}>
                        <ListItem button>
                            <ListItemIcon>
                                <PaymentIcon color="success" />
                                <span style={navLinkText}>Pay</span>
                            </ListItemIcon>
                        </ListItem>
                    </NavLink>

                    <NavLink style={{ textDecoration: "none", color: "black", marginLeft: "5px", }} to={`${url}`} onClick={logOut}>
                        <ListItem button>
                            <ListItemIcon>
                                <LogoutIcon color="success" />
                                <span style={navLinkText}>LogOut</span>
                            </ListItemIcon>
                        </ListItem>
                    </NavLink>



                </List>
            </Drawer>
            <Box
                style={{margin: '0 auto'}}
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 3,
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                }}
            >
                <Toolbar />

                <Switch>
                    <Route exact path={path}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                </Switch>
            </Box>
            <Main open={open}>
                <DrawerHeader />
                <Typography paragraph>
                    {/* ============================== */}
                </Typography>
                <Typography paragraph>
                    {/* ============================== */}
                </Typography>
            </Main>
        </Box>
    );
};

export default Dashboard;
