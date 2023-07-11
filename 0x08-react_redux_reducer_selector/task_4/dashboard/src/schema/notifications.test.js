import { getAllNotificationsByUser, normalizedData } from "./notifications";

describe("notification_tests", function () {
  // Describe the test suite for reading data from JSON
  describe("reads data from JSON", function () {

    it("Should return filtered list", function () {
      const userId = "5debd764a7c57c7839d722e9";
      const expectedReturn = [
      ];

      const filtered = getAllNotificationsByUser(userId);

      expect(filtered).toEqual(expect.arrayContaining(expectedReturn));
    });

    describe("reads data from JSON and normalizes it", function () {
      // Test case: normalized data has a correct result array
      it("normalized data has a correct result array", function () {
        // Set the expected return for the result array
        const expectedReturn = [
        ];

        const result = normalizedData.result;

        // Check if the result array matches the expected return
        expect(result).toEqual(expect.arrayContaining(expectedReturn));
      });

      it("has a correct users entity", function () {

        const expectedReturn = {
        };

        const user = normalizedData.entities.users["5debd764a7c57c7839d722e9"];

        expect(user).toEqual(expectedReturn);
      });

      it("has a correct messages entity", function () {
        // Set the expected return for the message entity
        const expectedReturn = {
          // Expected message object properties
        };

        // Get the message entity from the normalized data
        const message =
          normalizedData.entities.messages[
            "efb6c485-00f7-4fdf-97cc-5e12d14d6c41"
          ];

        // Check if the message entity matches the expected return
        expect(message).toEqual(expectedReturn);
      });

      // Test case: has a correct notifications entity
      it("has a correct notifications entity", function () {
        // Set the expected return for the notification entity
        const expectedReturn = {
          // Expected notification object properties
        };

        // Get the notification entity from the normalized data
        const notification =
          normalizedData.entities.notifications["5debd7642e815cd350407777"];

        // Check if the notification entity matches the expected return
        expect(notification).toEqual(expectedReturn);
      });
    });
  });
});
