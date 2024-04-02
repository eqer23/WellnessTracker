const { Message } = require("../models/Message");

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
    console.log("to: " + to);

    let query = {};
    if (from && to) {
      query = {
        $or: [
          {
            $and: [
              { "users.from": { $in: [from] } },
              { "users.to": { $in: [to] } },
            ],
          },
          {
            $and: [
              { "users.from": { $in: [to] } },
              { "users.to": { $in: [from] } },
            ],
          },
        ],
      };
    } else {
      query = { "users.to": { $in: [to] } };
    }

    const messages = await Message.find(query).sort({ updatedAt: 1 });

    const showMessages = messages.map((msg) => {
      return {
        fromSelf: msg.sender.toString() === from,
        message: msg.message.text,
      };
    });
    console.log(showMessages);
    res.json(showMessages);
  } catch (e) {
    next(e);
  }
};

const messageCheck = async (req, res, next) => {
  console.log("getting messages");
  try {
    const { to } = req.body;
    query = { "users.to": { $in: [to] } };

    const messages = await Message.find(query).sort({ updatedAt: 1 });

    const showMessages = messages.map((msg) => {
      return {
        fromWho: msg.users[0].from,
      };
    });
    console.log(showMessages);
    res.json(showMessages);
  } catch (e) {
    next(e);
  }
};

module.exports = {
  addMessage,
  getAllMessages,
  messageCheck
};
