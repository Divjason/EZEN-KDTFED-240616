const videos = [
  {
    id: 1,
    title: "First Video",
    createdAt: "2 minutes ago",
    views: 1,
    comment: 2,
    rating: 5,
  },
  {
    id: 2,
    title: "Second Video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
  {
    id: 3,
    title: "Third Video",
    createdAt: "2 minutes ago",
    views: 59,
    comment: 2,
    rating: 5,
  },
];

export const trending = (req, res) => {
  res.render("home", { pageTitle: "Home", videos });
};
export const search = (req, res) => res.send("Search Video");
export const watch = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("watch", { pageTitle: `Watching ${video.title}`, video });
};
export const getEdit = (req, res) => {
  const { id } = req.params;
  const video = videos[id - 1];
  return res.render("edit", { pageTitle: `Editing ${video.title}`, video });
};

export const postEdit = (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  videos[id - 1].title = title;
  return res.redirect(`/videos/${id}`);
};

export const getUplold = (req, res) => {
  return res.render("upload", { pageTitle: "Upload Video" });
};

export const postUplold = (req, res) => {
  const { title } = req.body;
  const newVideo = {
    id: videos.length + 1,
    title,
    createdAt: "Just Now",
    views: 0,
    comment: 0,
    rating: 0,
  };
  videos.push(newVideo);
  return res.redirect("/");
};

export const deleteVideo = (req, res) => {
  console.log(req.params);
  return res.send("Delete Video");
};
