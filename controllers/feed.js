exports.getPosts = (request, response, next) => {
    response.status(200).json({
        posts: [{
            title: 'first Post',
            content: 'This is blog first post!'
        }]
    });
}

exports.createPost = (request, response, next) => {
    const title = request.body.title;
    const content = request.body.content;

    response.status(201).json({
        message: 'Post created successfully!',
        post: { id: new Date().toISOString(), title: title, content: content }
    });
}