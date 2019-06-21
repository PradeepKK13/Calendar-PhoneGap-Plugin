import 'jasmine';
import * as EntryScreen from '../screenobjects/EntryScreen';
import * as Context from '../helpers/Context';
import * as AndroidUtils from '../helpers/AndroidUtils';
import '../helpers/Constants';
import NativeAlert from "../helpers/NativeAlert";

describe('[TestSuite, Description("Create event without optionals")]', () => {
    beforeEach(() => {
        browser.reset();
        Context.waitForWebsiteLoaded();
        Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);

    });

    it('[Test, Description("Create event without optionals for a period of time"), Priority="P0"]', () => {
        EntryScreen.waitForActive();
        EntryScreen.getFindEventButton().click();
        NativeAlert.acceptPermission();
        // TODO first create then find (?)
        expect(false).toBeTruthy("IMPLEMENT TEST SCENARIO");
    });

    afterEach(() => {
        //Do test teardown here
    });

});
