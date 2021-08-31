import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import ToDo from "./ToDo/components/ToDo";
import Task from "./ToDo/components/Task";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const useStyles = makeStyles((theme) => ({
    root: {
      marginTop: "40px"
    },
    card: {
      padding: "30px"
    }
  }));

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Card className={classes.card}>
        <Router>
          <Switch>
            <Route exact path="/">
                <Redirect to="/tasks" />
            </Route>
            <Route path="/tasks" exact component={ToDo} />
            <Route path="/tasks/:taskId" exact component={Task} />
          </Switch>
        </Router>   
      </Card>
    </Container>
  );
}

export default App;
