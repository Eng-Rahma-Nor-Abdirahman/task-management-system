const posts = [
    { id: 1, name: "RAHMA" },
    { id: 2, name: "Rimaa" },
    { id: 3, name: "Ruuun" }
];


// GET ALL POSTS
export const getPosts = (req, res, next) => {
    try {
        res.json(posts);
    } catch (err) {
        next(err);
    }
};


// GET SINGLE POST BY ID
export const getPostInfo = (req, res, next) => {
    try {
        const post = posts.find(p => p.id == req.params.id);

        if (!post) {
            const err = new Error("Post not found");
            err.statusCode = 404;
            return next(err);
        }

        res.json(post);

    } catch (err) {
        next(err);
    }
};