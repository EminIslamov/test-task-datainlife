import { makeStyles } from "@material-ui/core";

export const useSectionStyles = makeStyles((theme) => ({
  section: {},

  list: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
  },
}));
