var fs = require('fs')
var mapshaper = require('mapshaper')

// mapshaper.runCommands('-i _data/QPF168hr_Day1-7_latest/97e2200.shp -proj +proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=37.5 +lon_0=-96 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs -o _out/ format=svg', function (results, err) {console.log(results);});

var command = '-i _data/QPF168hr_Day1-7_latest/97e2200.shp -proj +proj=aea +lat_1=29.5 +lat_2=45.5 +lat_0=37.5 +lon_0=-96 +x_0=0 +y_0=0 +datum=NAD83 +units=m +no_defs -o _out/ format=svg'

var inputs = {}
inputs.filename = '_data/QPF168hr_Day1-7_latest/97e2200.shp'

mapshaper.applyCommands(command, inputs, function done (err, out){
  if (err) {
    console.log(err);
  }
  else {
    fs.writeFile('97e2200.svg', out['_out/97e2200.svg'], 'utf8')
  }
})
