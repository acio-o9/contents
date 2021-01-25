import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class ArticleList extends Component {
  constructor ({props, articles}) {
    super(props);
    this.articles = articles;
    this.classes = this.useStyles();
  }

  useStyles() {
    return makeStyles({
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
  }

  render() {
    return (
      <section>
        <ul>
          {this.articles.map((article, index) => (
            <li key={index}>
              <Card className={this.classes.root}>
                <CardContent>
                  <Typography className={this.classes.title} color="textSecondary" gutterBottom>
                      {article.publishedAt}
                  </Typography>
                  <Typography variant="h5" component="h2">
                      {article.title}
                  </Typography>
                  <Typography className={this.classes.pos} color="textSecondary">
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
}

export default ArticleList;
