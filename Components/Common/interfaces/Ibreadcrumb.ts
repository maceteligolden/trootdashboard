export interface IBreadCrumb {
    label?: string;
    isLink?: boolean;
    link?: string
}

export interface IBreadcrumbProps {
    items: IBreadCrumb[],
    pageName: string
}