const mobileCount = 45;
const desktopCount = 60;

export const particleData = {
    mobileCount,
    desktopCount,

    determineCount: (isMobile: boolean): number => {
        return (isMobile) ? mobileCount : desktopCount
    }
};
