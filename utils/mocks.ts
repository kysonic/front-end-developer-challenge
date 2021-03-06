import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import articleJSON from '../static/data/article.json';
import currenciesJSON from '../static/data/currencies.json';
import navigationJSON from '../static/data/navigation.json';
import productsJSON from '../static/data/products.json';
import sessionJSON from '../static/data/session.json';
import userJSON from '../static/data/user.json';

const mock = new MockAdapter(axios);

// GET
mock.onGet(/\/articles\/.*/ig).reply(200, articleJSON, { delayResponse: 200 });
mock.onGet('/user').reply(200, userJSON, { delayResponse: 300 });
mock.onGet('/session').reply(200, sessionJSON, { delayResponse: 100 });
mock.onGet('/products').reply(200, productsJSON, { delayResponse: 400 });
mock.onGet('/navigation').reply(200, navigationJSON, { delayResponse: 100 });
mock.onGet('/currencies').reply(200, currenciesJSON, { delayResponse: 100 });

// PUT
mock.onPut('/session').reply(() => {
    const session = Object.assign({}, sessionJSON, {id: `session-${Date.now()}`})
    return [200, session, {delayResponse: 200}];
});
mock.onPut('/user/charge').reply(() => {
    return [200, {status: 200, message: 'Successfully charged'}, {delayResponse: 200}];
});
mock.onPut('/session/apply').reply(() => {
    return [200, {status: 200, message: 'Successfully applied'}, {delayResponse: 200}];
});
mock.onPut('/session/charge').reply(() => {
    return [200, {status: 200, message: 'Successfully charged'}, {delayResponse: 200}];
});

// POST
mock.onPost(/\/products\/.*\/buy/ig).reply(() => {
    return [200, {status: 200, message: 'Product was successfully bought'}, {delayResponse: 200}];
});
