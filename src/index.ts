import express from 'express';
import { User } from '../db/models/user';
import { Channel } from '../db/models/channel';
import { Video } from '../db/models/video';
import { setupDB } from '../db/db-setup';

setupDB();

const app = express();
app.use(express.json());

app.get('/user/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.query().findById(id);
    res.status(200).json(user);
  } catch (error) {
    return error;
  }
});
app.get('/video/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const video = await Video.query().findById(id);
    res.status(200).json(video);
  } catch (error) {
    return error;
  }
});
app.get('/channel/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const channel = await Channel.query().findById(id);
    res.status(200).json(channel);
  } catch (error) {
    return error;
  }
});

app.listen(8080, () => {
  console.log('server running');
});
