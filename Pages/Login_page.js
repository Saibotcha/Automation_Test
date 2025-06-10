exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page

        this.username_textbox = page.locator('[name="username"]');
        this.password_textbox = page.locator('[name="password"]');
        this.Login_button = page.getByRole('button', { name: 'Login' });
    }
    async goToLoginpage(){
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    }

    async Login(Username,Password){
        await this.username_textbox.fill(Username);
        await this.password_textbox.fill(Password);
        await this.Login_button.click();
    }
}
