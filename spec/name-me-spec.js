import { findDay } from "../src/weekday-calculator";

describe('findDay', function() {

    it('should test whether todays date is Wednesday', function() {
    var testResult = new findDay(2019, 5, 29);
    expect(testResult).toEqual("Wednesday");
    });
});
