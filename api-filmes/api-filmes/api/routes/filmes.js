module.exports  = app => {
  const controller = app.controllers.filmes;

  app.route('/api/v1/filmes')
    .get(controller.listfilmes)
    .post(controller.savefilmes);
    

  app.route('/api/v1/filmes/:filmeId')
    .delete(controller.removefilmes);

  

   
    
}