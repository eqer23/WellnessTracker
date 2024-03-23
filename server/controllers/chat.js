const { Message } = require("../models/Message");
const {User} = require("../models/User");

const addMessage = async (req, res, next) => {
  try {
    const { from, to, message } = req.body;
    const data = await Message.create({
      message: { text: message },
      users: { from, to },
      sender: from,
    });
    if (data) {
      console.log("Added Message");
      return res.json({ msg: "Added message" });
    } else {
      console.log("Message failed");
      return res.json({ msg: "Message failed" });
    }
  } catch (e) {
    next(e);
  }
};

const getAllMessages = async (req, res, next) => {
  console.log("getting messages");
  try {
    
    const { from, to } = req.body;
    console.log("from: " + from);
    console.log("to:" + to)
    // const messages = await Message.find({
    //   users: {
    //     $all: [from, to],
    //   },
    // }).sort({ updatedAt: 1 });
    const messages = await Message.findOne({_id: "65feff9a2a754709e209dee2"});

    // const showMessages = messages.map((msg) => {
    //   return {
    //     fromSelf: msg.sender.toString() === from,
    //     message: msg.message.text,
    //   };
    // });
    console.log(messages);
    // res.json(showMessages);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  addMessage,
  getAllMessages,
};
