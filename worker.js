import kue from 'kue';
import axios from 'axios';

const queue = kue.createQueue();

queue.process('download', (job, done) => {
  console.log(`Working on job ${job.id}`);
  getText(job.data, done);
});

const getText = async (payload, done) => {
  const { data } = await axios.post('http://localhost:3000/something', {
    payload,
  });
  console.log(data);
  done();
};
