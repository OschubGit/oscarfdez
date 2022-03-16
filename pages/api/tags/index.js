const tags = [
    {   
        id: 0,
        tag: "Css",
    },
    {   
        id: 1,
        tag: "Js",
    },
    {   
        id: 2,
        tag: "Html",
    },
    {   
        id: 3,
        tag: "React",
    },
]

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'aplication/json')
    res.send(JSON.stringify(tags))
}

