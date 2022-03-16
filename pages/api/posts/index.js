const posts = [
    {
        user: "oscar",
        username: "OscarDev",
        content: "Quis sint voluptates omnis necessitatibus perferendis officiis. Eveniet dolores dignissimos mollitia ut. Quia qui enim vitae est voluptatem repellendus. Dolor officia dolor qui sunt.",
        image: "https://via.placeholder.com/640x480.png/23e1b2/ffffff?Text=640x480",
    },
    {
        user: "oscar",
        username: "OscarDev",
        content: "Quis sint voluptates omnis necessitatibus perferendis officiis. Eveniet dolores dignissimos mollitia ut. Quia qui enim vitae est voluptatem repellendus. Dolor officia dolor qui sunt.",
        image: "https://via.placeholder.com/640x480.png/23e1b2/ffffff?Text=640x480",
    },
    {
        user: "oscar",
        username: "OscarDev",
        content: "Quis sint voluptates omnis necessitatibus perferendis officiis. Eveniet dolores dignissimos mollitia ut. Quia qui enim vitae est voluptatem repellendus. Dolor officia dolor qui sunt.",
        image: "https://via.placeholder.com/640x480.png/23e1b2/ffffff?Text=640x480",
    },
    {
        user: "oscar",
        username: "OscarDev",
        content: "Quis sint voluptates omnis necessitatibus perferendis officiis. Eveniet dolores dignissimos mollitia ut. Quia qui enim vitae est voluptatem repellendus. Dolor officia dolor qui sunt.",
        image: "https://via.placeholder.com/640x480.png/23e1b2/ffffff?Text=640x480",
    }
]

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'aplication/json')
    res.send(JSON.stringify(posts))
}

