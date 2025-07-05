export const metaData = {
    copyrightYear: '2025',
    buildDate: '25.06.2025',
    buildStatus: 'ALPHA',

    version: {
        epoch: 4,
        major: 6,
        minor: 0,
        patch: 0,

        fullString(): string {
            return `${(this.epoch * 1000) + this.major}.${this.minor}.${this.patch}`
        }
    }
};
