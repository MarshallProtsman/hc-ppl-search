import React from "react";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";

import ListItem from "@material-ui/core/ListItem";

const PeopleList = (props) => {
  const { people } = props;
  if (!people || people.length === 0) return <p>"Sorry, no peeps"</p>;
  return (
    <List className="grid space-around">
      {people.map((person) => {
        return (
          <li key={person.name} className="repo bg-light">
            <Typography style={{color: '#0B521C'}} variant="h6">{person.name}</Typography>

            <img
              className="avatar"
              src={person.avatar}
              alt={`avatar for ${person.name}`}
            />
            <List className="card-list">
              <ListItem variant="subtitle2">Age: {person.age}</ListItem>
              <ListItem>Interests: {person.interests}</ListItem>
              <ListItem>Address: {person.address}</ListItem>
            </List>
          </li>
        );
      })}
    </List>
  );
};

export default PeopleList;
