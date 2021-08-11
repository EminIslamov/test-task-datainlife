import React from "react";
import { useSelector } from "react-redux";
import Section from "./Section";
import { List } from "@material-ui/core";
import { useSectionStyles } from "../../styles";

function Sections() {
  const sections = useSelector((state) => state.sections.items);
  const classes = useSectionStyles();

  return (
    <List className={classes.list}>
      {sections.map((section) => {
        return <Section section={section} key={section.rid} />;
      })}
    </List>
  );
}

export default Sections;
