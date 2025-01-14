const name="hitesh"
const repoCount=50
console.log(name +repoCount + "value");

console.log(`my name is ${name} and my repo count is ${repoCount}`)


const gameName=new String("hitesh-hc")// string declared by object
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('t'))
console.log(gameName.substring(0,4))
console.log(gameName.slice(-8,4))///confusion check video 2:20:00
console.log(gameName.split('-'))



const newSytring ="     adarsh    "
console.log(newSytring.trim())


const url="https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'))
console.log(url.includes('hitesh'))

