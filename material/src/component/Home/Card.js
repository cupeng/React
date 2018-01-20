import React from 'react';
import {Card,CardMedia, CardTitle} from 'material-ui/Card';

const CardExampleWithAvatar = () => (
  <Card>
    <CardMedia
      overlay={<CardTitle title="Woods" subtitle="Beautiful Grove"  />}
    >
      <img src="http://www.material-ui.com/images/nature-600-337.jpg" alt="" />
    </CardMedia>
  </Card>
);

export default CardExampleWithAvatar;