const kue = require('kue');

const queue = kue.createQueue();

queue.on('job enqueue', () => {
  console.log('Job Submitted in the Queue.');
  process.exit(0);
});

const job = queue
  .create('download', {
    text: process.argv[2],
  })
  .save();
