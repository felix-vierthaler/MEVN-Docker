const router = require('express').Router();

const Todo = require("../models/Todo")

router.get('/todos', async (req,res) => {
    const todos = await Todo.find()
    res.send(todos)
});

router.get("/todos/:id", async (req, res) => {
    try{
        const todo = await Todo.findOne({_id: req.params.id})
        res.send(todo)
    }catch{
        res.status(404)
        res.send({error: "doesn't exist!"})
    }
})

router.post('/todos', async (req,res) => {
    const todo = new Todo({
        title: req.body.title,
        description: req.body.description
    })
    await todo.save()
    res.send(todo)
});

router.patch("/todos/:id", async (req,res) => {
    try {
        const todo = await Todo.findOne({_id: req.params.id})
    
        if (req.body.title) {
            todo.title = req.body.title
        }
    
        if (req.body.description) {
            todo.description = req.body.description
        }
    
        await todo.save()
        res.send(todo)
    } catch {
        res.status(404)
        res.send({ error: "doesn't exist!" })
    }
})

router.delete("/todos/:id", async (req, res) => {
    try{
        await Todo.deleteOne({_id: req.params.id})
        res.status(204).send()
    }catch{
        res.status(404)
        res.send({ error: "Post doesn't exist!" })
    }
})

module.exports = router;