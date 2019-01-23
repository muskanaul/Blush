<h1 align="center"><strong>Boilerplate for a React Native Application</strong></h1>

<br />

![](https://imgur.com/lIi4YrZ.png)

<div align="center"><strong>🚀 Bootstrap your React Native app within seconds</strong></div>
<div align="center">Basic starter kit for a React Native with Shoutem.</div>

## Features

- **Structure:** Basic folder structure
- **Shoutem:** Includes beautiful components

## Requirements

You need to have the [React Native](https://github.com/facebook/react-native) installed to bootstrap your React Native application `react-native init`, [Expo](https://github.com/expo/expo) to scaffold Expo application `prisma deploy` and [Yarn](https://yarnpkg.com/lang/en/) to install npm packages:

```sh
npm install -g react-native exp yarn
```

## Getting started

```sh
# 1. Clone the project
git clone https://github.com/inspired-solutions/react-native-shoutem-starter.git

# 2. Navigate to the new project
cd react-native-shoutem-starter

# 3. Install npm packages
yarn install

# 4. Start server
exp start
```

## Documentation

### Commands

* `react-native <subcommand>` gives access to local version of React Native CLI (e.g. `react-native run-android`)
* `exp <subcommand>` gives access to local version of Expo CLI (e.g. `exp start`)

> **Note**: We recommend that you're use `yarn` to install local packages and `exp` to insted of `react-native` to run application or [Expo XDE](https://docs.expo.io/versions/latest/introduction/xde-tour) 

### Project structure

| File name 　　　　　　　　　　　　　　| Description 　　　　　　　　<br><br>| 
| :--  | :--         |
| `└── assets/ `  | _Contains all assets of the application_ |
| `　　├── fonts/ ` | _Contains all fonts of the application_ |
| `　　├── images/ ` | _Contains all images of the application_ |
| `└── components/ `  | _Contains all components of the application_ |
| `└── constants/ `  | _Contains all constants of the application_ |
| `└── navigation/ `  | _Contains all routes component of the application_ |
| `└── screens/ `  | _Contains all screens of the application_ |
| `├── .babelrc`| Use this file to configure your babel transpiler |
| `├── .editorconfig`| Use this file to configure your editor |
| `├── .gitignore`| Use this file to ignore some files in git |
| `├── .prettierrc`| Use this file to configure your files formatter |
| `├── .watchmanconfig`| Use this file to configure your watchman settings |
| `├── App.js`| Main file |
| `├── app.json`| Expo config file |
| `├── package.json`| Package file |
| `├── README.md`| Main Documentaion |
| `├── yarn.lock`| Lock file generate by Yarn |

## Contributing

The react-native-shoutem-starter are maintained by the Inspired Solutions.

Your feedback is **very helpful**, please share your opinion and thoughts! If you have any questions or want to contribute yourself, join the [`#react-native-shoutem-starter`](https://inspired-solutions.slack.com/messages/react-native-shoutem-stater) channel on our [Slack](https://inspired-solutions.slack.com/).
