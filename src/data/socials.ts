import type { Social } from "@/types/Social";

const socials: Social[] = [{
    name: 'Email',
    to: 'mailto:harshjayprakash@outlook.com',
    tag: 'harshjayprakash'
}, {
    name: 'LinkedIn',
    to: 'https://www.linkedin.com/in/harshjayprakash7/',
    tag: 'harshjayprakash7'
}, {
    name: 'GitHub',
    to: 'https://github.com/harshjayprakash',
    tag: 'harshjayprakash'
}]

const getSocials = () => {
    return { socials };
}

export default getSocials;
