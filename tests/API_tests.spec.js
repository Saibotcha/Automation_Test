const { test, expect, request } = require('@playwright/test');

test('POST request to create a user', async () => {
  const apiContext = await request.newContext({
    baseURL: 'https://reqres.in/api',
    extraHTTPHeaders: {
       'x-api-key': 'reqres-free-v1'
    }
  });

  const response = await apiContext.post('/users', {
    data: {
      name: 'sai',
      job: 'Software tester'
    }
  });

  expect(response.ok()).toBeTruthy(); // Expect status 201

  const data = await response.json();
  console.log(data);

  expect(data).toHaveProperty('name', 'John Doe');
  expect(data).toHaveProperty('job', 'Software Developer');
  expect(data).toHaveProperty('id'); // Random ID assigned by ReqRes
});

