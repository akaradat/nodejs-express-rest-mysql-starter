const { db_read } = require('../config/db');
/**
 * Include main function that work about candiate
 */

exports.transactionGet = async (req, res) => {
  db_read.execute('SELECT * FROM transactions', [], (err, response, fields) => {
    res.json({
      message: 'success',
      data: response,
    });
  });
  // res.json(data);
};

exports.transactionInsert = async (req, res) => {
  db_read.execute(
    'INSERT INTO `transactions` ( `detail`, `price`, `type`, `tag`, `wallet_id`) VALUES ( ?, ?, ?, ?, ?)',
    [
      req.body.detail,
      req.body.price,
      req.body.type,
      req.body.tag,
      req.body.wallet_id,
    ],
    (err, response, fields) => {
      res.json({
        message: 'success',
        data: response,
      });
    }
  );
  // res.json(data);
};
