import 'jasmine';
import * as EntryScreen from '../screenobjects/EntryScreen';
import * as Context from '../helpers/Context';
import * as AndroidUtils from '../helpers/AndroidUtils';
import '../helpers/Constants';
import NativeAlert from "../helpers/NativeAlert";

describe('[TestSuite, Description("Description of Sample Test Suit")]', () => {
    beforeEach(() => {
        browser.reset();
        Context.waitForWebsiteLoaded();
        Context.switchToContext(Context.CONTEXT_REF.WEBVIEW);

    });

    it('[Test, Description("ask for calendar permissions"), Priority="P0"]', () => {
        EntryScreen.waitForActive();
        EntryScreen.getCreateEventButton().click();
        Context.switchToContext(Context.CONTEXT_REF.NATIVE);
        expect(AndroidUtils.getElemByText("ALLOW").isDisplayed).toBeTruthy('Permissions not asked');
    });

    it('[Test, Description("give calendar permissions"), Priority="P0"]', () => {
        Context.waitForElement("#b1-Title");
        EntryScreen.getCreateEventButton().click();
        NativeAlert.acceptPermission();
        //how can this be validated? try to input a calendar event?
        //TODO finish test scenario
        expect(false).toBeTruthy("IMPLEMENT TEST SCENARIO");
    });

    xit('[Test, Description("deny calendar permissions"), Priority="P1"]', () => {
        Context.waitForElement("#b1-Title");
        EntryScreen.getCreateEventButton().click();
        NativeAlert.denyPermission();
        //how can this be validated? try to input a calendar event?
        //TODO finish test scenario
        expect(false).toBeTruthy("IMPLEMENT TEST SCENARIO");
    });


    afterEach(() => {
        //Do test teardown here
    });

});
