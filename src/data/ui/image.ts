import type { AlternativeText } from "@/types/accessibility";

const altText: AlternativeText[] = [{
    objectName: 'aap-preview',
    caption: 'A notepad-like window display some code.'
}, {
    objectName: 'ccs-preview',
    caption: 'A terminal displaying the resulting text.'
}, {
    objectName: 'dwf-preview',
    caption: 'A web browser window displaying a page titled \'Find Dog Walkers\'.'
}, {
    objectName: 'lls-preview',
    caption: 'A window with sidebar navigation and statistics display under the \'Home\' title.'
}, {
    objectName: 'ppw-preview',
    caption: 'A web browser window displaying the hero section of the website.'
}, {
    objectName: 'wpq-preview',
    caption: 'A window showing a page titled \'current quotes for this order\'.'
}, {
    objectName: 'xbk-preview',
    caption: 'An application showing a blocky drawing.'
}];

export const imageData = {
    alterativeText: altText,

    getByObjectName: (name: string): string => {
        const altObject = altText.find(text => text.objectName = name);
        return altObject === undefined ? '' : altObject.caption
    }
};
