/*
 * C2 — Callbacks to async/await
 *
 * Which two calls could have run concurrently, and why the third could not:
 */

function getUser(id, callback) {
  setTimeout(() => callback(null, { id, name: 'Asha', teamId: 7 }), 300);
}

function getTeam(teamId, callback) {
  setTimeout(() => callback(null, { teamId, name: 'Platform' }), 300);
}

function getProjects(teamId, callback) {
  setTimeout(() => callback(null, ['api', 'dashboard']), 300);
}

// ---- original (callback pyramid) ---------------------------------------
// getUser(1, (err, user) => {
//   if (err) return console.error(err);
//   getTeam(user.teamId, (err, team) => {
//     if (err) return console.error(err);
//     getProjects(team.teamId, (err, projects) => {
//       if (err) return console.error(err);
//       console.log(user.name, team.name, projects);
//     });
//   });
// });

// ---- your rewrite: promisify, then async/await with ONE error path ------

// TODO

 async = getUser(1, (err, user) => {
  if (err) return console.error(err);
  await = getTeam(user.teamId, (err, team) => {
    if (err) return console.error(err);
    await =getProjects(team.teamId, (err, projects) => {
      if (err) return console.error(err);
      console.log(user.name, team.name, projects);
    });
  });
});
