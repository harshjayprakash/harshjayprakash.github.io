export type LinkType = 'internal' | 'external';
export type Linkable = 'none' | LinkType;

export type ButtonAppearance = 'default' | 'primary' | 'outline' | 'subtle' | 'transparent';

export interface ButtonProps {
    linkable: LinkType;
    appearance?: ButtonAppearance;
    to: string;
    newWindow?: boolean;
}
