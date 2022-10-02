
<h1 align='center'>Quiz-app</h1>

## Light mode:

![Screenshot from 2021-10-03 14-59-41](https://user-images.githubusercontent.com/58719884/135747992-942328a0-3cf4-45eb-906e-d862d2b98c09.png)

## Dark mode:
![Screenshot from 2021-10-03 14-58-](https://user-images.githubusercontent.com/58719884/135747965-89c60f7b-0cb7-400f-9775-54e6f899b8b2.png)

A quiz app build using OPENTB api and Javascript.

[view in codesandbox](https://codesandbox.io/p/github/johnbabu021/quiz-app/csb-2tgr43/draft/fervent-bogdan?file=%2FDockerfile&selection=%5B%7B%22endColumn%22%3A25%2C%22endLineNumber%22%3A1%2C%22startColumn%22%3A25%2C%22startLineNumber%22%3A1%7D%5D&workspace=%257B%2522activeFileId%2522%253A%2522cl8r7slhu000glpeodarjeaat%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%252C%2522%252Fscripts.js%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A3000%252C%2522url%2522%253A%25222tgr43-3000.preview.csb.app%2522%252C%2522key%2522%253A%2522cl8r7vur100ei2v6vay7ij72q%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522cl8r7u6ep000rlpeobbiie5l1%2522%252C%2522key%2522%253A%2522cl8r7u67x00882v6vofmv2r0u%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A8080%252C%2522key%2522%253A%2522cl8r7sv58000k2v6vfwapg8q8%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)


Limited resource application

## Specifications

    * Dark and light theme
    * Easy medium hard levels
    * Questions based on different topics

## Docker Instructions

If you haven't installed [Docker](https://www.docker.com/products/docker-desktop) already, then you can get it from [here](https://www.docker.com/products/docker-desktop). After installing it, create an account in Docker and copy the username.

To run the app in a docker container, follow the given steps:

- Clone this repository

  ```bash
  git clone https://github.com/{your USER_NAME}/quiz-app.git
  ```

- Navigate to the project directory
  ```bash
  cd quiz-app
  ```
- Replace <strong>USERNAME</strong> with your own username and build the docker image
  ```bash
  docker build -t <USERNAME>/quiz-app:1.0 .
  ```
- Open up the terminal at the project directory, replace <strong>USERNAME</strong> with your own username and run the following command:
  ```bash
  docker run -p 8080:8080 <USERNAME>/quiz-app:1.0
  ```
- Now the project is running in local server on port 8080.  You can see the app running by visiting `localhost:8080` from your browser

# Doubts

- Send a mail to the johnbabu021@gmail.com
- Or by creating [wiki](https://github.com/johnbabu021/quiz-app/wiki)

# Contribution

- Open for contribution
- To contribute:
  - Fork the repo
  - Clone the repo
  - Make your changes
  - Commit and push the changes
  - Generate a Pull Request
  - on commit name must be like #issue number

### Sit back and relax while your PR gets merged

### Don't just fork start it too

### Smash the star button

### Leave a star if you liked the app!
### Leave a star if you liked the app!

![buy-me-a-coffee](https://www.buymeacoffee.com/assets/img/guidelines/download-assets-2.svg)


