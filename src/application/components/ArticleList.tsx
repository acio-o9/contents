import React, { FC } from 'react';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

interface Props extends WithStyles<typeof styles> {
  articles: Array<any>;
}

const styles = () : StyleRules => createStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const ArticleList: FC<Props> = ({ articles, classes }) => {
  return (
    <section>
      <ul>
        {articles.map((article: any, index: number) => (
          <li key={index}>
            <Card className={classes.root}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {article.publishedAt}
                </Typography>
                <Typography variant="h5" component="h2">
                    {article.title}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  Subtitle
                </Typography>
                <Typography variant="body2" component="p">
                    {article.body}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">More</Button>
              </CardActions>
            </Card>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default withStyles(styles)(ArticleList);
