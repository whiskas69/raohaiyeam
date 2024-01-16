const express = require("express")
const pool = require("../config")
const Joi = require('joi')
const bcrypt = require('bcrypt'); // สร้าง pasword ใหม่ กันโดนขโมย
const { generateToken } = require("../utils/token"); // เก็บไว้ใน localstorage จำรหัสคน login ไว้
const { isLogIn } = require('../middlewares') // เอาไว้เช็คว่า login รึยัง

router = express.Router();

// สำหรับ login
const loginSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required()
})

router.post('/user/login', async (req, res, next) => {
    // เช็คว่าตามที่กำหนดใน Joi ไหม
    try {
        await loginSchema.validateAsync(req.body, { abortEarly: false })
    } catch (err) {
        return res.status(400).send(err)
    }

    const username = req.body.username
    const password = req.body.password

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    try {
        // เช็คว่ามี username ไหม
        const [users] = await conn.query('select * from login where username = ?', [username])
        console.log(users)

        const user = users[0]
        // เช็คว่ามี username ไหม
        if (!user) {
            throw new Error('Incorrect username or password.')
        }

        //เช็คว่า password ถูกไหม
        if (!(await bcrypt.compare(password, user.password))) {
            throw new Error('Incorrect username or password.')
        }

        // check เคยเข้าสู่ระบบไหม
        const [tokens] = await conn.query(
            'select * from token where user.id = ?', [user.id]
        )
        let token = tokens[0]?.token
        // ถ้าไม่เคย login ต้องสร้าง token
        if (!token) {
            token = generateToken()
            await conn.query('insert into token(user_id, token) values (?, ?)', [user.id, token])
        }

        conn.commit()
        res.status(200).json({'token' : token})
    } catch (err) {
        conn.rollback()
        res.status(400).json(err.toString())
    } finally {
        conn.release()
    }
})

// สำหรับ Register
// check ว่ามี username นี้อยู่แล้วรึเปล่า
const CheckUsername = async (value) => {
    const [user] = await pool.query('select username from login where username = ?', [value])
    if (user.length > 0) {
        throw new Joi.ValidationError('This username is already taken.')
    }
    return value
}

// check ว่ามี ID_card นี้อยู่แล้วรึเปล่า
const CheckId_card = async (value) => {
    const [ID_card] = await pool.query('select ID_card from user where ID_card = ?', [value])
    if (ID_card.length > 0) {
        throw new Joi.ValidationError('You are already a member.')
    }
    return value
}

// check  ว่า password ตรงกับที่กำหนดไหม
const CheckPassword = (value) => {
    // check ความยาวว่าเกิน 5 ไหม
    if (value.length < 5) {
        throw new Joi.ValidationError('Password must be not less than 8 characters.')
    }
    // check ความยาวว่ามีตัวอักษรพิมพ์ใหญ่พิมพ์เล็กและตัวเลข
    if (!(value.match(/[a-z]/) && value.match(/[A-Z]/) && value.match(/[0-9]/))) {
        throw new Joi.ValidationError('Password must be harder.')
    }
    return value
}

// ใช้ Joi check
const RegisterSchema = Joi.object({
    username: Joi.string().required().max(20).min(5).external(CheckUsername),
    password: Joi.string().required().custom(CheckPassword),
    confirm_password: Joi.string().required().valid(Joi.ref('password')),
    email: Joi.string().required().email(),
    first_name: Joi.string().required().max(100),
    last_name: Joi.string().required().max(100),
    ID_card: Joi.string().required().pattern(/[0-9]{13}/).max(13).external(CheckId_card),
    phone: Joi.string().required().pattern(/0[0-9]{9}/).max(10)

})

router.post('/user/register', async (req, res, next) => {
    // check สิ่งที่เอาเข้ามาด้วย Joi
    try {
        await RegisterSchema.validateAsync(req.body, { abortEarly: false })
    } catch (err) {
        return res.status(400).send(err)
    }

    const conn = await pool.getConnection()
    await conn.beginTransaction()

    const username = req.body.username
    const password = await bcrypt.hash(req.body.password, 5)
    const first_name = req.body.first_name
    const last_name = req.body.last_name
    const ID_card = req.body.ID_card
    const email = req.body.email
    const phone = req.body.phone

    // insert ข้อมูล 
    try {
        console.log('say hi')
        // insert ข้อมูลลงตาราง user
        // const [data] = await conn.query('insert into user(first_name, last_name, ID_card, phone, email) values (?, ?, ?, ?, ?)', 
        // [first_name, last_name, ID_card, phone, email])

        // console.log(data.insertId)
        // const user_id = data.insertId;

        // insert ข้อมูลลงใน login 
        // await conn.query('insert into login(user_id, username, password) values(?, ?, ?)', [user_id, username, password])

        let results = await conn.query(
            'INSERT INTO user ( first_name, last_name, phone, email, ID_card) VALUES (?, ?, ?, ?, ?)', [first_name, last_name, phone, email, ID_card]
        )

        const cusId = results[0].insertId;
        console.log(cusId)

        await conn.query(
            'INSERT INTO login (cus_id, username, password) VALUES (?, ?, ?)', [cusId, username, password]
        )

        conn.commit()
        return res.status(200).send('You are already our member!')
    } catch (err) {
        res.send('rollback')
        conn.rollback()
        res.status(400).json(err.toString());
    } finally {
        conn.release()
    }
})


exports.router = router