import React from "react"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../bll/store";
import {AppBar, Box, Button, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        alignContent: "flex-end"
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
}))

export const Header = () => {

    const classes = useStyles()

    const totalPrice = useSelector<AppRootStateType, number | null>(state => state.basketState.total)
    return (
        <AppBar position="static">
            <Toolbar>
                <Box mr={3}>
                    <Link to="/">
                        <Button color="inherit" variant="outlined" className={classes.menuButton}>Main</Button>
                    </Link>
                </Box>
                <Box mr={3}>
                    <Link to="/basket">
                        <IconButton edge="end" color="inherit">
                            <ShoppingCartIcon fontSize="large"/>
                        </IconButton>
                    </Link>
                </Box>
                {totalPrice && <Typography variant="h6">Total : {totalPrice}$</Typography>}
            </Toolbar>
        </AppBar>
    )
}