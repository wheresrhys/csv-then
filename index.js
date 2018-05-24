const parse = require('csv-parse')
const fs = require('fs');

const fromFile = (path, options) => new Promise((resolve, reject) => {
	const parser = parse(Object.assign({columns: true}, options));
	const file = fs.createReadStream(path)
	const output = [];

	parser.on('readable', function(){
	  while(record = parser.read()){
	    output.push(record);
	  }
	});

	parser.on('error', function(err){
		reject(err);
	});

	parser.on('finish', function(){
	  resolve(output);
	});

	file.pipe(parser);
})

const fromFiles = (paths, options) => [].concat(
	...Promise.all(paths.map(path => fromFile(path, options)))
)

const fromText = () => console.log('not done yet');

module.exports = {
	fromFile,
	fromFiles,
	fromText
}
