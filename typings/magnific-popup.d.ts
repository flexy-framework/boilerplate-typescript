interface JQuery {
    magnificPopup(callback?: () => void): JQuery;
}

interface JQueryStatic {
    magnificPopup: JQueryMagnificPopupStatic;
}

interface JQueryMagnificPopupStatic {
    open: any;
    (): JQuery;
    parameter(name: string): string;
    parameter(name: string, value: string, append?: boolean): JQuery;
}