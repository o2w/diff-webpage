process.argv.forEach( ( argv ) => {
  console.log( argv );
} );
const puppeteer = require( 'puppeteer' );
const looksSame = require( 'looks-same' );
const path = require( 'path' );

function compare() {

  ( async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport( {
      width: 1280,
      height: 3480,
      deviceScaleFactor: 1,
    } );
    await page.goto( process.argv[ 2 ] );
    await page.screenshot( { path: 'before.png' } );
    await page.goto( process.argv[ 3 ] );
    await page.screenshot( { path: 'after.png' } );

    await browser.close();
    console.log( 'browser closed' );

    looksSame.createDiff({
      reference: path.resolve( __dirname, 'before.png' ),
      current: path.resolve( __dirname, 'after.png' ),
      diff: path.resolve( __dirname, 'diff.png' ),
      highlightColor: '#ff00ff', // color to highlight the differences
      strict: false, // strict comparsion
      tolerance: 2.5,
      antialiasingTolerance: 0,
      ignoreAntialiasing: true, // ignore antialising by default
      ignoreCaret: true // ignore caret by default
  }, function(error) {
      console.error(error);

  const exiftool = require('node-exiftool')
  const ep = new exiftool.ExiftoolProcess()
   
  ep
    .open()
    .then(() => ep.writeMetadata('diff.png', {
      all: '', // remove existing tags
      comment: 'Exiftool rules!',
      title: 'Exiftool rules!',
      description: 'https://github.com/puppeteer/puppeteer/blob/v11.0.0/docs/api.md#pagesetviewportviewport',
      'Keywords+': [ 'keywordA', 'keywordB' ],
    }, ['overwrite_original']))
    .then(console.log, console.error)
    .then(() => ep.close())
    .catch(console.error)
  });

  } )();

}

compare();
