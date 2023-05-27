const User = require('../models/User');

exports.UpdateUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {

        // If user tries to update the password
        if (req.body.password) {
            try {
                const salt = await bcrypt.genSalt(10)
                req.body.password = await bcrypt.hash(req.body.password, salt)
            } catch (err) {
                return res.status(500).json(err);
            }
        }
        try {
            const user = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body, // set autoatically all the inputs
            })
            res.status(200).json('Account has been updated')
        } catch (err) {
            return res.status(500).json(err)
        }
    } else {
        return res.status(403).json('You can update only your account!')
    }
}

exports.FetchAllUser = async (req, res) => {
    // const domainName = req.query.domain;
    const { domain } = req.query.domain;

    try {
        const users = await User.find({ domain: domain });
        res.status(200).json(users);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
}

exports.DeleteUser = async (req, res) => {
    if (req.body.userId === req.params.id || req.body.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json('Account has been deleted')
        } catch (err) {
            return res.status(500).json(err)
        }
    } else {
        return res.status(403).json('You can delete only your account!')
    }
}

exports.Fetch_a_User = async (req, res) => {
    const userId = req.query.userId;
    const username = req.query.username;
    // ? await User.findById(req.params.id)
    // : await User.findOne({username : username})
    try {
        const user = userId ? await User.findById(userId)
            : await User.findOne({ username: username })
        const { password, updatedAt, ...other } = user._doc
        res.status(200).json(other)
    } catch (err) {
        res.status(500).json(err)
    }
}

exports.FetchFriends = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId);
        const friends = await Promise.all(
            user.following.map((friendId) => {
                return User.findById(friendId);
            })
        );
        let friendList = [];
        friends.map((friend) => {
            const { _id, username, profilePicture } = friend;
            friendList.push({ _id, username, profilePicture });
        });
        res.status(200).json(friendList)
    } catch (err) {
        res.status(500).json(err);
    }
}

exports.Follow_a_User = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (!user.followers.includes(req.body.userId)) {
                await user.updateOne({ $push: { followers: req.body.userId } })
                await currentUser.updateOne({ $push: { followings: req.params.id } })
                res.status(200).json('user has been followed')
            } else {
                res.status(403).json('you allready follow this user')
            }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('you cant follow yourself')
    }
}

exports.Unfollow_a_User = async (req, res) => {
    if (req.body.userId !== req.params.id) {
        try {
            const user = await User.findById(req.params.id)
            const currentUser = await User.findById(req.body.userId)
            if (user.followers.includes(req.body.userId)) {
                await user.updateOne({ $pull: { followers: req.body.userId } })
                await currentUser.updateOne({ $pull: { followings: req.params.id } })
                res.status(200).json('user has been unfollowed')
            } else {
                res.status(403).json('you dont follow this user')
            }
        } catch (err) {
            res.status(500).json(err)
        }
    } else {
        res.status(403).json('you cant unfollow yourself')
    }
}