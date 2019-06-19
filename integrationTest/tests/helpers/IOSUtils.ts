import "../constants"

function getNameSelector (name: string, type?: string): string {
    let convType = (type != undefined && type != "") ? type : "*";
    return '//' + convType + '[@name="' + name + '"]';
}

function getLabelSelector (label: string, type?: string): string {
    let convType = (type != undefined && type != "") ? type : "*";
    return '//' + convType + '[@label="' + label + '"]';
}

function getValueSelector (value: string, type?: string): string {
    let convType = (type != undefined && type != "") ? type : "*";
    return '//' + convType + '[@value="' + value + '"]';
}

export function getElemByXPath (xpath: string): WebdriverIO.Element {
    $(xpath).waitForDisplayed(DEFAULT_TIMEOUT);
    return $(xpath);
}

export function getElemByName (name: string): WebdriverIO.Element {
    $(getNameSelector(name)).waitForDisplayed(DEFAULT_TIMEOUT);
    return $(getNameSelector(name));
}

export function getElemByLabel (label: string): WebdriverIO.Element {
    $(getLabelSelector(label)).waitForDisplayed(DEFAULT_TIMEOUT);
    return $(getNameSelector(label));
}

export function getElemByValue (value: string): WebdriverIO.Element {
    $(getValueSelector(value)).waitForDisplayed(DEFAULT_TIMEOUT);
    return $(getValueSelector(value));
}
