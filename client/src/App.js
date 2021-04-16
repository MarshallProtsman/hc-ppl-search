import { useEffect, useState } from "react";
import "./App.css";
import PeopleList from "./Components/PeopleList";
import Loading from "./Components/Loading";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function App() {
  const ListLoading = Loading(PeopleList);
  const [appState, setAppState] = useState({
    loading: false,
    repos: null,
  });

  useEffect(() => {
    setAppState({ loading: true });
    const apiUrl = "/api/people/";
    fetch(apiUrl)
      .then((x) => new Promise((resolve) => setTimeout(() => resolve(x), 1500)))
      .then((res) => res.json())
      .then((people) => {
        setAppState({ loading: false, people: people });
      });
  }, [setAppState]);

  function onUpdateSearch(e) {
    setAppState({ loading: true });
    const searchUrl = `/api/people/${e.target.value}`;
    console.log(searchUrl)
    fetch(searchUrl)
      .then((x) => new Promise((resolve) => setTimeout(() => resolve(x), 1000)))
      .then((res) => res.json())
      .then((people) => {
        setAppState({ loading: false, people: people });
      });
  }

  return (
    <div className="App">
      <div className="container">
        <Typography variant="h2">My People</Typography>
      </div>
      <TextField label="Search" onChange={onUpdateSearch}></TextField>
      <div className="people-container">
        <ListLoading isLoading={appState.loading} people={appState.people} />
      </div>
    </div>
  );
}
export default App;

// class App extends Component {
//   componentDidMount() {
//     fetch('/api/people')
//       .then((res) => res.json())
//       .then((people) => console.log(people));
//   }
//   render() {
//     return (
//       <div className='App'>
//         <h1>Peeple</h1>
//       </div>
//     );
//   }
// }

// export default App;
