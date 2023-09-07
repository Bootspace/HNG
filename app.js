const express = require('express');
const moment = require('moment')
const app = express();
const port = process.env.PORT || 2323;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const now = moment();

// const options = {
//   year: 'numeric',
//   month: 'long',
//   weekday: 'long',
//   day:'numeric',
//   hour: '2-digit',
//   minute: '2-digit',
//   second: '2-digit',
//   hour12: false, // Use 24-hour format
//   timeZoneName: 'short'
// };

// const formattedDate = new Intl.DateTimeFormat('en-US', options).format(currentTime);
// // console.log("Formatted Date and Time: " + formattedDate);
// console.log(typeof(formattedDate));
// const datas = {formattedDate};
const day = now.format('dddd');
const utcTime = now.utc().format();
const file_url = 'https://github.com/Bootspace/HNG/blob/master/app.js';
const github_repo_url = 'https://github.com/Bootspace/HNG'

app.get('/api/date', (req, res) => {
  const { slack_name, track } = req.query;
  res.status(200).json({
    slack_name: req.query.slack_name,
    current_day: day,
    utc_time: utcTime,
    track: req.query.track,
    github_file_url: file_url,
    github_repo_url: github_repo_url,
    status_code: 200
    });
});

app.listen(port, () => console.log(`Server running on Port:${port}`));