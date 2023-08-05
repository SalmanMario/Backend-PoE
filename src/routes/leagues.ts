import express, { Request, Response } from "express";
import LegionInfo from "../models/LeaguesInfo";

const router = express.Router();

// Get back all the leagues
router.get("/", async (req: Request, res: Response) => {
  try {
    const legionInfo = await LegionInfo.find();
    res.json(legionInfo);
  } catch (error) {
    res.json(error);
  }
});

// Submit LegionInfo
router.post("/", async (req: Request, res: Response) => {
  const legionInfo = new LegionInfo(req.body);

  try {
    const saveLegionInfo = await legionInfo.save();
    res.json(saveLegionInfo);
  } catch (error) {
    res.json({ message: error });
  }
});

// Specific league by ID
// router.get("/:legionInfoId", async (req: Request, res: Response) => {
//   try {
//     const legionInfo = await LegionInfo.findById(req.params.legionInfoId);
//     res.json(legionInfo);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // Delete league by ID
// router.delete("/:legionInfoId", async (req: Request, res: Response) => {
//   try {
//     const removeLegionInfo = await LegionInfo.deleteOne({ _id: req.params.legionInfoId });
//     res.json(removeLegionInfo);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

// // Update a league by ID
// router.patch("/:legionInfoId", async (req: Request, res: Response) => {
//   try {
//     const updateLegionInfo = await LegionInfo.updateOne(
//       { _id: req.params.legionInfoId },
//       {
//         $set: {
//           title: req.body.title,
//           description: req.body.description,
//         },
//       }
//     );
//     res.json(updateLegionInfo);
//     console.log("Changes are successfully");
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

export default router;
