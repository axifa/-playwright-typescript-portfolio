import {test, expect} from '@playwright/test';

test('GET user return correct data', async({request}) => {

    const response = await request.get('https://jsonplaceholder.typicode.com/users/1');

    expect(response.status()).toBe(200);
    
    const body = await response.json();
    expect(body.name).toBe('Leanne Graham');
    expect(body.email).toBe('Sincere@april.biz');

});

test('GET user 2 return correct data', async({request}) => {

        const response = await request.get('https://jsonplaceholder.typicode.com/users/2');

        expect(response.status()).toBe(200);

        const body2 = await response.json();
        expect (body2.name).toBe('Ervin Howell');
        expect (body2.email).toBe('Shanna@melissa.tv');
});
