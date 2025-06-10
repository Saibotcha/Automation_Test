import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/Login_page.js';

test('page object model', async ({ page }) => {
    const login = new LoginPage(page); 

    await login.goToLoginpage(); 
    await login.Login('Admin', 'admin123');
    
});


