import express, { Request, Response } from "express";
import MetamorphInfo from "../../models/LeaguesInfo";

const router = express.Router();

// Get back all the leagues
router.get("/", async (req: Request, res: Response) => {
  try {
    const metamorphInfo = await MetamorphInfo.find();
    res.json(metamorphInfo);
  } catch (error) {
    res.json(error);
  }
});

// Submit MetamorphInfo
router.post("/", async (req: Request, res: Response) => {
  const metamorphInfo = new MetamorphInfo(req.body);

  try {
    const saveMetamorphInfo = await metamorphInfo.save();
    res.json(saveMetamorphInfo);
  } catch (error) {
    res.json({ message: error });
  }
});

// // Specific league by ID
// router.get("/:metamorphInfoId", async (req: Request, res: Response) => {
//   try {
//     const metamorphInfo = await MetamorphInfo.findById(req.params.metamorphInfoId);
//     res.json(metamorphInfo);
//   } catch (error) {
//     console.log(error);
//   }
// });

// // Delete league by ID
// router.delete("/:metamorphInfoId", async (req: Request, res: Response) => {
//   try {
//     const removeMetamorphInfo = await MetamorphInfo.deleteOne({ _id: req.params.metamorphInfoId });
//     res.json(removeMetamorphInfo);
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

// // Update a league by ID
// router.patch("/:metamorphInfoId", async (req: Request, res: Response) => {
//   try {
//     const updateMetamorphInfo = await MetamorphInfo.updateOne(
//       { _id: req.params.metamorphInfoId },
//       {
//         $set: {
//           title: req.body.title,
//           description: req.body.description,
//         },
//       }
//     );
//     res.json(updateMetamorphInfo);
//     console.log("Changes are successfully");
//   } catch (error) {
//     res.json({ message: error });
//   }
// });

export default router;
