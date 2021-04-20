import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    maxWidth:350,
  },
  expand: {
    // position:'absolute',
    left:'40%',
  }
});

export default function BookcardComp() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image="https://scontent.fccu3-1.fna.fbcdn.net/v/t1.6435-9/171264975_304975260981740_4709942998021708308_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=8bfeb9&_nc_ohc=pqAjCz_6ttYAX_-er6F&_nc_ht=scontent.fccu3-1.fna&oh=180dbc58cc0928f51048ad79668e1053&oe=6099A20A"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Kolkata Knight Riders
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            An IPL team from kolkata
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
  );
}
