const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// GET all categories 
router.get('/', async (req, res) => {
    try {
        const dbCategoryData = await Category.findAll({
            include: [ { model: Product, attributes: [ 'product_name', 'price', 'stock' ] } ]
        });
        res.json(dbCategoryData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});
// GET a single category 
router.get('/:id', async (req, res) => {
    try {
      const dbCategoryData = await Category.findAll({
          where: { id: req.params.id },
          include: [ { model: Product, attributes: ['product_name', 'price', 'stock'] } ]
      });
        res.json(dbCategoryData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/', (req, res) => {
    // create a new category
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
});

module.exports = router;
