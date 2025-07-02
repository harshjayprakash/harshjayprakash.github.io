import type { SocialLink } from "@/types/profile/SocialLink";

const socialList: SocialLink[] = [{
    social: 'Email',
    uri: 'mailto:harshjayprakash@outlook.com',
    description: 'Get in touch with me.'
}, {
    social: 'LinkedIn',
    uri: 'https://www.linkedin.com/in/harshjayprakash7/',
    description: 'Connect with me'
}, {
    social: 'GitHub',
    uri: 'https://github.com/harshjayprakash',
    description: 'See my code'
}];

export const socialData = {
    all: socialList,
}
