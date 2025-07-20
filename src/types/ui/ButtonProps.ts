import type { LinkVariant } from "./Linkable";

export type ButtonAppearance = 'default' | 'primary' | 'outline' | 'subtle' | 'transparent';

export interface ButtonProps {
    linkable: LinkVariant;
    appearance?: ButtonAppearance;
    to: string;
    newWindow?: boolean;
}
