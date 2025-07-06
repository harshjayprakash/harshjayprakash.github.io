import { computed } from "vue";

import { linkData } from "@/data/ui/link";
import type { LinkableConfig, Linkable } from "@/types/ui/Linkable";

const useLinkable = (vLink: Linkable, to: string, newWindow: boolean) => {
    return computed<LinkableConfig>(() => {
        switch (vLink) {
        default:
        case 'none':
            return {
                is: 'div',
                href: undefined,
                target: undefined,
                rel: undefined,
                to: undefined
            };
        case 'internal':
            return {
                is: 'RouterLink',
                href: undefined,
                target: undefined,
                rel: undefined,
                to: to
            }
        case 'external':
            return {
                is: 'a',
                href: to,
                target: linkData.newWindowOpenData.target(newWindow),
                rel: linkData.newWindowOpenData.rel(newWindow),
                to: undefined
            }
        }
    });
}

export default useLinkable;
