// Home
export const trending = (req, res) => res.send("Homepage Videos");

export const search = (req, res) => res.send("Search");
export const see = (req, res) => {
  console.log(req.params);
  return res.send(`Watch Video #${req.params.id}`);
};
export const upload = (req, res) => res.send("Upload");
export const edit = (req, res) => res.send("Edit");
export const videoDelete = (req, res) => res.send("Delete");