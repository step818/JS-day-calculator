import { pingPong } from "../src/ping-pong";

describe('pingPong', function() {

    it('should test whether a number is modular of three', function() {
    var goal = new pingPong(3);
    expect(goal).toEqual([1,2,"ping"]);
    });
});