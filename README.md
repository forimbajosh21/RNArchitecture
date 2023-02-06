# RN Architecture
Project is developed in React Native typescript together with [redux-toolkit](https://redux-toolkit.js.org/) for state management & [rtk-query](https://redux-toolkit.js.org/rtk-query/overview) for API functions.

## Environment
Project uses [react native config](https://github.com/luggit/react-native-config) to setup different environments.

## Running this project
Make sure to have an emulator (iOS or Android) started.

run `yarn start` in a terminal window. Wait until the graph is done.

run `yarn android` or `yarn ios` in a second terminal window. Leaving the initial window open.

## Installation
> :info: requirements
- Git
- Node
- Watchman
- Yarn
- Android
  - JDK
  - Android Studio
- iOS
  - Ruby
  - Xcode
  - Cocoapods

- follow the official setup guide from the React Native docs [Setting up the development environment · React Native ](https://reactnative.dev/docs/environment-setup)
- clone the project repo to your machine
```
#clone
git clone {project-link}

#navigate to the project
cd RNArchitecture

#install packages and dependencies
yarn

#run metro bundler
yarn start

#open new terminal and run to emulator of choice
yarn android|ios
```

## Different environments
Save config for different environments in different files: .env.staging, .env.production, etc.

By default react-native-config will read from .env, but you can change it when building or releasing your app.

The simplest approach is to tell it what file to read with an environment variable, like:

```
$ ENVFILE=.env.staging yarn ios|android           # bash
$ SET ENVFILE=.env.staging && yarn ios|android    # windows
$ env:ENVFILE=".env.staging"; yarn ios|android    # powershell
```

## Folder Structure
| Folders | Contents |
| ------ | ------ |
| android | Contains all bundled files and configurations related to android _auto generated_ |
| ios | Contains all bundled files and configurations related to ios _auto generated_ |
| src | Contains all necessary files for the app |
| src/app | Contains the state management of the app |
| src/common | Contains all common folders and files used thru out the app, such as *assets, components, models, themes and etc* |
| src/common/components | Contains `base \| features \| layouts` derive from [Atomic design](ttps://paulonteri.com/thoughts/atomic-design-react) <br /> *base*: considered the smallest possible components, can live on their own <br /> *features*: consist of base components with/without logic <br /> *layouts*: Container for custom layouts  |
| src/routes | Contains application routing |
| src/screens | Contains application screens |

## State management
Uses [redux-toolkit](https://redux-toolkit.js.org/) for its state management. This is the overview of the states we have in the app.

## API functions
Uses [rtk-query](https://redux-toolkit.js.org/rtk-query/overview) for its API functions. It offers request caching and direct integration with our state management. Under the hood, we are using the Fetch API for our endpoints.

Our API’s are located at _src/app/services_. api.ts file holds the setup

This is how to define an endpoint with rtk-query
api variable came from the setup file which is api.ts

`GET METHOD`
```
api.injectEndpoints({
  endpoints: builder => ({
    RNArchitectureEndpoint: builder.query<any, any>({
      query: () => ({
        url: 'endpoint',
      }),
    }),
  }),
});
```
- builder.query represents the GET method

`POST|PATCH|DELETE METHOD`
```
const auditApi = api.injectEndpoints({
  endpoints: builder => ({
    RNArchitectureEndpoint: builder.mutation<any, RNArchitectureEndpointParameters>(
      {
        query: params => ({
          url: 'endpoint',
          method: 'POST',
          body: params,
        }),
      },
    ),
  }),
});
```
- builder.mutation represents POST|PATCH|DELETE method