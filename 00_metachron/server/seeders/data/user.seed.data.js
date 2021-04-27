const uuid = require("uuid");

let userSeedData = [
  {
    "uuid": uuid.v4(),
    "username": "max",
    "password": "maxpwd",
    "pic_path": "https://admin.egofm.de/content/cache/blog/11852/e1c/31f58ba0b9dc103d/moonpie_c_01.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 1,
    "userdata_id": 1
  },
  {
    "uuid": uuid.v4(),
    "username": "frida",
    "password": "fridapwd",
    "pic_path": "https://images.freeimages.com/images/premium/previews/6040/60405114-cartoon-coach-smiling.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 2,
    "userdata_id": 2
  },
  {
    "uuid": uuid.v4(),
    "username": "olf",
    "password": "olfpwd",
    "pic_path": "https://images.freeimages.com/images/premium/previews/6040/60405114-cartoon-coach-smiling.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 2,
    "userdata_id": 3
  },
  {
    "uuid": uuid.v4(),
    "username": "carla",
    "password": "carlapwd",
    "pic_path": "https://images.freeimages.com/images/premium/previews/6040/60405114-cartoon-coach-smiling.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 2,
    "userdata_id": 4
  },
  {
    "uuid": uuid.v4(),
    "username": "sven",
    "password": "svenpwd",
    "pic_path": "https://images.freeimages.com/images/premium/previews/6040/60405114-cartoon-coach-smiling.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 2,
    "userdata_id": 5
  },
  {
    "uuid": uuid.v4(),
    "username": "chris",
    "password": "chrispwd",
    "pic_path": "https://images.freeimages.com/images/premium/previews/6040/60405114-cartoon-coach-smiling.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 2,
    "userdata_id": 6
  },
  {
    "uuid": uuid.v4(),
    "username": "iris",
    "password": "irispwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 7
  },
  {
    "uuid": uuid.v4(),
    "username": "folan",
    "password": "folanpwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 8
  },
  {
    "uuid": uuid.v4(),
    "username": "juan",
    "password": "juanpwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 9
  },
  {
    "uuid": uuid.v4(),
    "username": "jos",
    "password": "jospwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 10
  },
  {
    "uuid": uuid.v4(),
    "username": "wanjiku",
    "password": "wanjikupwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 11
  },
  {
    "uuid": uuid.v4(),
    "username": "ivan",
    "password": "ivanpwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 12
  },
  {
    "uuid": uuid.v4(),
    "username": "ram",
    "password": "rampwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 13
  },
  {
    "uuid": uuid.v4(),
    "username": "joe",
    "password": "joepwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 14
  },
  {
    "uuid": uuid.v4(),
    "username": "john",
    "password": "johnpwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 15
  },
  {
    "uuid": uuid.v4(),
    "username": "tan",
    "password": "tanpwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 16
  },
  {
    "uuid": uuid.v4(),
    "username": "janez",
    "password": "janezpwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 17
  },
  {
    "uuid": uuid.v4(),
    "username": "zaka",
    "password": "zakapwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 18
  },
  {
    "uuid": uuid.v4(),
    "username": "sonja",
    "password": "sonjapwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 19
  },
  {
    "uuid": uuid.v4(),
    "username": "andi",
    "password": "andipwd",
    "pic_path": "https://simg.nicepng.com/png/small/209-2097667_spikey-hair-minion-minions.png",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 20
  }
];

module.exports = userSeedData;