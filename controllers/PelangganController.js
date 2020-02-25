const Pelanggan = require('../database/models').Pelanggan;
const Util = require('../utils/Utils');

const util = new Util();

const addPelanggan = async (req, res) => {
    if (!req.body.nama || !req.body.tanggal_daftar || !req.body.umur || !req.body.no_hp) {
            util.setError(400, 'Harap melengkapi semua data');
            return util.send(res);
        }
      const newPelanggan = req.body;
    try {
        const createdPelanggan = await Pelanggan.create(newPelanggan)
        util.setSuccess(201, 'Pelanggan berhasil ditambahkan!', createdPelanggan);
        return util.send(res);
      }catch (error) {
        util.setError(400, error.message);
        return util.send(res);
    }
};

const getAllPelanggan = async (req, res) => {
    try {
        const allPelanggan = await Pelanggan.findAll();
        if (allPelanggan.length > 0) {
          util.setSuccess(200, 'Berikut merupakan data semua Pelanggan ', allPelanggan);
        } else {
          util.setSuccess(200, 'Tidak ada data pelanggan');
        }
        return util.send(res);
      }catch (error) {
        util.setError(400, error.message);
        return util.send(res);
    }
};

const getPelangganById = async (req, res) => {
        const { id } = req.params;
        if (!Number(id)) {
            util.setError(400, 'Harap masukkan id pelanggan yang valid');
            return util.send(res);
        }
        try {
            const pelanggan = await Pelanggan.findOne({ where: { id: Number(id) } });
            if (!pelanggan) {
                util.setError(404, `Mohon maaf tidak dapat menemukan pelanggan dengan id ${id} `);
            } else {
                util.setSuccess(200, `Berhasil menemukan pelanggan dengan id ${id}`, pelanggan);
            }
                return util.send(res);
        }catch (error) {
            util.setError(404, error);
            return util.send(res);
        }
};

const updatePelanggan = async (req, res) => {
    return Pelanggan.findByPk(req.params.id)      
        .then(pelanggan => {
        if (!pelanggan) {
            return res.status(404).send({
            message: 'pelanggan tidak ada',
            });
        }
        return pelanggan
            .update({
                nama: req.body.nama || pelanggan.nama,
                tanggal_daftar: req.body.tanggal_daftar || pelanggan.tanggal_daftar,
                umur: req.body.umur || pelanggan.umur,
                no_hp: req.body.no_hp || pelanggan.no_hp
            })
            .then(() => res.status(200).send({
                    status:'succes',
                    message:'sukses mengupdate data pelanggan',
                    data: pelanggan
                }))
            .catch((error) => res.status(400).send(error));
        })
    .catch((error) => res.status(400).send(error));
};

const deletePelanggan = async (req, res) => {
    const { id } = req.params;

    if (!Number(id)) {
      util.setError(400, 'Harap masukkan id pelanggan yang valid');
      return util.send(res);
    }

    try {
        const pelangganToDelete = await Pelanggan.findOne({ where: { id: Number(id) } });
        const deletedPelanggan = await pelangganToDelete.destroy({
            where: { id: Number(id) }
          });
    
        if (deletedPelanggan) {
            util.setSuccess(200, `Berhasil menghapus data seorang pelanggan dengan id ${id}`);
        } else {
            util.setError(404, `Mohon maaf tidak dapat menemukan pelanggan dengan id ${id}`);
        }
        return util.send(res);
    } catch (error) {
        util.setError(400, error);
        return util.send(res);
    }
  };

module.exports = {
  addPelanggan,
  getAllPelanggan,
  getPelangganById,
  updatePelanggan,
  deletePelanggan
};