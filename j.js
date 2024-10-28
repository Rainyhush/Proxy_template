var atotalflow = JSON.parse(aflow)
var totaldata = atotalflow.resources[0].details[1].total

if (totaldata > 1000) {
  var atotal = (totaldata/1024).toFixed(2)
  
} else {
  var atotal = totaldata
}