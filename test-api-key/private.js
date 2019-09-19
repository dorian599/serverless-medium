'use strict';

module.exports.message = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: 'Private EndPoint'
      },
      null,
      2
    ),
  };
};
