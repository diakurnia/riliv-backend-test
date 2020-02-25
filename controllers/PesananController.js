const Pesanan = require('../database/models').Pesanan;
const Pelanggan = require('../database/models').Pelanggan;
const Util = require('../utils/Utils');

const util = new Util();

const addPesanan = async (req, res) => {
  if (!req.body.id_pelanggan || !req.body.tanggal_pesanan || !req.body.total_harga) {
    util.setError(400, 'Harap melengkapi semua data');
    return util.send(res);
  }
  const newPesanan = req.body;
  try {
    const createdPesanan = await Pesanan.create(newPesanan)
    util.setSuccess(201, 'Pesanan berhasil ditambahkan!', createdPesanan);
    return util.send(res);
  } catch (error) {
    util.setError(400, error.message);
    return util.send(res);
  }
};

const getAllPesanan = async (req, res) => {
  try {
    const allPesanan = await Pesanan.findAll({
      include: [
        {
          model: Pelanggan,
          as: 'pelanggan'
        }
      ]
    });
    if (allPesanan.length > 0) {
      util.setSuccess(200, 'Berikut merupakan data semua Pesanan ', allPesanan);
    } else {
      util.setSuccess(200, 'Tidak ada data pelanggan');
    }
    return util.send(res);
  } catch (error) {
    util.setError(400, error);
    return util.send(res);
  }
};

const getPesananById = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    util.setError(400, 'Harap masukkan id Pesanan yang valid');
    return util.send(res);
  }

  try {
    const pesanan = await Pesanan.findOne({
      where: { id: Number(id) },
        include: [
          {
            model: Pelanggan,
            as: 'pelanggan'
          }
        ]
    });

    if (!pesanan) {
      util.setError(404, `Mohon maaf tidak dapat menemukan Pesanan dengan id ${id} `);
    } else {
      util.setSuccess(200, `Berhasil menemukan Pesanan dengan id ${id}`, pesanan);
    }
    return util.send(res);
  } catch (error) {
    util.setError(404, error);
    return util.send(res);
  }
};

  //controller get data Pesanan berdasarkan id pelanggan tertentu
  const getPesananOfPelanggan = async (req, res) => {
    const  idPelanggan  = req.params.id;

    if (!Number(idPelanggan)) {
      util.setError(400, 'Harap masukkan id Pelanggan yang valid');
      return util.send(res);
    }

    try {
      const allPesanan = await Pesanan.findAll({
        where: { id_pelanggan: Number(idPelanggan) },
        include: [
          {
            model: Pelanggan,
            as: 'pelanggan'
          }
        ]
      });
      if (!allPesanan) {
        util.setError(404, `Mohon maaf tidak dapat menemukan Pesanan dengan id pelanggan ${idPelanggan} `);
      } else {
        util.setSuccess(200, `Berhasil menemukan semua Pesanan dengan id pelanggan ${idPelanggan}`, allPesanan);
      }
      return util.send(res);
    } catch (error) {
      util.setError(404, error);
      return util.send(res);
    }
  }


const updatePesanan = async (req, res) => {
    return Pesanan.findByPk(req.params.id)      
        .then(pesanan => {
        if (!pesanan) {
            return res.status(404).send({
            message: 'pesanan tidak ada',
            });
        }
        return pesanan
            .update({
              id_pelanggan: req.body.id_pelanggan || pelanggan.id_pelanggan,
              tanggal_pesanan: req.body.tanggal_pesanan || pelanggan.tanggal_pesanan,
              total_harga: req.body.total_harga || pelanggan.total_harga
            })
            .then(() => res.status(200).send({
                    status:'succes',
                    message:'sukses mengupdate data pesanan',
                    data: pesanan
                }))
            .catch((error) => res.status(400).send(error));
        })
    .catch((error) => res.status(400).send(error));
};

const deletePesanan = async (req, res) => {
  const { id } = req.params;

  if (!Number(id)) {
    util.setError(400, 'Harap masukkan id Pesanan yang valid');
    return util.send(res);
  }

  try {
    const pesananToDelete = await Pesanan.findOne({ where: { id: Number(id) } });
    const deletedPesanan = await pesananToDelete.destroy({
      where: { id: Number(id) }
    });

    if (deletedPesanan) {
      util.setSuccess(200, 'Berhasil menghapus data Pesanan');
    } else {
      util.setError(404, `Mohon maaf tidak dapat menemukan Pesanan dengan id ${id}`);
    }
    return util.send(res);
  } catch (error) {
    util.setError(400, error);
    return util.send(res);
  }
};

module.exports = {
  addPesanan,
  getAllPesanan,
  getPesananOfPelanggan,
  getPesananById,
  updatePesanan,
  deletePesanan
};