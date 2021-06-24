/* eslint-disable react/prop-types */
import React, { useMemo } from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import customDataGridStyles from "./customDataGridStyles";
import {
  DataGrid,
  GridToolbar,
  isOverflown,
  getGridDateOperators,
} from "@material-ui/data-grid";
import { Grid } from "@material-ui/core";

const GridCellExpand = React.memo(function GridCellExpand(props) {
  const { width, value } = props;
  const wrapper = React.useRef(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const classes = customDataGridStyles();
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  React.useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === "Escape" || nativeEvent.key === "Esc") {
        setShowFullCell(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);

  return (
    <div
      ref={wrapper}
      className={classes.gridCellExpandRoot}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={cellDiv}
        style={{
          height: 1,
          width,
          display: "block",
          position: "absolute",
          top: 0,
        }}
      />
      <div ref={cellValue} className="cellValue">
        {value}
      </div>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: -17 }}
        >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current.offsetHeight - 3 }}
          >
            <Typography variant="body2" style={{ padding: 8 }}>
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </div>
  );
});

function renderCellExpand(params) {
  return (
    <GridCellExpand
      value={params.value ? params.value.toString() : ""}
      width={params.colDef.width}
    />
  );
}

function DateInputValue({ item, applyValue }) {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="flex-end"
      style={{ height: "100%", paddingLeft: "5px" }}
    >
      <p>Palabras clave</p>
    </Grid>
  );
}

const customDateFilterOperators = getGridDateOperators().map((operator) => ({
  ...operator,
  InputComponent: DateInputValue,
}));

function CustomDataGrid({ columns, rows, isLoading }) {
  const cellExpandColumns = useMemo(
    () =>
      columns.map((column) => ({
        ...column,
        renderCell: renderCellExpand,
      })),
    [columns]
  );

  return (
    <Grid
      item
      style={{
        height: "800px",
        padding: "30px",
      }}
    >
      <DataGrid
        loading={isLoading}
        rows={rows}
        columns={cellExpandColumns}
        //localeText={DATAGRID_SPANISH_TEXT}
        pageSize={11}
        density={"standard"}
        components={{
          Toolbar: GridToolbar,
        }}
      />
    </Grid>
  );
}

GridCellExpand.propTypes = {
  value: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

GridCellExpand.propTypes = {
  value: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

renderCellExpand.propTypes = {
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: PropTypes.any.isRequired,
  /**
   * The cell value, but if the column has valueGetter, use getValue.
   */
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
    PropTypes.bool,
  ]),
};

export default CustomDataGrid;
