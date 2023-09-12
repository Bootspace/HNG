// const express = require('express');
// const moment = require('moment');

// const router = express.Router();

// router.get('/api', (req, res) => {
//   const now = moment();
//   const day = now.format('dddd');
//   // const utcTime = now.utc().format();
//   const file_url = 'https://github.com/Bootspace/HNG/blob/master/app.js';
//   const github_repo_url = 'https://github.com/Bootspace/HNG'

//   const { slack_name, track } = req.query;
//   res.status(200).json({
//     slack_name: req.query.slack_name,
//     current_day: day,
//     utc_time: now.utc().format(),
//     track: req.query.track,
//     github_file_url: file_url,
//     github_repo_url: github_repo_url,
//     status_code: 200
//     });
// });

// module.exports = router;