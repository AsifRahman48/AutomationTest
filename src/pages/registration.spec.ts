import { test, expect } from '@playwright/test';

test.describe("User Registration Test", () => {
    test('Launch Browser', async ({ page,baseURL }) => {
        await page.goto(baseURL!);
        await expect(page.getByRole('link', { name: ' Home' })).toBeVisible();

        await page.getByRole('link', { name: ' Signup / Login' }).click();
        await expect(page.getByRole('heading', { name: 'New User Signup!' })).toBeVisible();
        await page.getByRole('textbox', { name: 'Name' }).click();
        await page.getByRole('textbox', { name: 'Name' }).fill('Asif48');
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').click();
        await page.locator('form').filter({ hasText: 'Signup' }).getByPlaceholder('Email Address').fill('asif48@yopmail.com');
        await page.getByRole('button', { name: 'Signup' }).click();

        await page.getByRole('radio', { name: 'Mr.' }).check();
        await page.getByRole('textbox', { name: 'Password *' }).click();
        await page.getByRole('textbox', { name: 'Password *' }).fill('123456');
        await page.locator('#days').selectOption('4');
        await page.locator('#months').selectOption('2');
        await page.locator('#years').selectOption('2003');
        await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
        await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();


        await page.getByRole('textbox', { name: 'First name *' }).click();
        await page.getByRole('textbox', { name: 'First name *' }).fill('Asif');
        await page.getByRole('textbox', { name: 'Last name *' }).click();
        await page.getByRole('textbox', { name: 'Last name *' }).fill('Rahman');
        await page.getByRole('textbox', { name: 'Company', exact: true }).click();
        await page.getByRole('textbox', { name: 'Company', exact: true }).fill('BS23');
        await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
        await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('Amtoli, Mohakhali');
        await page.getByRole('textbox', { name: 'Address 2' }).click();
        await page.getByRole('textbox', { name: 'Address 2' }).fill('Amtoli, Mohakhali');
        await page.getByRole('textbox', { name: 'State *' }).click();
        await page.getByRole('textbox', { name: 'State *' }).fill('Kolkhata');
        await page.getByRole('textbox', { name: 'State *' }).click();
        await page.getByRole('textbox', { name: 'State *' }).dblclick();
        await page.getByRole('textbox', { name: 'State *' }).fill('Panjab');
        await page.getByRole('textbox', { name: 'City * Zipcode *' }).click();
        await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('Panjab');
        await page.locator('#zipcode').click();
        await page.locator('#zipcode').fill('1212');
        await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
        await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('01785209073');

        await page.getByRole('button', { name: 'Create Account' }).click();
        await expect(page.getByText('Account Created!')).toBeVisible();
        await page.getByRole('link', { name: 'Continue' }).click();
        await expect(page.getByText('Logged in as asif48')).toBeVisible();
    });
});
