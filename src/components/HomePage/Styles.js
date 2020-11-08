import { makeStyles, createStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      minHeight: "100vh",
    },
    header: {
      height: "300px ",
      backgroundImage:
        "url(https://tec.mx/sites/default/files/repositorio/Home/rectoria-tec-de-monterrey-regreso-consciente.jpg)",
      fontFamily: "Raleway-Bold",
      color: theme.palette.common.white,
      fontSize: "65px",
    },
    centered: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  })
);

export default useStyles;
