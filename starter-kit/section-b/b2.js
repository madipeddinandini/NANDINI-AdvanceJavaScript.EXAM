/*
 * B2 — The error handler never fires
 *
 * (a) The bug in one line:
 *
 * (b) Root cause — why does fetch behave this way?
 */

// ---- original (buggy) ------------------------------------------------
// async function getProduct(id) {
//   try {
//     const res = await fetch(`https://dummyjson.com/products/${id}`);
//     const data = await res.json();
//     return data;
//   } catch {
//     console.log('Product not found');
//   }
// }

// ---- your fix (must throw a custom error class, not a string) ----------

// async function getProduct(id) {
//   // TODO
//    try {
//   const res = await fetch(`https://dummyjson.com/products/${id}`);
//    const data = await res.json();
//     return data;
//   } catch {
//     console.log('Product not found');
//   }
// }

// getProduct(999999);

async function getProduct(id) {
  try {
    const res = await fetch(`https://dummyjson.com/products/${id}`);

    if (!res.ok) {
      throw new Error('Product not found');
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log('Product not found');
    return null;
  }
}

getProduct(999999).then((p) => {
  if (p) {
    console.log(p.title.toUpperCase());
  }
});