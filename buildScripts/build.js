import webpack from 'webpack';
import webconfig from '../webpack.config.prod';
import chalk from 'chalk';

webpack(webconfig).run((err) => {
    if(err){
        console.log(chalk.red(err)); //eslint-disable-line no-console
        return 1;
    }
    return 0;
}); 