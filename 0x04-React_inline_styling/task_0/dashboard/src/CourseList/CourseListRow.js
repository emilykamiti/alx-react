import React from "react";
import PropTypes from "prop-types";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const rowStyle = {
    backgroudColor: "#f5f5f5ab",
  };
  
  const headerStyle = {
    backgroundcolor: "#deb5b545",
  };
  return (
    <tr style={rowStyle}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2}>{textFirstCell}</th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
