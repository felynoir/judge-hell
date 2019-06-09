import kue from 'kue';

const queue = kue.createQueue();

queue.on('ready', () => {
  console.info('Queue is ready!');
});

queue.on('error', err => {
  console.error('There was an error in the main queue!');
  console.error(err);
  console.error(err.stack);
});

// Set up UI
kue.app.listen(process.env.KUE_PORT);
kue.app.set('title', 'Kue');

export const createSubmission = (url, inputs, outputs, done) => {
  const job = queue
    .create('submissions', {
      url,
      inputs,
      outputs,
    })
    .save(err => {
      if (err) {
        console.error(err);
        done(err);
      }
      if (!err) {
        done();
      }
    });
};

queue.process('submissions', function(job, done) {
  console.log(job.data);
  done();
});
