import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import bookImage from './book.jpg'
const useStyles = makeStyles({
  root: {
    minWidth: 200,
    maxWidth:300,
    margin:'20px'
  },
  expand: {
    // position:'absolute',
    left:'30%',
  }
});

export default function BookcardComp(props) {
  const classes = useStyles();

  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            height="200"
            image={props.image}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.ISBN}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          {/* <Button size="small" color="primary">
            Favorite
          </Button>
          <Button size="small" color="primary">
            Share
          </Button> */}
          <Button className={classes.expand}
          size="small" color="primary">
            Borrow
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
BookcardComp.defaultProps = {
  name : "Unknown",
  ISBN: "Unknown",
  image: bookImage,

}
