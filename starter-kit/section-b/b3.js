/*
 * B3 — The private data isn't private
 *
 * (a) Leak on the way IN:
 *
 * (b) Leak on the way OUT:
 *
 * What `const users` actually protects, and what it does not:
 */

// ---- original (buggy) ------------------------------------------------
function createUserStore(initialUsers = []) {
  const users = initialUsers;

  return {
    add: (user) => {
      users.push(user);
      return users;
    },
    all: () => {
      return users;
    },
  };
}

// ---- your fix ----------------------------------------------------------

function createUserStore(initialUsers = []) {
  // TODO
}

const seed = [{ name: 'Asha',
                 name: 'Ravi'}];
const store = createUserStore(seed)


console.log(seed.length);      

const list = store;
list.length = "";
console.log(store.all().length)
