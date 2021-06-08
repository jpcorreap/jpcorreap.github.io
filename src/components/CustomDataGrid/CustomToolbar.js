import React from "react";
import {
  GridToolbarContainer,
  GridDensitySelector,
  GridColumnsToolbarButton,
  GridFilterToolbarButton,
} from "@material-ui/data-grid";
import PropTypes from "prop-types";

function CustomToolbar() {
  return (
    <GridToolbarContainer>
      <GridColumnsToolbarButton />
      <GridDensitySelector />
      <GridFilterToolbarButton />
    </GridToolbarContainer>
  );
}

CustomToolbar.propTypes = {
  exportFunction: PropTypes.func,
};

export default CustomToolbar;
