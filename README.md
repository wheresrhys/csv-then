# csv-then

Really simple, promise-based csv file reader

2 methods

.fromFile(path, options)

.fromFiles(paths, options)

Returns a promise for the csv (or multiple csvs concatenated intoa single array if using fromFiles)

options are anythng compatible with csv-parse http://csv.adaltas.com/parse/

Sorry for the poor docs - very quick hack to scratch an itch, which will become
better tested, documented if people start to use it
