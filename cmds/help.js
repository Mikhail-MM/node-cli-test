// ASCII KeyPair Object
const menus = {
    main: `
      outside [command] <options>
  
      today .............. show weather for today
      version ............ show package version
      help ............... show help menu for a command`,
  
    today: `
      outside today <options>
  
      --location, -l ..... the location to use`,
  
    forecast: `
      outside forecast <options>
  
      --location, -l ..... the location to use`,
  }
module.exports = (args) => {
    // console.log(`args._:`); console.log(args._);
    // console.log(args._[0]);

    const subCmd = args._[0] === 'help'
      ? args._[1]
      : args._[0]
      
      // Seems to always be true / [1]....
      console.log(args._);
  
    
    console.log(menus[subCmd] || menus.main)
}