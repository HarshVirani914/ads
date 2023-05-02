import express from 'express';

import { servers } from './constants';
import { getWeightedItems } from './helpers';
import { exec, spawn } from 'child_process';
import SSH from "simple-ssh";
import scp from "node-scp";

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   console.log("req received");
//   res.json(getWeightedItems(servers, 3));
// });

const remote_server = {
  host: 'ec2-54-193-62-110.us-west-1.compute.amazonaws.com',
  username: 'Administrator',
  password: 'T%o-E!YLgMH91a9VfKN48ecvcSAIMo.P'
}

const ssh = new SSH({
  host: 'ec2-54-193-62-110.us-west-1.compute.amazonaws.com',
  user: 'Administrator',
  pass: 'T%o-E!YLgMH91a9VfKN48ecvcSAIMo.P'
});


const local_file_path = 'src/scripts/test.ps1';
const destination_file_path = 'C:\\Users\\Administrator\\Desktop\\thane.ps1';
const link = 'https://youtu.be/09ZDSlN_hlQ';

send_file_using_async_await(local_file_path, destination_file_path);

async function send_file_using_async_await(file_path, destination_path) {
  try {
    const c = await scp(remote_server)
    await c.uploadFile(file_path, destination_path)
      .then(() => {
        ssh.exec(`powershell -File ${destination_file_path} ${link}`, {
          out: function (stdout) { console.log(stdout); },
          err: function (stderr) { console.log(stderr); },
          exit: function (code) { console.log(code); }
        }).start();
      })
      .catch(err => console.log(err))
  } catch (e) {
    console.log(e)
  }
}

// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });

// schedule("*/3 * * * * *", () => {
//   console.log("-------------------------------");
//   console.log("servers", getWeightedItems(servers, 3));
// });
