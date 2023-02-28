const connection = require('../db/connection.js');

exports.getAll = (req, res, next) => {
    let queryString = "SELECT * FROM terminal_info";
    try {
        connection.query(queryString, (err, results) => {
            if (err) return res.json({error: err});
            res.status(200).json(results);
        });
        //connection.end();
    } catch (error) {
        console.error(error);
        res.status(400);
    }
}

exports.getByTermId = (req, res, next) => {
    let term_id = req.params.id
    let queryString = "SELECT * FROM `terminal_info` WHERE `TERM_ID` = ?";
    try {
        connection.execute(queryString,[term_id], (err, results) => {
            if (err) return res.json({error: err});
            res.status(200).json(results);
        });
        connection.end()
    } catch (error) {
       console.error(error)
       res.status(400); 
    }
}

exports.createShop = (req, res, next) => {
    let queryString = 'INSERT INTO `terminal_info` (`TERM_ID`,`BRANCH`,`VENDORNO`,`PRODUCTNO`,`PMINO`,`BATCH`,`SLIPNO`,`TERM_NAME`,`TERM_FOOD`,`PAYPERCENT`,`PAYPERDAY`,`INCLUDEVAT`,`INV_PRINT`,`INV_NAME`,`INV_ADDR`,`TERM_FLAG`,`TYPEPAY`,`STAFFOFCHARGE`,`STAFFPRODUCTNO`,`CUSTOMER_REF`,`RENTAL_ID`,`HORIZON_SENT`,`LEASE_TYPE`,`CLUBCARD_CODE`,`CLUBCARD_AMT`,`CLUBCARD_POINT`,`TERMINAL_TYPE`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
    try {
        connection.execute(queryString,[req.body.TERM_ID,req.body.BRANCH,req.body.VENDORNO,req.body.PRODUCTNO,req.body.PMINO,req.body.BATCH,req.body.SLIPNO,req.body.TERM_NAME, req.body.TERM_FOOD,req.body.PAYPERCENT,req.body.PAYPERDAY,req.body.INCLUDEVAT,req.body.INV_PRINT,req.body.INV_NAME,req.body.INV_ADDR,req.body.TERM_FLAG,req.body.TYPEPAY,req.body.STAFFOFCHARGE,req.body.STAFFPRODUCTNO,req.body.CUSTOMER_REF,req.body.RENTAL_ID,req.body.HORIZON_SENT,req.body.LEASE_TYPE,req.body.CLUBCARD_CODE,req.body.CLUBCARD_AMT,req.body.CLUBCARD_POINT,req.body.TERMINAL_TYPE], (err, results) => {
            if (err) return res.json({error: err});
            res.status(201).json({msg: "created success.",affectedRows: results.affectedRows});
        }); 
        //connection.end()
    } catch (error) {
       console.error(error);
       res.status(400); 
    }
}

exports.updateShop = (req, res, next) => {
    let queryString = "UPDATE `terminal_info` SET `TERMINAL_TYPE`= ? WHERE `TERM_ID` = ?";
    try {
        connection.execute(queryString, [req.body.TERMINAL_TYPE, req.body.TERM_ID], (err, results) => {
            if (err) return res.json({error: err});
            res.status(200).json({msg: "updated success",affectedRows: results.affectedRows });
        });
        //connection.end()
    } catch (error) {
       console.error(error);
       res.status(400); 
    }
}

exports.deleteShop = (req, res, next) => {
    let term_id = req.params.id;
    let queryString = "DELETE FROM `terminal_info` WHERE `TERM_ID` = ?";
    try {
        connection.execute(queryString,[term_id], (err, results) => {
            if (err) return res.json({error: err});
            res.status(204).json({msg: "deleted success.",affectedRows: results.affectedRows});
        });
        //connection.end()
    } catch (error) {
       console.error(error) 
       res.status(400);
    }
}