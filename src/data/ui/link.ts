export const linkData = {
    newWindowOpenData: {
        rel: (newWindow: boolean) => (newWindow) ? 'noopener noreferrer' : undefined,
        target: (newWindow: boolean) => (newWindow) ? '_blank' : undefined,
    },
};
