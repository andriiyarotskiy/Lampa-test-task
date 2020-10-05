import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Grid,
    makeStyles,
    Typography
} from "@material-ui/core"
import React from "react"


const useStyles = makeStyles({
    root: {
        minWidth: 350,
    },
    media: {
        height: 170,
    },
});


export type ProductType = {
    title: string,
    description: string,
    price: string,
    id: string
    onClickHandler: (id: string) => void // need delete callback from this types
    quantity?: number // notRequiredParameter
    image: string
}
export const Product = ({title, description, price, image, ...props}: ProductType) => {
    const classes = useStyles();

    const onClickHandler = () => {
        props.onClickHandler(props.id)
    }

    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title={title}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button onClick={onClickHandler}
                            size="medium"
                            color="primary"
                            variant="contained">
                        Buy
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    )
}