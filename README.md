# Network API
![MIT License](https://img.shields.io/badge/License-MIT-green) 
## Description

Description

## 📁 Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Installation

Notes: 
- This program runs on port 3001 by default. Ensure that this port is open, or add a .env file to specify the PORT variable. 
- This program requires Node and MongoDB to be installed on your machine.

Resources:
- [Node Installation](https://nodejs.org/en/download/package-manager)
- [MongoDB Installation](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb)

```shell
# Step 1: clone this repository
git clone https://github.com/Dan-Swarts/NetworkAPI.git

# Step 2: install dependencies:
npm i

# Step 3: run the program:
npm run start

```

## Usage

User routes:
```shell
- GET localhost:3001/api/users/ 
- GET localhost:3001/api/users/{userID}
- POST localhost:3001/api/users/
- POST localhost:3001/api/users/{userID}
- DELETE localhost:3001/api/users/{userID}
- POST localhost:3001/api/users/friends/{userID}
- DELETE localhost:3001/api/users/friends/{userID}
```

![Add a screenshot](./relative/path/to/img.jpg?raw=true)

- step 2

![Add a screenshot](./relative/path/to/img.jpg?raw=true)

- step 3

![Add a screenshot](./relative/path/to/img.jpg?raw=true)


## Contributing

> [!IMPORTANT]
> Whether you have feedback on features, have encountered any bugs, or have suggestions for enhancements, we're eager to hear from you. Your insights help us make the Network API library more robust and user-friendly.

Please feel free to contribute by [submitting an issue](https://github.com/Dan-Swarts/NetworkAPI) or [joining the discussions](https://github.com/Dan-Swarts/NetworkAPI). Each contribution helps us grow and improve.

We appreciate your support and look forward to making our product even better with your help!

If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.