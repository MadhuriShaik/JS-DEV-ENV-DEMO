import jsf from 'json-schema-faker';
import {schema} from './mockDataSchema'; //eslint-disable-line import/no-unresolved
import fs from 'fs';
import chalk from 'chalk';

const json = JSON.stringify(jsf(schema));

fs.writeFile("./src/api/db.json", json, (err) =>
{
    if(err)
    {
        return console.log(chalk.red(err)); //eslint-disable-line no-console
    } else{
        console.log(chalk.green("Mock data genearated.")); //eslint-disable-line no-console
    }
});