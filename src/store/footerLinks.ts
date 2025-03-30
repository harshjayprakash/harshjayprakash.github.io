import type { ILink } from '@/interfaces/Link';

const footerLinks: ILink[] = [
    {
        variant: 'external',
        name: 'Source',
        path: 'https://github.com/harshjayprakash/harshjayprakash.github.io'
    }
];

const getFooterLinks = () => {
    return { footerLinks };
}

export default getFooterLinks;
