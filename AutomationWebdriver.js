describe('Github test', () => {
  
  it('should verify URL on the wenpage and verify login', async () => {

    await browser.url("https://github.com/");

    const sighUp = await $("*=Sign in");
    const logInName = await $('//*[@name="login"]');
    const logInPassw = await $('//input[@id="password"]'); 
    const signIn = await $('//input[@class="btn btn-primary btn-block js-sign-in-button"]');

    sighUp.click();
    logInName.click();
    logInName.addValue("danielslad@gmail.com");
    logInPassw.click();
    logInPassw.addValue("D#aniel1987##");
    signIn.click();
    await browser.pause(6000);

  });

  it('should open my repo', async () => {

    await browser.url("https://github.com/Daniel1987Daniel?tab=repositories");

    const selectRepo = await $('*=AutomationTesting.js');
    const selectRepo2 = await $('=GithubAutoTest.js');

    selectRepo.click();
    await browser.pause(3000);
    selectRepo2.click();
    await browser.pause(3000);

  });
});
