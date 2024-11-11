import { Router } from "express";
import { productPosting } from "../Controllers/product.controller/product.controller.mjs";

const router = Router();

/**
 * @swagger
 * /product:
 *   post:
 *     summary: Post a product
 *     security:
 *       - cookieAuth: []
 *     tags: [Product]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of Product
 *                 example: Ande wala burger
 *               price:
 *                 type: string
 *                 description: price of product
 *                 example: 25
 *     responses:
 *       200:
 *         description: Product Post successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Product Post successfully.
 *       500:
 *         description: Some server error
 */
router.route("/product").post(productPosting);

export default router;
