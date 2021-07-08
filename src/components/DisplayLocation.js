import React from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const DisplayLocation = (props) => {
    return (
        <Card >
          <CardContent>
            <Typography  color="textSecondary" gutterBottom>
              Displaying Weather Data for:
            </Typography>
            <Typography variant="h5" component="h2">
          {props.location}
        </Typography>
          </CardContent>
        </Card>
      );
}

export default DisplayLocation;