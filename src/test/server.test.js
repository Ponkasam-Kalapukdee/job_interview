const request = require('supertest');
const app = require('../server.js');

describe("test get shop information", () => {
    test("Test get all shop information",async () => {
        const url1 = "/api/terminals";
        let body1 = [
    {
        "TERM_ID": "517701",
        "BRANCH": "5177",
        "VENDORNO": "0000000000",
        "PRODUCTNO": "0000000000",
        "PMINO": "xxxxxxxxxxxx1",
        "BATCH": 1,
        "SLIPNO": 1,
        "TERM_NAME": "นางขนิษฐา   อารมย์สุข",
        "TERM_FOOD": "XXX",
        "PAYPERCENT": "35.00",
        "PAYPERDAY": "0.00",
        "INCLUDEVAT": "1",
        "INV_PRINT": "1",
        "INV_NAME": "นางขนิษฐา   อารมย์สุข",
        "INV_ADDR": "132 ถ.แก้วเงินทอง แขวงบางพรม เขตตลิ่งชัน กรุงเทพมห",
        "TERM_FLAG": "1",
        "TYPEPAY": "1",
        "STAFFOFCHARGE": "0.00",
        "STAFFPRODUCTNO": "/",
        "CUSTOMER_REF": "519213",
        "RENTAL_ID": "000FG001",
        "HORIZON_SENT": "Y",
        "LEASE_TYPE": "",
        "CLUBCARD_CODE": null,
        "CLUBCARD_AMT": "100.00",
        "CLUBCARD_POINT": 1,
        "TERMINAL_TYPE": "D"
    },
    {
        "TERM_ID": "517702",
        "BRANCH": "5177",
        "VENDORNO": "0000000000",
        "PRODUCTNO": "0000000000",
        "PMINO": "xxxxxxxxxxxx2",
        "BATCH": 1,
        "SLIPNO": 1,
        "TERM_NAME": "สเต็ก  สลัด-เครื่องเคียง",
        "TERM_FOOD": "XXX",
        "PAYPERCENT": "35.00",
        "PAYPERDAY": "0.00",
        "INCLUDEVAT": "1",
        "INV_PRINT": "1",
        "INV_NAME": "นางสาว มาริสา ปรากฏรัตน์",
        "INV_ADDR": "360/97 ถนนหลวงแพ่ง แขวงทับยาว เขตลาดกระบัง กทม.",
        "TERM_FLAG": "1",
        "TYPEPAY": "1",
        "STAFFOFCHARGE": "0.00",
        "STAFFPRODUCTNO": "/",
        "CUSTOMER_REF": "555879",
        "RENTAL_ID": "000FG002",
        "HORIZON_SENT": "Y",
        "LEASE_TYPE": "",
        "CLUBCARD_CODE": null,
        "CLUBCARD_AMT": "100.00",
        "CLUBCARD_POINT": 1,
        "TERMINAL_TYPE": "D"
    },
    {
        "TERM_ID": "517703",
        "BRANCH": "5177",
        "VENDORNO": "0000000000",
        "PRODUCTNO": "0000000000",
        "PMINO": "xxxxxxxxxxxx3",
        "BATCH": 1,
        "SLIPNO": 1,
        "TERM_NAME": "นางสาว เตือนใจ เดียวตระกูล",
        "TERM_FOOD": "XXX",
        "PAYPERCENT": "35.00",
        "PAYPERDAY": "0.00",
        "INCLUDEVAT": "1",
        "INV_PRINT": "1",
        "INV_NAME": "นางสาว เตือนใจ เดียวตระกูล",
        "INV_ADDR": "118 ซอยริมทางด่วน 2 แขวงพระโขนงใต้ เขตพระโขนง กรุง",
        "TERM_FLAG": "1",
        "TYPEPAY": "1",
        "STAFFOFCHARGE": "0.00",
        "STAFFPRODUCTNO": "/",
        "CUSTOMER_REF": "519218",
        "RENTAL_ID": "000FG003",
        "HORIZON_SENT": "Y",
        "LEASE_TYPE": "",
        "CLUBCARD_CODE": null,
        "CLUBCARD_AMT": "100.00",
        "CLUBCARD_POINT": 1,
        "TERMINAL_TYPE": "D"
    },
    {
        "TERM_ID": "517704",
        "BRANCH": "5177",
        "VENDORNO": "0000000000",
        "PRODUCTNO": "0000000000",
        "PMINO": "xxxxxxxxxxxx4",
        "BATCH": 1,
        "SLIPNO": 1,
        "TERM_NAME": "ราดหน้า สุกี้ สยามอินเตอร์",
        "TERM_FOOD": "XXX",
        "PAYPERCENT": "35.00",
        "PAYPERDAY": "0.00",
        "INCLUDEVAT": "1",
        "INV_PRINT": "1",
        "INV_NAME": "บริษัท ราดหน้า เชลล์ชวนชิม หลังห้อยเทียนเหลา จำกัด",
        "INV_ADDR": "3/17 ถนนแจ้งวัฒนะ ตำบลบางพูด อำเภอปากเกร็ด จังหวัด",
        "TERM_FLAG": "1",
        "TYPEPAY": "1",
        "STAFFOFCHARGE": "0.00",
        "STAFFPRODUCTNO": "/",
        "CUSTOMER_REF": "519250",
        "RENTAL_ID": "000FG004",
        "HORIZON_SENT": "Y",
        "LEASE_TYPE": "",
        "CLUBCARD_CODE": null,
        "CLUBCARD_AMT": "100.00",
        "CLUBCARD_POINT": 1,
        "TERMINAL_TYPE": "D"
    }
]
    let res = await request(app).get(url1);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(body1);
    });

    test("Test get shop information in TERM_ID: 517704", async () => {
        const url2 = "/api/terminals/517704";
        const body2 = [
    {
        "TERM_ID": "517704",
        "BRANCH": "5177",
        "VENDORNO": "0000000000",
        "PRODUCTNO": "0000000000",
        "PMINO": "xxxxxxxxxxxx4",
        "BATCH": 1,
        "SLIPNO": 1,
        "TERM_NAME": "ราดหน้า สุกี้ สยามอินเตอร์",
        "TERM_FOOD": "XXX",
        "PAYPERCENT": "35.00",
        "PAYPERDAY": "0.00",
        "INCLUDEVAT": "1",
        "INV_PRINT": "1",
        "INV_NAME": "บริษัท ราดหน้า เชลล์ชวนชิม หลังห้อยเทียนเหลา จำกัด",
        "INV_ADDR": "3/17 ถนนแจ้งวัฒนะ ตำบลบางพูด อำเภอปากเกร็ด จังหวัด",
        "TERM_FLAG": "1",
        "TYPEPAY": "1",
        "STAFFOFCHARGE": "0.00",
        "STAFFPRODUCTNO": "/",
        "CUSTOMER_REF": "519250",
        "RENTAL_ID": "000FG004",
        "HORIZON_SENT": "Y",
        "LEASE_TYPE": "",
        "CLUBCARD_CODE": null,
        "CLUBCARD_AMT": "100.00",
        "CLUBCARD_POINT": 1,
        "TERMINAL_TYPE": "D"
    }
]
        let res = await request(app).get(url2);
        expect(res.statusCode).toEqual(200);
        expect(res.body).toEqual(body2);
    });
});

describe("test create route", () => {
    test("test post shop", async () => {
        const url3 = "/api/terminals";
        let body3 = {
            "TERM_ID": "517705",
            "BRANCH": "5177",
            "VENDORNO": "0000000000",
            "PRODUCTNO": "0000000000",
            "PMINO": "xxxxxxxxxxxx4",
            "BATCH": 1,
            "SLIPNO": 1,
            "TERM_NAME": "TEST517705",
            "TERM_FOOD": "XXX",
            "PAYPERCENT": "35.0",
            "PAYPERDAY": "0.0",
            "INCLUDEVAT": "1",
            "INV_PRINT": "1",
            "INV_NAME": "บริษัท ราดหน้า เชลล์ชวนชิม หลังห้อยเทียนเหลา จำกัด",
            "INV_ADDR": "3/17 ถนนแจ้งวัฒนะ ตำบลบางพูด อำเภอปากเกร็ด จังหวัด",
            "TERM_FLAG": "1",
            "TYPEPAY": "1",
            "STAFFOFCHARGE": "0.0",
            "STAFFPRODUCTNO": "/",
            "CUSTOMER_REF": "519250",
            "RENTAL_ID": "000FG004",
            "HORIZON_SENT": "Y",
            "LEASE_TYPE": "",
            "CLUBCARD_CODE": null,
            "CLUBCARD_AMT": "100.00",
            "CLUBCARD_POINT": 1,
            "TERMINAL_TYPE": "D"
        }
        let res = await request(app).post(url3).send(body3);
        expect(res.statusCode).toEqual(201);
        expect(res.body.msg).toEqual("created success.");
        expect(res.body.affectedRows).toEqual(1);
    });
});

describe("test update shop route", () => {
    test("test update shop", async () => {
        const url4 = "/api/terminals";
        let body4 = {
            "TERM_ID": "517705",
            "TERMINAL_TYPE": "E",
        }
        let res = await request(app).put(url4).send(body4);
        expect(res.statusCode).toEqual(200);
        expect(res.body.msg).toEqual("updated success");
        expect(res.body.affectedRows).toEqual(1);
    });
});

describe("test test delete shop route", () => {
    test("test delete shop", async () => {
        const url5 = "/api/terminals/517705";
        let res = await request(app).delete(url5);
        expect(res.statusCode).toEqual(204);
    });
});