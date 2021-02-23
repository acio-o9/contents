import React, { FC } from 'react';
import { createStyles } from '@material-ui/core/styles';
import withStyles, { WithStyles, StyleRules } from '@material-ui/core/styles/withStyles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from '@material-ui/core';

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
  tag__list: {
    padding: '10px 0px 0px 0px',
    display: 'flex',
  },
  tag__element: {
    padding: '0px 7px',
    marginRight: '10px',
    borderRadius: '5px',
    background: '#CCCCCC',
  },
});

const ArticleList: FC<Props> = ({ articles, classes }) => {
  return (
    <section>
      <ul>
        {articles.map((article: any, index: number) => (
          <li key={index}>
            <Link href={`/articles/${article.id}`}>
              <Card className={classes.root}>
                <CardContent>
                  <Typography className={classes.title} color="textSecondary" gutterBottom>
                      {article.publishedAt}
                  </Typography>
                  <Typography variant="h5" component="h2">
                      {article.title}
                  </Typography>
                  <Typography className={classes.pos} color="textSecondary">
                    <ul className={classes.tag__list}>
                      {'tags' in article && article.tags.map((tag: any) => (
                        <li className={classes.tag__element}>{tag.name}</li>
                      ))}
                    </ul>
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default withStyles(styles)(ArticleList);
