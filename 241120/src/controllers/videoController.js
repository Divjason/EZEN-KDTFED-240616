export const trending = (req, res) =>
  res.render("home", { pageTitle: "Home", home: "Home" });
export const search = (req, res) => res.send("Search Video");
export const upload = (req, res) => res.send("Upload Video");
export const see = (req, res) => {
  return res.render("watch", { pageTitle: "Watch" });
};
export const edit = (req, res) => {
  return res.send(
    `<!DOCTYPE HTML><head><title>node.js</title></head><body><h1>Edit Video : #${req.params.id}</h1></body>`
  );
};
export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
