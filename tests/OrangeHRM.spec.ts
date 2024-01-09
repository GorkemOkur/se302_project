import { test, expect } from '@playwright/test';

import orangePage from '../POM/OrangePage';
import { Console, log } from 'console';

test('Login', async ({ page }) => {

  const orangeHRM = new orangePage();
  await orangeHRM.navigateToStartPage(page);

  await orangeHRM.login(page, 'hamiltonaaron', '0KKMAeqq1@p3F');

  // Expect logged-in and have name on the profile section
  const nameArea = page.locator('#sidebar-profile-picture .name');
  await expect(nameArea).toHaveText('Aaron Hamilton');
});



test('Check employee\'s Name', async ({ page }) => {
  
  const orangeHRM = new orangePage();
  await orangeHRM.navigateToStartPage(page);
  await orangeHRM.login(page, 'hamiltonaaron', '0KKMAeqq1@p3F');

  await orangeHRM.goToEmployeePage(page, '1097');

  // Expect See the name in EMPLOYEE PAGE
  await expect(page.locator('.employee-details .emp-name')).toHaveText('Tian  Fieur', { timeout: 15000 });
});



test('Check the Total number of Application Received', async ({ page }) => {
  
  const orangeHRM = new orangePage();
  await orangeHRM.navigateToStartPage(page);
  await orangeHRM.login(page, 'hamiltonaaron', '0KKMAeqq1@p3F');

  await orangeHRM.goToRecruitmentPage(page);

  await page.waitForLoadState('domcontentloaded');

  // Expect See otal number of Application Received as 3
  await expect(page.locator(".oxd-status-tab-panel-filters li:nth-child(2) .oxd-status-tab-panel-filter-count"))
    .toHaveText('3');
});