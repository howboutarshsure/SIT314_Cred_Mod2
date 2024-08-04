const mqtt = require('mqtt');
const client = mqtt.connect("mqtt://broker.hivemq.com:1883");
const topic = "/forest/smoke";

client.on('connect', () => {
    console.log('Smoke sensor connected');
    setInterval(() => {
        const smoke = Math.floor(Math.random() * 100);
        client.publish(topic, smoke.toString());
        console.log('Smoke Level:', smoke);
    }, 2000);
});

