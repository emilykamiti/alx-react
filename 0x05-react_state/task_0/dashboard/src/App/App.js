import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    this.listNotifications = [
      { id: 1, value: 'New course available', type: 'default' },
      { id: 2, value: 'New resume available', type: 'urgent' },
      { id: 3, html: { __html: getLatestNotification() }, type: 'urgent' }
    ];
    this.state = {
      displayDrawer: false
    };
    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  handleDisplayDrawer () {
    this.setState({
      displayDrawer: true
    });
  }

  handleHideDrawer () {
    this.setState({
      displayDrawer: false
    });
  }

  componentDidMount () {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', this.handleKeyDown);
    }
  }

  componentWillUnmount () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('keydown', this.handleKeyDown);
    }
  }

  handleKeyDown (event) {
    event.preventDefault();
    if (event.key === 'h' && event.ctrlKey) {
      alert('Logging you out');
      this.logOut();
    }
  }

  render () {
    return (
      <>
        <Notifications
          listNotifications={this.state.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(styles.App)}>
          <Header />
          <main className={css(styles.Main)}>
            {this.props.isLoggedIn
              ? <BodySectionWithMarginBottom title='Course list'><CourseList listCourses={this.state.listCourses} /></BodySectionWithMarginBottom>
              : <BodySectionWithMarginBottom title='Log in to continue'><Login /></BodySectionWithMarginBottom>}
            <BodySection title='News from the School'>
              <p>
                A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything.
              </p>
            </BodySection>
          </main>
          <Footer />
        </div>
      </>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    margin: 0,
    padding: 0,
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column'
  },
  Main: {
    flex: 1
  }
});

App.defaultProps = {
  isLoggedIn: false,
  logOut () {

  }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;