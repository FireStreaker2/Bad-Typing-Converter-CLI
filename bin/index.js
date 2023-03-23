#! /usr/bin/env node
require('dotenv').config();
const program = require("commander");
const { Configuration, OpenAIApi } = require("openai");
const open = require("open");
const chalk = require("chalk");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

program
    .version("1.0.0")
    .description("Bad Typing Converter, but in your terminal! Built using node.js")
    .parse()
    .name("btcc")
    .option("-v, --version", "Log the current version.")
    .parse(process.argv);

const options = program.opts();

if (options.version) {
    console.log(chalk.green("v1.0.0"));
}

program
    .command("help")
    .description("Log all possible commands")
    .action(() => {
        console.log(chalk.red("BAD TYPING CONVERTER CLI"));
        console.log(chalk.green("CURRENT VERSION: v.1.0.0"));

        console.log(chalk.blue("Commands:"))

        console.log("btcc help");
        console.log("btcc ping");
        console.log("btcc website");
        console.log("btcc convert <phrase>");

    });


program
    .command("ping")
    .description("Makes sure the CLI is actually working")
    .action(() => {
        console.log("Pong!");
    });

program
    .command("website")
    .description("Open the website version, I guess you don't like the CLI?")
    .action(() => {
        
        (async () => {
            console.log(chalk.blue("Opening..."));
            await open("https://converter.firestreaker2.gq");
            console.log(chalk.red("Website has been opened!"));
        })();

    });

program
    .command("convert <phrase>")
    .description("Convert a phrase into something you can actually read! Make sure to add single quotes around your phrase.")
    .action(async (phrase) => {

        const response = await openai.createCompletion({
            model: "text-curie-001",
            prompt: "Can you help clarify my friend's badly typed sentence? " + phrase,
            temperature: 0,
            max_tokens: 100,
            top_p: 1,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
            stop: ["?"],
        });
        
        var clarified = response.data.choices[0].text;
        console.log(chalk.blue("Processing..."));
        console.log(chalk.red("Your clarified phrase is: "));
        console.log(clarified);
    });

program.parse(process.argv);