import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { AppContext, defaultUser } from './AppContext';
import { connect } from 'react-redux';

// CSS styles for the App component
const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1.1rem',
    paddingLeft: 10,
    margin: 0,
    minHeight: 350,
  },
});

class App extends React.Component {
  constructor(props) {
    super(props);

    // Initial state of the App component
    this.state = {
      displayDrawer: false,
      user: defaultUser,
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 },
      ],
      listNotifications: [
        { id: 1, type: 'default', value: 'New course available', html: { __html: null } },
        { id: 2, type: 'urgent', html: { __html: 'Object Oriented Programming intro' } },
        { id: 3, type: 'default', value: 'Present Javascript project requirements test on Friday' },
      ],
    };
  }

  // Method to handle user logout
  logOut = () => {
    this.setState({ user: defaultUser });
  };

  // Method to handle user login
  logIn = (email, password) => {
    const currentUser = { email: email, password: password, isLoggedIn: true };
    this.setState({ user: currentUser });
  };

  // Method to handle displaying the drawer
  handleDisplayDrawer = () => {
    this.setState({ displayDrawer: true });
  };

  // Method to handle hiding the drawer
  handleHideDrawer = () => {
    this.setState({ displayDrawer: false });
  };

  // Method to mark a notification as read
  markNotificationAsRead = (id) => {
    const notifications = this.state.listNotifications;
    this.setState({ listNotifications: notifications.filter((notif) => id !== notif.id) });
  };

  // Lifecycle method: called after the component is mounted
  componentDidMount() {
    this.alert();
  }

  // Method to set up event listeners for keydown events
  alert() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.code === 'KeyH') {
        e.preventDefault();
        this.props.logOut();
        alert('Logging you out');
      }
    });
  }

  // Lifecycle method: called just before the component is unmounted
  componentWillUnmount() {
    window.removeEventListener('keydown', alert);
  }

  render() {
    const currentUser = this.state.user;
    const displayDrawerState = this.state.displayDrawer;

    // Component to render the appropriate content based on the user's login status
    const LoginStatus = () => {
      if (currentUser.isLoggedIn) {
        return (
          <BodySectionWithMarginBottom title="Course List">
            <CourseList listCourses={this.state.listCourses} />
          </BodySectionWithMarginBottom>
        );
      } else {
        return (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={this.logIn} />
          </BodySectionWithMarginBottom>
        );
      }
    };

    return (
      <AppContext.Provider value={{ currentUser, logOut: this.logOut }}>
        <Notifications
          displayDrawer={displayDrawerState}
          showDrawer={this.handleDisplayDrawer}
          hideDrawer={this.handleHideDrawer}
          listNotifications={this.state.listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <Header />
        <div className={css(styles.AppBody)}>
          {LoginStatus()}
          <BodySection title="News from the School">
            <p>
              News around the school!
              News around the school!
              News around the school!
              News around the school!
              News around the school!
              News around the school!
              News around the school!
              News around the school!
            </p>
          </BodySection>
        </div>
        <Footer />
      </AppContext.Provider>
    );
  }
}

// Maps the state to props to make it available as a prop in the component
export const mapStateToProps = (state) => {
  return { isLoggedIn: state.get('isUserLoggedIn') };
};

export default connect(mapStateToProps)(App);
