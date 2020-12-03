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

    const onClickHandler = () => {
        props.onClickHandler(props.id)
    }

    return (
        <div>
            <div>
                <div>
                    <div>
                        <Typography gutterBottom variant="h5" component="h2">
                            {price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {description}
                        </Typography>
                    </div>
                </div>
                <div>
                    <Button onClick={onClickHandler}
                            size="medium"
                            color="primary"
                            variant="contained">
                        Buy
                    </Button>
                </div>
            </div>
        </div>
    )
}