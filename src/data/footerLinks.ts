import type {Link} from "@/types/Link";

const footerLinks: Link[] = [{
    variant: 'external',
    name: 'Source',
    path: 'https://github.com/harshjayprakash/harshjayprakash.github.io'
}];

const getFooterLinks = () => {
    return { footerLinks };
}

export default getFooterLinks;
