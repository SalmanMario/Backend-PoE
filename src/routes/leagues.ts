import express, { Request, Response } from "express";
import LeagueInfo from "../models/LeaguesInfo";

const router = express.Router();

// Get back all the leagues
router.get("/", async (req: Request, res: Response) => {
  try {
    const legionInfo = await LeagueInfo.find();
    res.json(legionInfo);
  } catch (error) {
    res.json(error);
  }
});

// Submit LegionInfo
router.post("/", async (req: Request, res: Response) => {
  const legionInfo = new LeagueInfo(req.body);

  try {
    const saveLegionInfo = await legionInfo.save();
    res.json(saveLegionInfo);
  } catch (error) {
    res.json({ message: error });
  }
});

// router.get("/:legionInfoId", async (req: Request, res: Response) => {
//   try {
//     const legionInfo = await LeagueInfo.findById(req.params.legionInfoId);
//     res.json(legionInfo);
//   } catch (error) {
//     console.log(error);
//   }
// });

// Delete league by ID
router.delete("/:_id", async (req: Request, res: Response) => {
  try {
    const removeLeague = await LeagueInfo.findByIdAndDelete(req.params._id);
    res.json(removeLeague);
  } catch (error) {
    res.json({ message: error });
  }
});

router.patch("/:_id", async (req: Request, res: Response) => {
  try {
    const updateLegionInfo = await LeagueInfo.updateOne({ _id: req.params._id }, req.body);
    res.json(updateLegionInfo);
    console.log("Changes are successfully");
  } catch (error) {
    res.json({ message: error });
  }
});

export default router;
