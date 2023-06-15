import {
    MARK_AS_READ,
    SET_TYPE_FILTER,
    NotificationTypeFilters,
  } from "./notificationActionTypes";
  
  import {
    markAsAread,
    setNotificationFilter,
  } from "./notificationActionCreators";
  
  // Test suite for notification action creators
  describe("action creators tests", () => {
    // Test case for markAsRead action creator
    it("returns correct action for markAsRead", () => {
      // Define the expected action object
      const expectedReturn = {
        type: MARK_AS_READ,
        index: 1,
      };
  
      // Call the markAsAread action creator
      const result = markAsAread(1);
  
      // Expect the returned value to match the expected action object
      expect(result).toEqual(expectedReturn);
    });
  
    // Test case for setNotificationFilter action creator
    it("returns correct action for setNotificationFilter", () => {
      // Define the expected action object
      const expectedReturn = {
        type: SET_TYPE_FILTER,
        filter: "DEFAULT",
      };
  
      // Call the setNotificationFilter action creator
      const result = setNotificationFilter(NotificationTypeFilters.DEFAULT);
  
      // Expect the returned value to match the expected action object
      expect(result).toEqual(expectedReturn);
    });
  });
  