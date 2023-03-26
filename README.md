![Bad-Typing-Converter-CLI](https://socialify.git.ci/FireStreaker2/Bad-Typing-Converter-CLI/image?description=1&font=Bitter&forks=1&issues=1&logo=https%3A%2F%2Fconverter.firestreaker2.gq%2Ffavicon.png&name=1&owner=1&pattern=Formal%20Invitation&pulls=1&stargazers=1&theme=Dark)

# Setup

## Prerequisites
* Node.js
* Git (optional)
* a brain
* An OpenAI API Key

## Method 1
```bash
$ npm i bad-typing-converter-cli
```
Go to wherever you downloaded this, for example ``./node_modules/bad-typing-converter-cli/``
```bash
$ cp .env.example .env
```
Open up ``.env``, and paste in your OpenAI API key. Save, and close. You can now use ``btcc`` anywhere in your terminal!

## Method 2
```bash
$ git clone https://github.com/FireStreaker2/Bad-Typing-Converter-CLI.git
$ cd Bad-Typing-Converter-CLI
$ npm i
$ npm i -g
$ btcc ping
```
If it replies with ``Pong!``, proceed to the next step. If it doesn't, you did something wrong lmao
```bash
$ cp .env.example .env
```
Open and paste your OpenAI API key into the .env file, then save and close. Now, return to your terminal.
```bash
$ btcc ping
```

<mark>PLEASE NOTE THAT IF YOU DO NOT RUN ``npm i -g`` AFTER THE OTHER STEPS IN METHOD 2 YOU WILL NOT BE ABLE TO USE IT WITH ``btcc``</mark>

# Commands
You can run ``btcc`` or ``btcc help`` to display all the current commands, but they'll also be listed below.

```
btcc - displays help
btcc help - also displays the help message
btcc ping - pings something (idk what it pings) to make sure the cli is working
btcc website - open the website version of this
btcc convert <phrase> - the actual converting part. just do btcc convert + your phrase, and it'll convert after a while. please note that a) you need to have your api key configured, and b) if your phrase is more than one word, you have to surround it in double quotes. (ex. ``btcc convert "hello today i wnt to ues discord")
```

# FAQ
Q: Why did you make this?   
A: idk i wanted to make a cli for some reason

Q: whats the purpose of this?   
A: so you can quickly translate your friends badly typed sentence i guess    

Q: Will this be maintained?   
A: probably not lmao     

Q: This doesn't work for me, what should I do?    
A: make sure you followed the steps, if it still doesnt work you can <a href="https://github.com/FireStreaker2/Bad-Typing-Converter-CLI/issues/new/choose">open an issue</a> and ill help you from there    

Q: You suck at coding    
A: i know

# Contributing
If you would like to contribute, you can <a href="https://github.com/FireStreaker2/Bad-Typing-Converter-CLI/fork">fork the repo</a> and <a href="https://github.com/FireStreaker2/Bad-Typing-Converter-CLI/compare">make a PR</a>, or contact me via email @ ``suggestions@firestreaker2.gq``

# Credits
<a href="https://openai.com/api/">OpenAI API</a>    
<a href="https://www.npmjs.com/package/commander">Commander</a>  
<a href="https://www.npmjs.com/package/bad-typing-converter-cli">NPM</a>

# License
<a href="https://github.com/FireStreaker2/Bad-Typing-Converter-CLI/blob/main/LICENSE">MIT</a>
