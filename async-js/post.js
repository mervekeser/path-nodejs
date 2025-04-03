const posts = [
  {
    title: "Title 1",
    description: "Description 1",
  },
];

function getPost() {
  return new Promise((resolve) => {
    console.log("Posts");
    posts.map((post) => {
      console.log(post.title);
    });
    resolve();
  });
}

function addPost(newPost) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(newPost);
      console.log("A new post was added");

      resolve(posts);

      //reject("an error");
    }, 2000);
  });
}

const newPost = { title: "Title 2", description: "Description 2" };

async function showPost() {
  try {
    await getPost();
    await addPost(newPost);
    await getPost();
  } catch (error) {
    console.log(error);
  }
}

showPost();
