export const linkData = {
    newWindowOpenData: {
        rel(newWindow: boolean) {
            return (newWindow) ? 'noopener noreferrer' : undefined
        },
        target(newWindow: boolean) {
            return (newWindow) ? '_blank' : undefined
        }
    },
};
