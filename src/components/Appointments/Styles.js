import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: "90vh",
    },
    textfield: {
      width: "100%",
    },
    centered: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default useStyles;
