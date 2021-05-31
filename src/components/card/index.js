import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles/card';

function SimpleCard() {
  const classes = useStyles();

  return (
    < >
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>

        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          Lorem fistrum irure apetecan se calle ustée consectetur elit nostrud a gramenawer se calle ustée. Cillum se calle ustée reprehenderit elit al ataquerl la caidita ex diodeno está la cosa muy malar et. Torpedo te va a hasé pupitaa reprehenderit labore elit commodo incididunt por la gloria de mi madre quis. Dolore qué dise usteer occaecat incididunt benemeritaar de la pradera voluptate. Apetecan ut ex fistro et nisi officia ese que llega. Papaar papaar aliquip adipisicing te voy a borrar el cerito consectetur amatomaa et magna. Laboris te va a hasé pupitaa nostrud me cago en tus muelas cillum llevame al sircoo ut duis te voy a borrar el cerito.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
    </>
  );
}

export default SimpleCard;
