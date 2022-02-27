const router = require('express').Router();
const { Category, Product } = require('../../models');
// The `/api/categories` endpoint

// GET all categories
router.get('/', async (req, res) => {
    try {
        const dbCategoryData = await Category.findAll({
            include: [
                {
                    model: Product,
                    attributes: ['product_name', 'price', 'stock']
                }
            ]
        });
        res.json(dbCategoryData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'error:' }, err);
    }
});
// GET a single category
router.get('/:id', async (req, res) => {
    try {
        const dbCategoryData = await Category.findAll({
            where: { id: req.params.id },
            include: [
                {
                    model: Product,
                    attributes: ['product_name', 'price', 'stock']
                }
            ]
        });
        if (!dbCategoryData) {
            res.status(404).json({ message: 'no category found with this id' });
            return;
        }
        res.json(dbCategoryData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'server error' }, err);
    }
});
// CREATE a new category
router.post('/', async (req, res) => {
    try {
        const dbCategoryData = await Category.create({
            category_name: req.body.category_name
        });
        res.json(dbCategoryData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'server error' }, err);
    }
});
// UPDATE a category
router.put('/:id', async (req, res) => {
    try {
        const dbCategoryData = await Category.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if (!dbCategoryData[0]) {
            res.status(404).json({ message: 'no category found with this id' });
            return;
        }
        res.json(dbCategoryData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'server error' }, error);
    }
});
// DELETE a category
router.delete('/:id', async (req, res) => {
    try {
        const dbCategoryData = await Category.destroy({
            where: { id: req.params.id }
        });
        if (!dbCategoryData) {
            res.status(404).json({ message: 'no category found with this id' });
            return;
        }
        res.json(dbCategoryData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'server error' }, err);
    }
});

module.exports = router;
