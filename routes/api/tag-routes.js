const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');
const { findAll } = require('../../models/Product');
// The `/api/tags` endpoint

//GET all tags
router.get('/', async (req, res) => {
  try {
    const dbTagData = await Tag.findAll({
      include: [
        {
          model: Product,
          attributes: ['product_name', 'price', 'stock']
        }
      ]
    });
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'server error' });
  }
});
// GET one tag
router.get('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: Product,
          attributes: ['product_name', 'price', 'stock']
        }
      ]
    });
    if (!dbTagData) {
      res.status(404).json({ message: 'no tag found with this id' });
      return;
    }
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'server error' });
  }
});
// CREATE a new tag
router.post('/', async (req, res) => {
  try {
    const dbTagData = await Tag.create({
      tag_name: req.body.tag_name
    });
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'server error' });
  }
});
// UPDATE a tag
router.put('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.update(req.body, {
      where: {
        id: req.params.id
      }
    });
    if (!dbTagData[0]) {
      res.status(404).json({ message: 'no tag found with this id' });
      return;
    }
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'server error' });
  }
});
// DELETE a tag
router.delete('/:id', async (req, res) => {
  try {
    const dbTagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    if (!dbTagData) {
      res.status(404).json({ message: 'no tag found with this id' });
      return;
    }
    res.json(dbTagData);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'server error' });
  }
});

module.exports = router;
