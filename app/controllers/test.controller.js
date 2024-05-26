const Tutorial = require("../models/tutorial.model.js");
const Multiparty = require('multiparty');    //用于文件上传
// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  // Create a Tutorial
  const tutorial = new Tutorial({
    title: req.body.title,
    description: req.body.description,
    published: req.body.published || false
  });

  // Save Tutorial in the database
  Tutorial.create(tutorial, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    else res.send(data);
  });
};

// Retrieve all Tutorials from the database (with condition).
exports.findAll = (req, res) => {
  const title = req.query.title;

  Tutorial.getAll(title, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Find a single Tutorial by Id
exports.findOne = (req, res) => {
  Tutorial.findById(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Tutorial with id " + req.params.id
        });
      }
    } else res.send(data);
  });
};

// find all published Tutorials
exports.findAllPublished = (req, res) => {
  Tutorial.getAllPublished((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};

// Update a Tutorial identified by the id in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
  }

  console.log(req.body);

  Tutorial.updateById(
    req.params.id,
    new Tutorial(req.body),
    (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Tutorial with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Error updating Tutorial with id " + req.params.id
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  Tutorial.remove(req.params.id, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Tutorial with id ${req.params.id}.`
        });
      } else {
        res.status(500).send({
          message: "Could not delete Tutorial with id " + req.params.id
        });
      }
    } else res.send({ message: `Tutorial was deleted successfully!` });
  });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  Tutorial.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all tutorials."
      });
    else res.send({ message: `All Tutorials were deleted successfully!` });
  });
};

exports.recognition = (req, res) => {
    console.log(res.text)
    var form = new Multiparty.Form({ uploadDir: './public/audio' });    //new一个Multiparty对象，并且设置上传文件的目标路径
    form.parse(req, function (err, fields, files) {
        if (err) {
            res.json({
                ret: -1,
                data: {},
                msg: '未知错误'
            })
        } else {
            console.log(files.file[0])
            var inputFile = files.file[0];
            var uploadedPath = inputFile.path;
            res.json({
                ret: -1,
                data: {},
                msg: '未知错误'
            })

            //return JSON.stringify(res);
            //var command=ffmpeg();
            //command.addInput(uploadedPath).saveToFile('./public/audio/16k.wav').on('error',function(err){   //将上传的文件进行转换格式然后保存到目标文件夹
            //  console.log(err)
            // }).on('end',function(){
            // console.log('success');
            // var  voice=fs.readFileSync('./public/audio/16k.wav');  //读取文件
            // var voiceBuffer=new Buffer(voice);
            // console.log(voiceBuffer);
            // client.recognize(voiceBuffer,'wav',16000).then(function(result){   //调用百度的语音识别接口
            //   console.log(result);
            //   if(result.err_no===0){
            //     data=result.result;
            //     res.json({
            //       res:result.err_no,
            //       data:{
            //         data:data
            //       },
            //       msg:result.err_msg
            //     })
            //   }else{
            //     // console.log('err')
            //     res.json(result)
            //   }
            // })
            // fs.unlink(uploadedPath,function(err){    //删除从前端上传过来的临时音频文件
            //   if(err){
            //     console.log(uploadedPath+'文件删除失败',err)
            //   }else{
            //     console.log(uploadedPath+'文件删除成功')
            //   }
            // }
            //)
            //})
        }
    })
};