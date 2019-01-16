import webpack from 'webpack';
import webconfig from '../webpack.config.prod';
import chalk from 'chalk';

webpack(webconfig).run((err, stats) => {
    if(err){
        console.log(chalk.red(err));
        return 1;
    }
    return 0;
});