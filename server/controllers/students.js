const router = require('express').Router();
const { Campus, Student } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [Campus],
      order: ['id']
    })

    res.status(200).send(students)
  } catch (error) {
    next(error)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleStudent = await Student.findByPk(req.params.id, {
      include: [Campus],
    })
    res.status(200).send(singleStudent)
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const student = await Student.create(req.body)
    res.status(201).send(student)
  } catch (error) {
    next(error)
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id)
    student.update(req.body)
    res.status(202).send(student)
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Student.destroy({
      where: {
       id: req.params.id
      }
    })
    res.sendStatus(204)
  } catch (error) {
    next(error)
  }
});

module.exports = router
