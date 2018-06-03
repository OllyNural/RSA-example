# RSA-example
The aim of this repo is to provide a Javascript example implementation of the RSA encryption algorithm, using example servers, private and public keys, and a single docker-compose up to run the server. 


src ocntains source code

Whenever you hit the endpoint, the server generates a key pair value, and returns the `e` and `n` value in the response body.

The user can then encrypt their message using RSA encryption with these values, and the server will decrypt it using the private key generated and stored earlier.

The server should store the 