# dcu
A HOF based project for the Direct Communications Unit to enable citizens to send in general enquiries to the Home Office

# Contents

1. [Install & Run](#install-and-run)
    - [Environment variables](#env-vars)
    - [Install & Run on local machine](#install-and-run-on-local-machine)

2. [Email functionality](#email-functionality)

3. [Testing](#testing)
    - [Linting Tests](#lint-tests)




## Install & Run <a name="install-and-run"></a>
The application can either be run on your local machine or built inside a docker container using [docker-compose](https://docs.docker.com/compose/)

### Environment variables <a name="env-vars"></a>

You'll need to set the following env vars to run the application:

```
NOTIFY_KEY                     | Your GOV.UK notify key
NOTIFY_TEMPLATE                | GOV.UK notify template ID for user confirmation email
CASEWORKER_EMAIL               | Caseworker email
```

### Install & Run on local machine <a name="install-and-run-on-local-machine"></a>
Install the dependencies and build the project resources
```bash
$ npm install
```

Install [Redis](https://redis.io/) and make sure you have a running redis instance in the background.

```bash
$ redis-server
```

Start the server in development mode
```bash
$ yarn start:dev
```

Then go to http://localhost:8080

## Email functionality  <a name="email-functionality"></a>

We use [Gov Notify](https://www.notifications.service.gov.uk/sign-in) to send emails:

The DCU template in the Home Office Forms NotProd account is used testing.

In order to run the email functionality, you'll need the API Gov Notify Key called, `NOTIFY_KEY` for the dcu test service. Do NOT use a Production key.

This can be obtained from a developer in the team.  It is recommended to have a `.env` file with the environment variable and then run the app like so:

```bash
$ yarn devenv
```

## Testing  <a name="testing"></a>

### Linting tests  <a name="lint-tests"></a>
You can run linting tests using the command below:

```bash
$ yarn test:lint
```