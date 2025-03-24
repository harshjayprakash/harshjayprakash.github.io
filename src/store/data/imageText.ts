import type { IImageData } from "@/store/interfaces/ImageData";

const imageText: IImageData[] = [
    {
        objectName: 'ppw-screenshot.PNG',
        altText: 'A web browser window displaying the hero section of the website.'
    },
    {
        objectName: 'xbk-screenshot.PNG',
        altText: 'An application showing a blocky drawing of an abstract bridge, with a single pink block in the corner.'
    },
    {
        objectName: 'aap-screenshot.PNG',
        altText: 'A notepad-like window displaying some code.'
    },
    {
        objectName: 'wpq-screenshot.PNG',
        altText: 'A window showing a listview box of quote orders, a panel showing a preview of a quote, and a sidebar of action buttons.'
    },
    {
        objectName: 'lls-screenshot.PNG',
        altText: 'A window with sidebar navigation and statistics display under the \'Home\' title'
    },
    {
        objectName: 'dwf-screenshot.PNG',
        altText: 'A web browser window displaying a page titled \'Find Dog Walkers\' with a mile spinbox box search.'
    },
    {
        objectName: 'ccs-screenshot.PNG',
        altText: 'A terminal displaying the resuling text.'
    }
]

const getImageData = () => {
    const getImageAlt = (objectName: String) => {
        imageText.forEach(text => {
            if (text.objectName === objectName) {
                return text.altText
            }
        });
        return '';
    }

    return { imageText, getImageAlt };
}

export default getImageData;
