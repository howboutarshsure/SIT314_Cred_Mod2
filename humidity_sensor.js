const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
const topic = "/forest/humidity";

client.on('connect', () => {
    console.log('Humidity sensor connected');
    setInterval(() => {
        const humidity = Math.floor(Math.random() * 100);
        client.publish(topic, humidity.toString());
        console.log('Humidity Level:', humidity);
    }, 2000);
});

