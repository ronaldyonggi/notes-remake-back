import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
const router = Router();

const prisma = new PrismaClient();

router.get('/', async (_req, res) => {
  const notes = await prisma.note.findMany({
    select: {
      content: true,
      important: true,
      User: {
        select: {
          username: true
        }
      }
    }
  });
  return res.json(notes);
});

export default router;
