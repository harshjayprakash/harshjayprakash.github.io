import type { Social } from "@/types/Social";

const socials: Social[] = [
    {
        name: 'LinkedIn',
        tag: 'harshjayprakash7',
        uri: 'https://www.linkedin.com/in/harshjayprakash7/'
    },
    {
        name: 'GitHub',
        tag: 'harshjayprakash',
        uri: 'https://github.com/harshjayprakash'
    },
    {
        name: 'Email',
        tag: 'harshjayprakash@outlook.com',
        uri: 'mailto:harshjayprakash@outlook.com'
    }
];

const getSocials = () => {
    return { socials };
}

export default getSocials;
