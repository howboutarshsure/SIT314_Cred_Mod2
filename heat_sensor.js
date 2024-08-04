const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
const topic = "/forest/heat";

client.on('connect', () => {
    console.log('Heat sensor connected');
    setInterval(() => {
        const heat = Math.floor(Math.random() * 100);
        client.publish(topic, heat.toString());
        console.log('Heat Level:', heat);
    }, 2000);
});
