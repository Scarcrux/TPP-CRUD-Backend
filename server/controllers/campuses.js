const router = require('express').Router();
const { Campus, Student } = require('../db');

router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: [Student],
      order: ['id']
    })

    res.status(200).send(campuses)

  } catch (error) {
    next(error)
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const singleCampus = await Campus.findByPk(req.params.id, {
      include: [Student],
    })
    res.status(200).send(singleCampus)
  } catch (error) {
    next(error)
  }
});

router.post('/', async (req, res, next) => {
  try {
    const campus = await Campus.create(req.body)
    res.status(201).send(campus)
  } catch (error) {
    next(error)
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id)
    campus.update(req.body)
    res.status(202).send(campus)
  } catch (error) {
    next(error)
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    await Campus.destroy({
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
