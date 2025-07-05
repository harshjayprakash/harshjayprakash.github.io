import type { AlternativeText } from "@/types/accessibility/AlternativeText";

const altText: AlternativeText[] = [{
    objectName: 'aap-preview.png',
    caption: 'A notepad-like window display some code.'
}, {
    objectName: 'ccs-preview.png',
    caption: 'A terminal displaying the resulting text.'
}, {
    objectName: 'dwf-preview.png',
    caption: 'A web browser window displaying a page titled \'Find Dog Walkers\'.'
}, {
    objectName: 'lls-preview.png',
    caption: 'A window with sidebar navigation and statistics display under the \'Home\' title.'
}, {
    objectName: 'ppw-preview.png',
    caption: 'A web browser window displaying the hero section of the website.'
}, {
    objectName: 'wpq-preview.png',
    caption: 'A window showing a page titled \'current quotes for this order\'.'
}, {
    objectName: 'xbk-preview.png',
    caption: 'An application showing a blocky drawing.'
}];

export const imageData = {
    alterativeText: altText,

    getByObjectName(name: string): string {
        const altObject = altText.find(text => text.objectName = name);
        return altObject === undefined ? '' : altObject.caption
    }
};
