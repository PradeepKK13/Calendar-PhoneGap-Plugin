import 'jasmine';
import * as EntryScreen from '../screenobjects/EntryScreen';
import * as CreateEventScreen from '../screenobjects/CreateEventScreen';
import * as Context from '../helpers/Context';
import '../helpers/Constants';
import NativeAlert from "../helpers/NativeAlert";

describe('[TestSuite, Description("Create event without optionals")]', () => {
    beforeEach(() => {
        browser.reset();
        Context.waitForWebsiteLoaded();
        Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);

    });

    it('[Test, Description("Create event without optionals for a period of time"), Priority="P1"]', () => {
        EntryScreen.waitForActive();
        EntryScreen.getCreateEventButton().click();
        NativeAlert.acceptPermission();

        CreateEventScreen.getTitleInput().setValue("Test app - 1");
        CreateEventScreen.getLocationInput().setValue("Lisbon");
        CreateEventScreen.getNotesInput().setValue("Notes");

        //TODO date inputs insertion for test automation
        // CreateEventScreen.getStartDateInput().setValue(startDateString);
        // CreateEventScreen.getEndDateInput().setValue(endDateString);

        CreateEventScreen.getCreateEventButton().click();

        expect("event successfully created." == CreateEventScreen.getMessageContainer().getText().trim().toLowerCase()).toBeTruthy("Failed to create event");
    });

    afterEach(() => {
        //Do test teardown here
    });

});
