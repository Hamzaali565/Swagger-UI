import { Router } from "express";
import {
  login,
  signup,
} from "../Controllers/user.controllers/user.controllers.mjs";

const router = Router();

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: Name of the user
 *                 example: Muhammad Hamza Ali
 *               userid:
 *                 type: string
 *                 description: User ID of signup
 *                 example: 4258.hamza
 *               password:
 *                 type: string
 *                 description: Password of the user
 *                 example: 12345
 *     responses:
 *       200:
 *         description: User signup successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User signed up successfully
 *       500:
 *         description: Some server error
 */
router.route("/signup").post(signup);

/**
 * @swagger
 * /Login:
 *   post:
 *     summary: Login a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userid:
 *                 type: string
 *                 description: User ID of signup
 *                 example: 4258.hamza
 *               password:
 *                 type: string
 *                 description: Password of the user
 *                 example: 12345
 *     responses:
 *       200:
 *         description: User Login successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: User signed up successfully
 *       500:
 *         description: Some server error
 */

router.route("/login").post(login);

export default router;
