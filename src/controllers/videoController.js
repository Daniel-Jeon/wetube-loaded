// Home
export const trending = (req, res) => res.render("home");

export const see = (req, res) => res.render("watch");

export const search = (req, res) => res.send("Search");
export const upload = (req, res) => res.send("Upload");
export const edit = (req, res) => res.send("Edit");
export const videoDelete = (req, res) => res.send("Delete");
