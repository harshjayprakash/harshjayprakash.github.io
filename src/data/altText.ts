import type { AltText } from '@/types/AltText';

const altText: AltText[] = [{
    name: 'ppw-preview.png',
    text: 'A web browser window displaying the hero section of the website.'
}, {
    name: 'xbk-preview.png',
    text: 'An application showing a blocky drawing.'
}, {
    name: 'aap-preview.png',
    text: 'A notepad-like window displaying some code.'
}, {
    name: 'wpq-preview.png',
    text: 'A window showing a page titled \'current quotes for this order\'.'
}, {
    name: 'lls-preview.png',
    text: 'A window with sidebar navigation and statistics display under the \'Home\' title'
}, {
    name: 'dwf-preview.png',
    text: 'A web browser window displaying a page titled \'Find Dog Walkers\'.'
}, {
    name: 'ccs-preview.png',
    text: 'A terminal displaying the resulting text.'
}];

const findAltTextFromName = (name: string) => {
    const alt = altText.find(text => text.name === name);
    return (alt === undefined) ? '' : alt.text;
}

const getAltText = () => {
    return { altText, findAltTextFromName };
}

export default getAltText;
