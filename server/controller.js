const { documentModel } = require('./schema.js')

const getDocument = async (id) => {

    if ( id === null) return ;

    const document = await documentModel.findById(id);

    if(document) return document.data;

    return await documentModel.create({
        _id : id,
        data : "",
    })

}

const updateDocument = async (id, data) => {
    try {
      return await documentModel.findByIdAndUpdate(id, { data: data }, { new: true });
    } catch (error) {
      console.error("Error updating document:", error);
      return null;
    }
  };

module.exports = { getDocument,updateDocument };