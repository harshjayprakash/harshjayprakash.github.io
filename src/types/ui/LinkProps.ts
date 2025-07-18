import type { LinkVariant } from "./Linkable";

export interface LinkProps {
    linkable: LinkVariant;
    to: string;
    newWindow?: boolean;
}
