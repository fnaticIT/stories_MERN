import Profile from "../models/profile.js";

export const save = async (req, res) => {
  const { name, email, img, bio, age, gender, creator } = req.body;

  const oldUser = await UserModal.findOne({ creator});

  if (!oldUser) {
    const profile = req.body;

    const newProfile = new Profile({ ...profile,creator: req.userId });

    try {
      await newProfile.save();

      res.status(201).json(newProfile);
    } catch (error) {
      res.status(409).json({ message: error.message });
    }
  } else {
    const { id } = req.params;
    const {  name, email, img, bio, age, gender, creator } = req.body;

    const updatedPost = { name, email, img, bio, age, gender, creator,_id:id};

    await Profile.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
  }
};
