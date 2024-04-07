const socketIo = require("socket.io");
const express = require("express");
const mongoConnection = require('./db.js')
const { getDocument,updateDocument } = require("./controller.js");

const app = express();
const PORT = 9000;

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const io = new socketIo.Server(server, {
  cors: {
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
  },
});

io.on('connection', socket => {
    socket.on('get-document', async  documentId => {

       const document = await getDocument(documentId);
       console.log(document); 

        socket.join(documentId);
        socket.emit('load-document', document.data);

        socket.on('send-changes', delta => {
            socket.broadcast.to(documentId).emit('receive-changes', delta);
        })

        socket.on('save-document' , async data => {
            await updateDocument(documentId , data);
        })
    })
});
