import React, { FC } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ArticleList: FC<{ articles: Array<any> }> = ({ articles }) => {

  const useStyles = makeStyles(() => {
    createStyles({
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
  })

  const classes = useStyles()
  return (
    <section>
      <ul>
        {articles.map((article: any , index: number) => (
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

export default ArticleList;
