
type OpenFrame = {
    kind: 'OPEN',
    raw: [number, number]
};
type SpareFrame = {
    kind: 'SPARE',
    raw: [number, "/"]
};
type StrikeFrame = {
    kind: 'STRIKE',
    raw: [10]
}

export const createOpenFrame = (rollOne: number, rollTwo: number): OpenFrame => {
    return {
        kind: 'OPEN',
        raw: [rollOne, rollTwo],
    }
};

export const createSpareFrame = (rollOne: number): SpareFrame => {
    return {
        kind: 'SPARE',
        raw: [rollOne, "/"],
    }
};
export const createStrikeFrame = (): StrikeFrame => {
    return {
        kind: 'STRIKE',
        raw: [10]
    }
};


type Frame = OpenFrame | SpareFrame | StrikeFrame;

export interface Scorer {
    getScore(): number
}

export class FrameScorer implements Scorer {
    private currentFrame: Frame;
    private nextFrame: Frame;
    private nextNextFrame: Frame;

    constructor(currentFrame: Frame, nextFrame: Frame, nextNextFrame: Frame) {
        this.currentFrame = currentFrame;
        this.nextFrame = nextFrame;
        this.nextNextFrame = nextNextFrame;
    }

    getScore() : number {

        switch (this.currentFrame.kind) {
            case "OPEN": {
                const frame = this.currentFrame as OpenFrame;
                return frame.raw[0] + frame.raw[1];
            }
            case "SPARE": {
                if (this.nextFrame.kind === 'STRIKE') {
                    return 10 + 10;
                }
                // Otherwise return the first roll of the next frame
                return 10 + this.nextFrame.raw[0];
            }
            case "STRIKE": {
                if (this.nextFrame.kind === 'OPEN') {
                    return 10 + this.nextFrame.raw[0] + this.nextFrame.raw[1];
                }

                if (this.nextFrame.kind === 'STRIKE' &&
                    (this.nextNextFrame.kind === 'OPEN' || this.nextNextFrame.kind === 'SPARE')) {
                    return 10 + 10 + this.nextNextFrame.raw[0];
                }

                if (this.nextFrame.kind === 'STRIKE' && this.nextNextFrame.kind === 'STRIKE') {
                    return 10 + 10 + 10;
                }
                return 0;
            }
            default: {
                return 0;
            }

        }

    }

}