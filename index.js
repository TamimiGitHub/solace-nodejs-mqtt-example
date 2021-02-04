var mqtt = require('mqtt')

if(process.argv.length != 5 ) throw new Error("invalid num arguments!");

var host = process.argv[2]
var config = {
    username: process.argv[3],
    password: process.argv[4],
}

var topics = [
    `iot/${config.username}/messages`,
]

var client  = mqtt.connect(host, config)

client.on('connect', () => {
    console.log("Connected")
    topics.forEach( (topic) => {
        console.log("Subscribing to topic: ", topic)
        client.subscribe(topic)
    })
})

client.on('message', (topic, message) => {
    console.log("Received message on Topic: ", topic,"\nMessage:", message.toString())
})

setInterval(() => {
  client.publish(`iot/${config.username}/heartbeat`, 'ping')
  console.log("send ping")
}, 1000)