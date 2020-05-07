const {defineFeature, loadFeature}= require('jest-cucumber');
const feature = loadFeature('./addRoute.feature');

defineFeature(feature, test =>  {
    beforeEach(async () =>{
        awaut page.goto('http://localhost:3000')
    })

    test('The user wants to add the name, date and description for the Route', ({given, when, then}) => {
        given('The user', () =>{
            webId = 'https://exampleuser.solid.community/profile/card#me';
        });

        when('I fill the name, date and description', async () => {
            WebElement name = driver.findElement(By.name("name"));
            WebElement description = driver.findElement(By.name("description"));
            // Enter something to search for
            name.sendKeys('route1');
            description.sendKeys('description for route1');
            // Now submit the form. WebDriver will find the form for us from the element
            WebElement next = driver.findElement(By.type("submit"));
            click_button(next);
        });

        then('Map page shoul show', () => {
            await expect(page).toMatchElement('span', {text: ' Click on the map to add trackpoints to your route' });
        });
    });


});