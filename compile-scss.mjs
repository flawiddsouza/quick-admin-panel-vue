import path from 'path'
import sass from 'sass'
import { writeFileSync } from 'fs'
import chalk from 'chalk'

const __dirname = import.meta.url.split('/').slice(2,-1).join('/')

// outputStyle options are expanded & compressed
function generateCSSFromSCSS(inputFilePath, outputFilePath, outputStyle='expanded') {
    const sassRender = sass.renderSync({
        file: inputFilePath,
        outputStyle: outputStyle
    })

    writeFileSync(outputFilePath, sassRender.css)

    const relativeOutputFilePath = outputFilePath.replace(__dirname + '/', '')
    const outputFilename = path.basename(relativeOutputFilePath)
    const relativeOutputFilePathWithoutFilename = relativeOutputFilePath.replace(outputFilename, '')

    console.log(chalk.gray(chalk.white.dim(relativeOutputFilePathWithoutFilename)) + chalk.magenta(outputFilename))
}

generateCSSFromSCSS(path.resolve(__dirname, './src/sass/buttons-style-1.scss'), path.resolve(__dirname, './dist/buttons-style-1.css'))
generateCSSFromSCSS(path.resolve(__dirname, './src/sass/buttons-style-1-small.scss'), path.resolve(__dirname, './dist/buttons-style-1-small.css'))
