const raspi = require('raspi');
const I2C = require('raspi-i2c').I2C;

var result;

raspi.init(() => {
  const i2c = new I2C();
  i2c.writeSync(0x40,0xE3);
  result = i2c.readWordSync(0x40);

  console.log(var); // Read one byte from the device at address 18
});
