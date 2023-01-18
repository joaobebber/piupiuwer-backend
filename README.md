# Piupiuwer API

## Insomnia Test

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=Piupiuwer%20API&uri=https%3A%2F%2Fraw.githubusercontent.com%2FJoaoBebber%2Fpiupiuwer-backend%2Fmain%2Fsrc%2Fconfig%2Fdocs%2Finsomnia.json)

## Description

This project uses:

- Typescript
- NodeJS
- Express
- ESLint

## Configuration

Make sure you have node installed (at least `16.0.0`) by typing `node -v` in terminal.

1. Install dependencies `yarn`
2. Configure `.env` file copying the .env.example and setting the variables

## Scripts

- `yarn dev:server`: starts the server in the port you specified in .env (default 3333)

- `yarn lint`: check linting rules based in the .eslintrc.json file

- `yarn build`: transpile the src directory

## Dependencies

- `cors`: ^2.8.5
- `date-fns`: ^2.29.3
- `dotenv`: ^16.0.3
- `express`: ^4.18.2
- `express-async-errors`: ^3.1.1
- `reflect-metadata`: ^0.1.13
- `uuidv4`: ^6.2.13

## Notes

Check for the .github/workflows files, because they will need to be updated once you start your deploy


Made with 💚 by João Bebber
