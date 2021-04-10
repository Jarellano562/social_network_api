const router = require('express').Router();
const {
    getAllUsers,
    getUsersById,
    createUsers,
    updateUsers,
    deleteUsers,
    addFriend,
    deleteFriend
} = require('../../controllers/users-controller');

// GET / POST
router.route('/').get(getAllUsers).post(createUsers);

// GET / PUT / DELETE
router.route('/:id').get(getUsersById).put(updateUsers).delete(deleteUsers);

// POST / DELETE
router.route('/:id/friends/:friendId').post(addFriend).delete(deleteFriend)

module.exports = router;
