const uuid = require("uuid");

let userSeedData = [
  {
    "uuid": uuid.v4(),
    "username": "max",
    "password": "maxpwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-crossed-arrows-icon-600w-1937094904.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 1,
    "userdata_id": 1
  },
  {
    "uuid": uuid.v4(),
    "username": "frida",
    "password": "fridapwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-old-wooden-wheel-600w-1937095906.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 2,
    "userdata_id": 2
  },
  {
    "uuid": uuid.v4(),
    "username": "olf",
    "password": "olfpwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-old-wooden-wheel-600w-1937095906.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 2,
    "userdata_id": 3
  },
  {
    "uuid": uuid.v4(),
    "username": "carla",
    "password": "carlapwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-old-wooden-wheel-600w-1937095906.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 2,
    "userdata_id": 4
  },
  {
    "uuid": uuid.v4(),
    "username": "sven",
    "password": "svenpwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-old-wooden-wheel-600w-1937095906.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 2,
    "userdata_id": 5
  },
  {
    "uuid": uuid.v4(),
    "username": "chris",
    "password": "chrispwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-old-wooden-wheel-600w-1937095906.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 2,
    "userdata_id": 6
  },
  {
    "uuid": uuid.v4(),
    "username": "iris",
    "password": "irispwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 7
  },
  {
    "uuid": uuid.v4(),
    "username": "folan",
    "password": "folanpwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 8
  },
  {
    "uuid": uuid.v4(),
    "username": "juan",
    "password": "juanpwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 9
  },
  {
    "uuid": uuid.v4(),
    "username": "jos",
    "password": "jospwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 10
  },
  {
    "uuid": uuid.v4(),
    "username": "wanjiku",
    "password": "wanjikupwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 11
  },
  {
    "uuid": uuid.v4(),
    "username": "ivan",
    "password": "ivanpwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 12
  },
  {
    "uuid": uuid.v4(),
    "username": "ram",
    "password": "rampwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 13
  },
  {
    "uuid": uuid.v4(),
    "username": "joe",
    "password": "joepwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 14
  },
  {
    "uuid": uuid.v4(),
    "username": "john",
    "password": "johnpwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 15
  },
  {
    "uuid": uuid.v4(),
    "username": "tan",
    "password": "tanpwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 16
  },
  {
    "uuid": uuid.v4(),
    "username": "janez",
    "password": "janezpwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 17
  },
  {
    "uuid": uuid.v4(),
    "username": "zaka",
    "password": "zakapwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 18
  },
  {
    "uuid": uuid.v4(),
    "username": "sonja",
    "password": "sonjapwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 19
  },
  {
    "uuid": uuid.v4(),
    "username": "andi",
    "password": "andipwd",
    "pic_path": "https://image.shutterstock.com/image-vector/glowing-neon-document-icon-isolated-600w-1606897852.jpg",
    "createdAt": new Date(),
    "updatedAt": new Date(),
    "userrole_id": 3,
    "userdata_id": 20
  }
];

module.exports = userSeedData;