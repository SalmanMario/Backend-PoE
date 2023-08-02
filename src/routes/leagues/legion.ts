import express, { Request, Response } from "express";
import League from "../../models/Leagues";

const router = express.Router();

// Get back all the leagues
router.get("/", async (req: Request, res: Response) => {
  try {
    const league = await League.find();
    res.json(league);
  } catch (error) {
    res.json(error);
  }
});

// Submits a league
router.post("/legion", async (req: Request, res: Response) => {
  const league = new League(req.body);

  try {
    const saveLeague = await league.save();
    res.json(saveLeague);
  } catch (error) {
    res.json({ message: error });
  }
});

// Specific leagues
router.get("/:leagueId", async (req: Request, res: Response) => {
  try {
    const league = await League.findById(req.params.leagueId);
    res.json(league);
  } catch (error) {
    console.log(error);
  }
});

// Delete leagues
router.delete("/:leagueId", async (req: Request, res: Response) => {
  try {
    const removeLeague = await League.deleteOne({ _id: req.params.leagueId });
    res.json(removeLeague);
  } catch (error) {
    res.json({ message: error });
  }
});

router.delete("/league", async (req: Request, res: Response) => {
  try {
    const removeLeague = await League.deleteMany();
    res.json(removeLeague);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update a leagues
router.patch("/:leagueId", async (req: Request, res: Response) => {
  try {
    const updateLeague = await League.updateOne(
      { _id: req.params.leagueId },
      {
        $set: {
          title: req.body.title,
          description: req.body.description,
        },
      }
    );
    res.json(updateLeague);
    console.log("Changes are successfully");
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;

export default router;
