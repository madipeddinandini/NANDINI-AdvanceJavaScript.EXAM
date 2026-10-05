/*
 * B1 — The array comes back empty
 *
 * (a) The bug in one line:
 *
 * (b) Root cause (2-3 lines):
 *
 * Sequential or concurrent, and why:
 */

// ---- original (buggy) ------------------------------------------------
// async function loadUsers(ids) {
//   const users = [];

//   ids.forEach(async (id) => {
//     const res = await fetch(`https://dummyjson.com/users/${id}`);
//     users.push(await res.json());
// //   });

// //   return users;
// // }

// // ---- your fix ----------------------------------------------------------

async function loadUsers(ids) {
  // TODO
  const promises = ids.map(async (id) => {
    const res = await fetch(`https://dummyjson.com/users${id}`);
   return await res.json;
  
  });

  return await Promise.all(promises);
}

loadUsers([1, 2, 3]).then((user) => console.log(user.length));




// async function loadUsers(ids) {
//   const promises = ids.map(async (id) => {
//     const res = await fetch(`https://dummyjson.com/users/${id}`);
//     return await res.json();
//   });

//   return await Promise.all(promises);
// }

// loadUsers([1, 2, 3]).then((users) => console.log(users.length));