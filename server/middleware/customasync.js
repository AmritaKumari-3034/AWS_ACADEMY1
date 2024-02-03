const CustomAsyncMiddleware = (controller) => async (req, res, next) => {
	try {
		await controller(req, res);
	} catch (error) {
		///if error comes from mongodb then error is overidde  byb mongo error

		if (error.name === "ValidationError") {
			res.status(400).json({
				success: false,
				msg: "VALIDATION ERROR",
				error: error.message,
			});

			return;
		}

		if (error.code === 11000) {
			res.status(400).json({
				success: false,
				msg: "Duplicate key error",
				error: error.keyvalue,
			});

			return;
		}

		res.status(error.statuscode || 500).json({
			success: false,
			msg: error.message || "Something went wrong",
			error: error,
		});
	}
};

module.exports = CustomAsyncMiddleware;
