
module.exports = app => {
  
  const filmesDB = app.data.filmes;
  const controller = {};

  const { filmes: filmesMock, } = filmesDB;

  controller.listfilmes = (req, res) => res.status(200).json(filmesDB);

  controller.savefilmes = (req, res) => {
    filmesMock.data.push({
      id: req.body.id,
      title: req.body.title,
      director: req.body.director,
      year: req.body.year,
      duration: req.body.duration,
      type: req.body.type
    });

    res.status(201).json(filmesMock);
  }

 
  
  controller.removefilmes = (req, res) => {
    const { filmeId, } = req.params;

    const foundFilmeIndex = filmesMock.data.findIndex(filme => filme.id === filmeId);

    if(foundFilmeIndex === -1){
      res.status(404).json({
        message: 'Filme não Encontrado!',
        success: false,
        filmes: filmesMock,
      });
    }else {
      filmesMock.data.splice(foundFilmeIndex, 1);
      res.status(200).json({
        message: 'Filme removido com sucesso!',
        success: true,
        filmes: filmesMock,
      });
    }

  }

  return controller;

  
}