import React from 'react';
import CourseListRow from './CourseListRow';
import propTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite/no-important';

/**
 * Component representing a list of courses.
 * @param {Object} props - The component props.
 * @param {Array} props.listCourses - An array of course objects.
 * @returns {JSX.Element} - JSX element representing the course list.
 */

function CourseList({ listCourses }) {
    return (
        <table id="CourseList" className={css(styles.table)}>
          <thead className={css(styles.th)}>
            <CourseListRow isHeader={true} textFirstCell='Available courses' />
            <CourseListRow isHeader={true} textFirstCell='Course name' textSecondCell="Credit" />
          </thead>
          <tbody>
          { listCourses.length == 0 ? <CourseListRow isHeader={false} textFirstCell='No course available yet'/> : null
          }
          { listCourses.map((val, idx) => {
            return <CourseListRow isHeader={false} textFirstCell={val.name} textSecondCell={val.credit} key={val.id}/>
          })
          }
          </tbody>
        </table>
      );
}
 

const styles =  StyleSheet.create({
  table: {
    width: '100%',
    margin: '0 auto',
    border: '1px solid rgb(102, 91, 91)',
    marginTop: '5rem',
  },
  th: {
    borderBottom: '1px solid rgb(102, 91, 91)',
    textAlign: 'left',
  },
  th: {
    ':[colspan="2"]': {
      textAlign: 'center'
    }
  }
})

CourseList.propTypes = {
  listCourses: propTypes.arrayOf(CourseShape)
}

CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList;