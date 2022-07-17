describe("login test", () => {

  it("should validate page title", async () => {

    await browser.url("https://the-internet.herokuapp.com/login");
    expect(await browser.getTitle()).toEqual("The Internet");

    const user = $("#username");
    const password = $("#password");
    const submitBtn = $('//button[@type="submit"]');
    const flash = $('#flash');

    await browser.pause(3000);
    await (await user).setValue('tomsmith');
    await browser.pause(2000);
    await (await password).setValue('SuperSecretPassword!');
    await browser.pause(2000);
    await (await submitBtn).click();
    await browser.pause(3000);

    await expect(flash).toHaveTextContaining('You logged into a secure area!');

    await browser.pause(3000);

  })
})
