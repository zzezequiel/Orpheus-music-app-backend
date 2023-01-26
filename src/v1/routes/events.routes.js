const express = require("express")
const{
    getAllEvents,
    getEventById,
    postEvent,
    patchEvent,
    deleteEvent
} = require("../../controllers/events.controller")
const { checkJwt } = require("../../middlewares/checkJwt.middleware")

const router = express.Router()
router
    .get("/",        getAllEvents) //When i put the check i cant fetch the events. its a diferent token? wtf
    .get("/:id",    checkJwt, getEventById)
    .post("/",      checkJwt, postEvent)
    .patch("/:id",   patchEvent)
    .delete("/:id", checkJwt, deleteEvent)

module.exports = router;
    