import React from "react";
import "../../styles";
import { useHistory } from "react-router-dom";
import { ListItem, ListItemText } from "@material-ui/core";
import { useSectionStyles } from "../../styles";

function Section({ section }) {
  const history = useHistory();
  const classes = useSectionStyles();

  return (
    <ListItem
      className={classes.section}
      button
      divider
      onClick={() =>
        history.push(`/goods/${section.rid}`)
      }
    >
      <ListItemText gutterBottom>{section.rname}</ListItemText>
    </ListItem>
  );
}

export default Section;
