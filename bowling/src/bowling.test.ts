import {createOpenFrame, createSpareFrame, createStrikeFrame, FrameScorer} from "./bowling";

describe('Test FrameScorer', () => {
    test('It calculates the scores with no spares or strikes', () => {
        let scorer = new FrameScorer(
            createOpenFrame(3, 1),
            createOpenFrame(4, 3),
            createOpenFrame(2, 5),
        );
        expect(scorer.getScore()).toEqual(4);
    });
    test('It uses the next frames first roll when current frame is a spare', () => {
        let scorer = new FrameScorer(
            createSpareFrame(4),
            createOpenFrame(4, 7),
            createOpenFrame(2, 5),
        );
        expect(scorer.getScore()).toEqual(14);
    });
    test('It adds ten when current frame is spare and next frame is a strike', () => {
        let scorer = new FrameScorer(
            createSpareFrame(4),
            createStrikeFrame(),
            createOpenFrame(2, 5),
        );
        expect(scorer.getScore()).toEqual(20);
    });
    test('It uses the next frames rolls when current is a strike, next is an open frame', () => {
        let scorer = new FrameScorer(
            createStrikeFrame(),
            createOpenFrame(3, 6),
            createOpenFrame(2, 5),
        );
        expect(scorer.getScore()).toEqual(19);
    });
    test('It uses the first frame of the next next frame when two strikes are rolled, and nextNext is open', () => {
        let scorer = new FrameScorer(
            createStrikeFrame(),
            createStrikeFrame(),
            createOpenFrame(2, 5),
        );
        expect(scorer.getScore()).toEqual(22);
    });
    test('It uses the first frame of the next next frame when two strikes are rolled, and nextNext is spare', () => {
        let scorer = new FrameScorer(
            createStrikeFrame(),
            createStrikeFrame(),
            createSpareFrame(2),
        );
        expect(scorer.getScore()).toEqual(22);
    });
    test('It calculates three strikes in a row across frames', () => {
        let scorer = new FrameScorer(
            createStrikeFrame(),
            createStrikeFrame(),
            createStrikeFrame(),
        );
        expect(scorer.getScore()).toEqual(30);
    });
    test('It allows one additional roll in the tenth frame when a strike is rolled', () => {

    });
    test('It allows one additional roll in the tenth fram when a spare is rolled', () => {

    });
});