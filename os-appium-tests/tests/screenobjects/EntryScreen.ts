import * as Context from "../helpers/Context";
import * as AndroidUtils from "../helpers/AndroidUtils";
import * as IOSUtils from "../helpers/IOSUtils";

export function getCreateEventButton (): WebdriverIO.Element {
    return Context.getElemBySelector("#b4-Content");
}

export function getFindEventButton (): WebdriverIO.Element {
    return Context.getElemBySelector("#b6-Content");
}

export function getDeleteEventButton (): WebdriverIO.Element {
    return Context.getElemBySelector("#b9-Content");
}

export function getOpenCalendarButton (): WebdriverIO.Element {
    return Context.getElemBySelector("#b11-Content");
}

export function getNativeElementX (): WebdriverIO.Element {
    if (browser.isAndroid) {
        return AndroidUtils.getElemByPartialId('viewIdX');
    } else {
        return IOSUtils.getElemByXPath('//UIAApplication[1]/UIAWindow[1]/UIAStaticText[2]');
    }
}

/**
 * Waits for the screen to be active.
 * Returns false if the screen title does not match the expected string 'CalendarPlugin'
 * or throws an error if the title element is not found.
 */
export function waitForActive (): boolean {
    return "calendar plugin" == Context.getElemBySelector("#b1-Title").getText().trim().toLowerCase();
}
