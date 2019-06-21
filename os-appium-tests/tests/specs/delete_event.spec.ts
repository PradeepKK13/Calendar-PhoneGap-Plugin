import 'jasmine';
import * as EntryScreen from '../screenobjects/EntryScreen';
import * as Context from '../helpers/Context';
import '../helpers/Constants';
import NativeAlert from "../helpers/NativeAlert";

describe('[TestSuite, Description("Delete event")]', () => {
    beforeEach(() => {
        browser.reset();
        Context.waitForWebsiteLoaded();
        Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);

    });

    it('[Test, Description("Create event without optionals for a period of time"), Priority="P0"]', () => {
        EntryScreen.waitForActive();
        EntryScreen.getCreateEventButton().click();
        NativeAlert.acceptPermission();
        // TODO
        expect(false).toBeTruthy("IMPLEMENT TEST SCENARIO");
    });

    afterEach(() => {
        //Do test teardown here
    });

});
