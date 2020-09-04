
const createToken = (header) => {

    const token = header.split(' ')[1];

    const config = {
        headers: { Authorization: `Bearer ${token}` }
      };

    return config;
}

module.exports.createToken = createToken;