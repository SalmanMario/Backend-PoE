import express, { Request, Response } from "express";
import Builds from "../../models/Builds";

const router = express.Router();

// Get back all the builds
router.get("/", async (req: Request, res: Response) => {
  try {
    const league = await Builds.find();
    res.json(league);
  } catch (error) {
    res.json(error);
  }
});

// Submits a build
router.post("/", async (req: Request, res: Response) => {
  const build = new Builds(req.body);

  try {
    const saveLeague = await build.save();
    res.json(saveLeague);
  } catch (error) {
    res.json({ message: error });
  }
});

// Specific leagues
router.get("/:leagueId", async (req: Request, res: Response) => {
  try {
    const leagueId = req.params.leagueId;
    const league = await Builds.find({ leagueId });
    res.json(league);
  } catch (error) {
    console.log(error);
  }
});

// Delete build
router.delete("/:buildId", async (req: Request, res: Response) => {
  try {
    const removeLeague = await Builds.findByIdAndDelete(req.params.buildId);
    res.json(removeLeague);
  } catch (error) {
    res.json({ message: error });
  }
});

// Update a build
router.patch("/:buildId", async (req: Request, res: Response) => {
  try {
    const updateLeague = await Builds.findByIdAndUpdate(req.params.buildId, req.body);
    res.json(updateLeague);
    console.log("Changes are successfully");
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;

export default router;