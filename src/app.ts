import express from 'express';

import { servers } from './constants';
import { getWeightedItems } from './helpers';
import { exec, spawn } from 'child_process';
import SSH from "simple-ssh";
import scp from "node-scp";
import { NodeSSH } from "node-ssh";

const app = express();
const port = 3000;

// app.get("/", (req, res) => {
//   console.log("req received");
//   res.json(getWeightedItems(servers, 3));
// });

// const remote_server = {
//   host: 'ec2-54-193-62-110.us-west-1.compute.amazonaws.com',
//   username: 'Administrator',
//   password: 'T%o-E!YLgMH91a9VfKN48ecvcSAIMo.P'
// }

// const ssh = new SSH({
//   host: 'ec2-54-193-62-110.us-west-1.compute.amazonaws.com',
//   user: 'Administrator',
//   pass: 'T%o-E!YLgMH91a9VfKN48ecvcSAIMo.P'
// });


const local_file_path = 'src/scripts/test.ps1';
const destination_file_path = 'C:\\Users\\Administrator\\Desktop\\thane.ps1';
const link = "https://www.google.com/"

// sendFile(local_file_path, destination_file_path);

// async function sendFile(file_path: string, destination_path: string) {
//   try {
//     const c = await scp(remote_server)
//     await c.uploadFile(file_path, destination_path)
//       .then(() => {
//         ssh.exec(`powershell Get-Date`, {
//           out: function (stdout) { console.log(stdout); },
//           err: function (stderr) { console.log(stderr); },
//           exit: function (code) { console.log(code); }
//         }).start();
//       })
//       .catch(err => console.log(err))
//   } catch (e) {
//     console.log(e)
//   }
// }

const nodeSSH = new NodeSSH();

const sshConnection = nodeSSH.connect({
  host: 'ec2-54-193-62-110.us-west-1.compute.amazonaws.com',
  username: 'Administrator',
  password: 'T%o-E!YLgMH91a9VfKN48ecvcSAIMo.P'
})

sshConnection.then(() => {
  nodeSSH.putFile(local_file_path, destination_file_path).then(() => {
    console.log('The File thing is done')
  }, (error) => {
    console.log('Somethings wrong', error)
  })
})

sshConnection.then(() => {
  nodeSSH.execCommand(`powershell -File ${destination_file_path} ${link}`)
    .then((result) => {
      console.log(`result.stdout = ${result.stdout}`)
      console.log(`result.stderr = ${result.stderr}`)
    })
})
// app.listen(port, () => {
//   return console.log(`Express is listening at http://localhost:${port}`);
// });

// schedule("*/3 * * * * *", () => {
//   console.log("-------------------------------");
//   console.log("servers", getWeightedItems(servers, 3));
// });
