import { day, day1 } from './../src/weekday.js';

  describe("Date", () => {
    // test("should tell us if the given date is S-M", () => {
    //   var userChosenDate = new Date(9);
    //   expect(userChosenDate.dayFinder()).toEqual("tuesday");
    // });
    test("should tell us what the current ", () => {
      var day = new Date('December 26, 1995 23:15:30');
      expect(day.getDay()).toEqual(2);
    });

  });














// This prompt will give you the chance to try out working with the Date object. Create an app for calculating the day for any given date. The user should be able to enter in a date and see what day of the week that date occured on. If you enjoy brain teasers, try to work out your own algorithm. If you need help getting started, check out the Wikipedia article. The program should be able to handle past dates, future dates, and invalid dates (user should be notified if the date is invalid).
