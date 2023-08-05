import mongoose from "mongoose";

export type AggregateProps = {
  model: mongoose.Model<any>;
  from: string;
  localField: string;
  searchKey: string;
  searchValue: any;
  as?: string;
};
export function aggregateInField({
  localField,
  from,
  model,
  searchKey,
  searchValue,
  as = "searchQuery",
}: AggregateProps) {
  return model.aggregate([
    {
      $lookup: {
        from,
        localField,
        foreignField: "_id",
        as,
      },
    },
    {
      $unwind: `$${as}`,
    },
    {
      $match: {
        [`${as}.${searchKey}`]: searchValue,
      },
    },
  ]);
}
