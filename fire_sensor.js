const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
const topic = "/forest/fire";

client.on('connect', () => {
    console.log('Fire sensor connected');
    setInterval(() => {
        const fire = Math.floor(Math.random() * 100);
        client.publish(topic, fire.toString());
        console.log('Fire Level:', fire);
    }, 2000);
});

