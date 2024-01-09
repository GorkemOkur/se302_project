// Example content for GooglePage.ts
class OrangePage {

    async navigateToStartPage(page) {
        await page.goto('https://orangehrm-demo-7x.orangehrmlive.com/');
    }
    
    async login(page, username, password) {
        await page.fill('#txtUsername', username);
        await page.fill('#txtPassword', password);
        await page.press('#btnLogin', 'Enter');
    }

    async goToEmployeePage(page, ID) {
        await page.press('#left_menu_item_11 a', 'Enter');
        await page.getByText(ID).click();
    }

    async goToRecruitmentPage(page) {
        await page.press('#left_menu_item_15 a', 'Enter');
        await page.waitForSelector('.oxd-list-sidepanel .oxd-status-tab-panel-filters .oxd-status-tab-panel-filter');
    }

    async goToReportPage(page) {
        await page.press('#left_menu_item_12 a', 'Enter');
        await page.waitForSelector('a[data-tooltip="Add Course"]');
    }

}
export default OrangePage;