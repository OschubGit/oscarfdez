const courses = [
    {   
        id: 0,
        course: "Domestika",
    },
    {   
        id: 1,
        course: "Midudev",
    },
    {   
        id: 2,
        course: "Platzi",
    },
    {   
        id: 3,
        course: "Bluuweb",
    },
]

export default (req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'aplication/json')
    res.send(JSON.stringify(courses))
}

