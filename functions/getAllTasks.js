exports = function getAllTasks({ query, headers, body}, response) {
    const tasks = context.services
    	.get("mongodb-atlas")
    	.db("kanban")
    	.collection("tasks")
    	.find({})
        .toArray()

    return tasks
};