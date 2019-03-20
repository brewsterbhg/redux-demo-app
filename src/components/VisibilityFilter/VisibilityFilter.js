import React, { Fragment } from "react";
import PropTypes from "prop-types";
import { SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED } from "../../utils/constants";
import "./visibility-filter.css";

const VisibilityFilter = ({ onClick }) => (
  <Fragment>
    <h4>Filter:</h4>
    <div className="visibility-wrapper">
      <button name={SHOW_ALL} onClick={onClick}>
        All
      </button>
      <button name={SHOW_ACTIVE} onClick={onClick}>
        Active
      </button>
      <button name={SHOW_COMPLETED} onClick={onClick}>
        Completed
      </button>
    </div>
  </Fragment>
);

VisibilityFilter.propTypes = {
  onClick: PropTypes.func.isRequired
};

export default VisibilityFilter;
