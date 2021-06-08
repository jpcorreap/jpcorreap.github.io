import { makeStyles } from "@material-ui/core";

const customDataGridStyles = makeStyles((theme) => ({
  gridCellExpandRoot: {
    alignItems: "center",
    lineHeight: "24px",
    width: "100%",
    height: "100%",
    position: "relative",
    display: "flex",
    "& .cellValue": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
  },
  customDatePicker: {
    width: "100%",
    zIndex: 8000,
  },
  customDatePickerCalendar: {
    "& .react-datepicker__header": {
      backgroundColor: "white",
      borderBottom: "white",
    },
    "& .react-datepicker__triangle": {
      borderBottomColor: "white !important",
    },
  },
  customDatePickerSelected: {
    backgroundColor: `${theme.palette.primary.main} !important`,
  },
}));

export default customDataGridStyles;
