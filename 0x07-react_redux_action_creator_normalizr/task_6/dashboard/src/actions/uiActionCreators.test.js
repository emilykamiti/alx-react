import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
  } from "./uiActionTypes";
  
  import {
    login,
    logout,
    displayNotificationDrawer,
    hideNotificationDrawer,
  } from "./uiActionCreators";
  
  // Test suite for UI action creators
  describe("action creators tests", () => {
    // Test case for login action creator
    it("returns correct action for login", function () {
      // Define a user object with email and password
      const user = { email: "codewithmide@gmail.com", password: 123456789 };
  
      // Define the expected action object
      const expectedReturn = { type: LOGIN, user };
  
      // Call the login action creator
      const result = login(user.email, user.password);
  
      // Expect the returned value to match the expected action object
      expect(result).toEqual(expectedReturn);
    });
  
    // Test case for logout action creator
    it("returns correct action for logout", () => {
      // Define the expected action object
      const expectedReturn = { type: LOGOUT };
  
      // Call the logout action creator
      const result = logout();
  
      // Expect the returned value to match the expected action object
      expect(result).toEqual(expectedReturn);
    });
  
    // Test case for displayNotificationDrawer action creator
    it("returns correct action for displayNotificationDrawer", () => {
      // Define the expected action object
      const expectedReturn = { type: DISPLAY_NOTIFICATION_DRAWER };
  
      // Call the displayNotificationDrawer action creator
      const result = displayNotificationDrawer();
  
      // Expect the returned value to match the expected action object
      expect(result).toEqual(expectedReturn);
    });
  
    // Test case for hideNotificationDrawer action creator
    it("returns correct action for hideNotificationDrawer", () => {
      // Define the expected action object
      const expectedReturn = { type: HIDE_NOTIFICATION_DRAWER };
  
      // Call the hideNotificationDrawer action creator
      const result = hideNotificationDrawer();
  
      // Expect the returned value to match the expected action object
      expect(result).toEqual(expectedReturn);
    });
  });
  