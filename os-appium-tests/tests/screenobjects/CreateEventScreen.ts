import * as Context from "../helpers/Context";

export function getMessageContainer () {
    return Context.getElemBySelector("#b8-MarginContainer");
}

export function getTitleInput (): WebdriverIO.Element {
    return Context.getElemBySelector("#Input_Title");
}

export function getNotesInput (): WebdriverIO.Element {
    return Context.getElemBySelector("#Input_Notes");
}

export function getLocationInput (): WebdriverIO.Element {
    return Context.getElemBySelector("#Input_Location");
}

export function getStartDateInput (): WebdriverIO.Element {
    return Context.getElemBySelector("#Input_StartDateTime");
}

export function getEndDateInput (): WebdriverIO.Element {
    return Context.getElemBySelector("#Input_EndDateTime");
}

export function getIsEditable (): WebdriverIO.Element {
    return Context.getElemBySelector("#Switch3");
}

export function getCreateEventButton (): WebdriverIO.Element {
    return Context.getElemBySelector("#CreateEventBtn");
}

/**
 * Waits for the screen to be active.
 * Returns false if the screen title does not match the expected string 'create event'
 * or throws an error if the title element is not found.
 */
export function waitForActive (): boolean {
    return "create event" == Context.getElemBySelector("#b1-Title").getText().trim().toLowerCase();
}
