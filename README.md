I have been having this issue on a private repo project so I have created a minimal install project to demonstrate the issue I have been seeing. It is possible I have massively failed on the configuration. 

I have done the configuration in two ways
-  import as in: https://github.com/Blue-Dog-Archolite/tape-nock-testing-failure/blob/master/test/users/test-otherUserRoute.js
- direct declaration as in: https://github.com/Blue-Dog-Archolite/tape-nock-testing-failure/blob/master/test/users/test-ldapStaticFetch.js

In both cases, the display does not record either the `before` or `after` functions being called. 

There is also a `test-works.js` file showing functionality without `tape-nock`

https://github.com/Blue-Dog-Archolite/tape-nock-testing-failure is the public project. 

```npm install```

```npm run test``` 
