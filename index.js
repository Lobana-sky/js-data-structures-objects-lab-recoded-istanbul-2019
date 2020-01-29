// Write your solution in this file!

var driver= {a:'20', b: '30'}
function updateDriverWithKeyAndValue(driver, key, value)
{
  const newDriver=Object.assign({}, driver);
  newDriver[key]=value;
  return newDriver;
}

 function destructivelyUpdateDriverWithKeyAndValue(driver, key, value)
 {
   driver[key]=value;
   return driver;
 }
 
 function deleteFromDriverByKey(driver, key)
 {
   delete driver[key];
   return driver;
 }
 
 function destructivelyDeleteFromDriverByKey(driver, key)
 {
   
 }
 