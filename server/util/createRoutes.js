module.exports = function (controller, router) {
  router.param("id", controller.params);

  router
    .route("/")
    .get(controller.getAll || (()=>{}))
    .post(controller.post);

  router
    .route("/:id")
    .get(controller.getOne)
    .put(controller.update || (()=>{}))
    .delete(controller.delete || (()=>{}));
};
