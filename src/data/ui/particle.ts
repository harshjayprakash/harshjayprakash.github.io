export const particleData = {
    mobileCount: 45,
    desktopCount: 60,

    determineCount(isMobile: boolean): number {
        return (isMobile) ? this.mobileCount : this.desktopCount;
    }
};
