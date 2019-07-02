module.exports = () => {
    console.log(`process.argv -- forEach`);
    process.argv.slice(2).forEach((val, index) => {
        console.log(`[${index}]: ${val}`);
    });
}